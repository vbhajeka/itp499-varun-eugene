import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import {
  Modal,
  Header,
  Table,
  Container,
  Button,
  Icon,
} from 'semantic-ui-react';

import { toggleOpenSpecific } from '../actions/exportActions';

import './components.css';

const ExportModalContent = ({ toggleOpenSpecific, isOpen, surveys, index }) => {
  console.log(surveys);
  const currSurvey = surveys.find((s) => s.date === index);

  const getVals = (values) => {
    let retVal = '';
    values.forEach((v) => {
      retVal += `${v}, `;
    });
    return retVal.substring(0, retVal.length - 2);
  };

  const groupSurveysByBlocks = (serv) => {
    let retVal = [];
    let currBlock;
    serv.surveyAnswers.forEach((s) => {
      const exists = retVal.find((x) => x.blockName === s.block);
      if (exists) {
        exists.questions.push(s);
      } else {
        currBlock = { blockName: '', questions: [] };
        currBlock.blockName = s.block;
        currBlock.questions.push(s);
        retVal.push(currBlock);
      }
    });
    return retVal;
  };

  let blocks;

  if (isOpen) {
    blocks = groupSurveysByBlocks(currSurvey);
    console.log(blocks);
  }

  return (
    <Fragment>
      {isOpen && (
        <Modal open={isOpen} basic closeIcon closeOnDimmerClick>
          <Modal.Content>
            <Container
              fluid
              id='header'
              style={{
                backgroundColor: 'white',
                padding: '3%',
                borderRadius: '5px',
              }}
            >
              <Header
                size={'tiny'}
                color={'blue'}
                style={{ fontSize: '1.2rem' }}
              >
                Survey Submission
              </Header>
            </Container>
            <Container
              style={{
                overflowX: 'auto',
                marginTop: '5%',
              }}
            >
              {blocks.map((block) => (
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
                    style={{ fontSize: '1.1rem' }}
                    color={'blue'}
                  >
                    {block.blockName}
                  </Header>
                  <Table striped celled style={{ fontSize: '1rem' }}>
                    <Table.Body>
                      {block.questions.map((q) => (
                        <Table.Row key={`${q.id}`}>
                          <Table.Cell width={'8'}>{q.question}</Table.Cell>
                          <Table.Cell>
                            <Header size={'tiny'}>{getVals(q.value)}</Header>
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                </Container>
              ))}
            </Container>
          </Modal.Content>
          <Modal.Actions style={{ textAlign: 'center' }}>
            <Button color='red' inverted onClick={() => toggleOpenSpecific()}>
              <Icon name='remove' /> Close
            </Button>
          </Modal.Actions>
        </Modal>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.exportData.openSpecific,
    surveys: state.exportData.surveyData,
    index: state.exportData.toDisplay,
  };
};

export default connect(mapStateToProps, { toggleOpenSpecific })(
  ExportModalContent
);
