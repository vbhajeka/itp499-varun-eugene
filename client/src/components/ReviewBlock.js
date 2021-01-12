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
import { Link } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import { submitAction } from '../actions/blockActions';
import { modalActions } from '../actions/stateActions';

import { useAuth0 } from '@auth0/auth0-react';

const ReviewBlock = ({
  ping,
  blocks,
  surveyID,
  cancelModalIsOpen,
  submitAction,
  modalActions,

  token,
}) => {
  const { user } = useAuth0();

  const getVals = (values) => {
    let retVal = '';
    values.forEach((v) => {
      retVal += `${v}, `;
    });
    return retVal.substring(0, retVal.length - 2);
  };

  const reviewClicked = () => {
    console.log('beginning review actions');
    let body = {
      surveyID: surveyID,
      answers: [],
      doctor: user.name,
    };
    blocks.forEach((block) => {
      if (block.enabled) {
        block.questions.forEach((q) => {
          if (q.enabled && q.value.length !== 0) {
            let entry = {
              block: block.block_header,
              question: q.question_header,
              value: q.value,
            };
            body.answers.push(JSON.stringify(entry));
          }
        });
      }
    });
    console.log(body);
    submitAction(body, token);
  };

  return (
    <Fragment>
      <Modal basic open={cancelModalIsOpen}>
        <Modal.Content>
          <p>
            Are you sure you'd like to cancel this survey and return to the home
            page? All survey data will be lost
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Link to='/'>
            <Button
              basic
              color='red'
              inverted
              onClick={() => modalActions(true)}
            >
              <Icon name='remove' /> Cancel
            </Button>
          </Link>
          <Button color='green' inverted onClick={() => modalActions(false)}>
            <Icon name='checkmark' /> Back to the Review
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
                  Previous Section
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
                Cancel Survey
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Link to='/'>
                <Segment
                  style={{ margin: '2%' }}
                  inverted
                  color={'green'}
                  onClick={() => reviewClicked()}
                  className={'buttonSegEnabled'}
                >
                  Submit Survey
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

    token: state.state.Auth0Token,
  };
};

export default connect(mapStateToProps, { submitAction, modalActions })(
  ReviewBlock
);
