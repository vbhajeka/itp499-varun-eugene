import React, { Fragment } from 'react';

import { connect } from 'react-redux';

import {
  Container,
  Header,
  Grid,
  Table,
  Segment,
  Modal,
  Button,
  Icon,
} from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import { submitAction } from '../actions/blockActions';
import { modalActions, updateHPMessage } from '../actions/stateActions';
import { saveAddys } from '../actions/resultsActions';

import { useAuth0 } from '@auth0/auth0-react';

import axios from 'axios';

const jwToken = require('jsonwebtoken');

const ReviewBlock = ({
  ping,
  blocks,
  surveyID,
  cancelModalIsOpen,
  submitAction,
  modalActions,
  updateHPMessage,
  saveAddys,
}) => {
  const { user, getAccessTokenSilently } = useAuth0();

  // make sure we have questions to display - if not, redirect to home page
  const history = useHistory();
  if (blocks === undefined) {
    history.push('/');
    return <div>empty</div>;
  }

  const getVals = (values) => {
    let retVal = '';
    values.forEach((v) => {
      retVal += `${v}, `;
    });
    return retVal.substring(0, retVal.length - 2);
  };

  const reviewClicked = async () => {
    console.log('beginning review actions');
    let surveyData = {
      surveyID: surveyID,
      answers: [],
      prefs: [],
      doctor: user.name,
      versionID: '1.0',
    };
    blocks.forEach((block) => {
      if (block.enabled) {
        block.questions.forEach((q) => {
          if (q.enabled && q.value.length !== 0) {
            let entry = {
              id: q.id,
              block: block.block_header,
              question: q.question_header,
              value: q.value,
            };
            surveyData.answers.push(JSON.stringify(entry));
            if (q.isPref) {
              let prefEntry = {
                id: q.id,
                block: block.block_id,
                value: q.value,
              };
              surveyData.prefs.push(JSON.stringify(prefEntry));
            }
          }
        });
      }
    });
    console.log(`survey data is ${surveyData}`);
    try {
      let token = await getAccessTokenSilently();
      console.log('ReviewBlk.js: token set ' + token);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const body = JSON.stringify(surveyData);

      const decoded = jwToken.decode(token, { complete: true });
      const emailAddy = decoded.payload['http://hipstr-survey/email'];

      const res = await axios.post('/api/submitSurvey', body, config);
      console.log(res);

      if (res.data.msgs.length > 0) {
        let msg = '';
        res.data.msgs.forEach((m) => (msg += m));
        updateHPMessage(msg);
      } else {
        updateHPMessage(
          `Successfully submitted survey! An email with your selections has been sent to ${emailAddy}`
        );
      }

      // make sure these are being sent by backend
      // Survey saved, preferences saved and email sent
      // Survey saved and email saved
      // Survey saved but email not sent
      // updateHomepageMessage(res.data {msg, type})
    } catch (err) {
      // db write failed - go back to homepage with error 'Error with submission of survey.'
      updateHPMessage('Error with submission of Survey');
      console.log(err);
    }

    submitAction();
  };

  const saveAddresses = () => {
    const homeAddy = `${blocks[2].questions[0].value} ${blocks[2].questions[1].value}, ${blocks[2].questions[2].value} ${blocks[2].questions[3].value}`;

    const workAddy = `${blocks[2].questions[4].value} ${blocks[2].questions[5].value}, ${blocks[2].questions[6].value} ${blocks[2].questions[7].value}`;

    saveAddys(homeAddy, workAddy);
  };

  return (
    <Fragment>
      <Modal basic open={cancelModalIsOpen}>
        <Modal.Content>
          <p>
            Are you sure you'd like to abandon this survey and return to the
            home page? All survey data will be lost
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Link to='/'>
            <Button color='red' inverted onClick={() => modalActions(true)}>
              <Icon name='remove' /> Abandon
            </Button>
          </Link>
          <Button color='green' inverted onClick={() => modalActions(false)}>
            <Icon name='checkmark' /> Continue Review
          </Button>
        </Modal.Actions>
      </Modal>
      <Container
        fluid
        id='header'
        style={{
          backgroundColor: 'white',
          padding: '3%',
          borderRadius: '10px',
        }}
      >
        <Header size={'tiny'} color={'blue'} style={{ fontSize: '70%' }}>
          Review Selections
        </Header>
      </Container>
      <Container
        style={{ overflowX: 'auto', marginBottom: '6.5%', marginTop: '2%' }}
      >
        {blocks.map(
          (block) =>
            block.enabled && (
              <Container
                key={block.block_id}
                style={{
                  backgroundColor: 'white',
                  padding: '2.5%',
                  borderRadius: '10px',
                  margin: '1%',
                }}
              >
                <Header
                  size={'tiny'}
                  style={{ fontSize: '55%' }}
                  color={'blue'}
                >
                  {block.block_header}
                </Header>
                <Table striped celled style={{ fontSize: '45%' }}>
                  <Table.Body>
                    {block.questions.map(
                      (q) =>
                        q.enabled &&
                        q.value.length !== 0 && (
                          <Table.Row key={q.id}>
                            <Table.Cell width={'8'}>
                              {q.question_header}
                            </Table.Cell>
                            <Table.Cell>
                              <Header size={'tiny'}>{getVals(q.value)}</Header>
                            </Table.Cell>
                          </Table.Row>
                        )
                    )}
                  </Table.Body>
                </Table>
              </Container>
            )
        )}
      </Container>
      <Container style={{ position: 'absolute', bottom: '3.6%' }}>
        <Grid>
          <Grid.Row columns={'4'}>
            <Grid.Column>
              <Link to='/survey'>
                <Segment
                  style={{ margin: '2%' }}
                  inverted
                  color={'blue'}
                  className={'buttonSegEnabled'}
                >
                  Previous
                </Segment>
              </Link>
            </Grid.Column>
            <Grid.Column floated='left'>
              <Segment
                style={{ margin: '2%' }}
                inverted
                color={'red'}
                onClick={() => modalActions(false)}
                className={'buttonSegEnabled'}
              >
                Cancel
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Link to='/results'>
                <Segment
                  style={{ margin: '2%' }}
                  inverted
                  color={'green'}
                  className={'buttonSegEnabled'}
                  onClick={() => saveAddresses()}
                >
                  Submit
                </Segment>
              </Link>
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    ping: state.blocks.ping,
    blocks: state.blocks.blocks,
    surveyID: state.blocks.surveyID,
    cancelModalIsOpen: state.state.cancelModalIsOpen,
  };
};

export default connect(mapStateToProps, {
  submitAction,
  modalActions,
  updateHPMessage,
  saveAddys,
})(ReviewBlock);
