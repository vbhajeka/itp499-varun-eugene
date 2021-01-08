import React, { Fragment } from 'react';

import { connect } from 'react-redux';

import { Container, Header, Grid, Table, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { submitAction } from '../actions/blockActions';

const ReviewBlock = ({ ping, blocks, surveyID, submitAction }) => {
  console.log(ping);

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
            body.answers.push(entry);
          }
        });
      }
    });
    console.log(body);
    submitAction(body);
  };

  return (
    <Fragment>
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
                <Table celled style={{ fontSize: '45%' }}>
                  <Table.Body>
                    {block.questions.map(
                      (q) =>
                        q.enabled &&
                        q.value.length !== 0 && (
                          <Table.Row key={q.id}>
                            <Table.Cell width={'8'}>
                              {q.question_header}
                            </Table.Cell>
                            <Table.Cell>{getVals(q.value)}</Table.Cell>
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
          <Grid.Row columns={'3'}>
            <Grid.Column></Grid.Column>
            <Grid.Column>
              <Segment
                style={{ margin: '2%' }}
                inverted
                color={'green'}
                onClick={() => reviewClicked()}
                className={'buttonSegEnabled'}
              >
                Submit
              </Segment>
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
  };
};

export default connect(mapStateToProps, { submitAction })(ReviewBlock);
