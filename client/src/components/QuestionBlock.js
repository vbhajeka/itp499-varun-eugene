import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import {
  Container,
  Header,
  Grid,
  Segment,
  Dropdown,
  Progress,
  Image,
  Modal,
  Icon,
  Button,
} from 'semantic-ui-react';

import { Link, useHistory } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import './components.css';

import {
  blockAction,
  dropDownSelect,
  updateFRAction,
  nextBlockAction,
  prevBlockAction,
} from '../actions/blockActions';

import { modalActions } from '../actions/stateActions';

const QuestionBlock = ({
  blockAction,
  dropDownSelect,
  updateFRAction,
  nextBlockAction,
  prevBlockAction,
  modalActions,
  questions,
  block_id,
  blocks,
  current_block,
  blocks_seen,
  ping,
  cancelModalIsOpen,
}) => {
  // make sure we have questions to display - if not, redirect to home page
  const history = useHistory();
  if (blocks === undefined) {
    history.push('/');
    return <div>empty</div>;
  }
  // set current block & questions
  current_block = blocks.find((b) => b.block_id === block_id);
  questions = current_block.questions;

  const isSelected = (value, option) => {
    return (value, value.find((o) => o === option.value) !== undefined)
      ? 'orange'
      : 'black';
  };

  const dropdownChange = (event, { value }, qId) => {
    // console.log(value, qId);
    dropDownSelect(block_id, qId, value);
  };

  const getOptions = (options) => {
    let ddOptions = [];
    options.forEach((o) => {
      ddOptions.push({ key: o.value, value: o.value, text: o.value });
    });
    return ddOptions;
  };

  const onTextChange = (qId, val) => {
    // console.log(qId, val);
    updateFRAction(block_id, qId, val);
  };

  const reviewEnabled = () => {
    let unfinished = blocks.filter(
      (b) => b.required && b.enabled && nextDisabled(b.block_id)
    );
    let curr_index = blocks.indexOf(
      blocks.find((b) => b.block_id === block_id)
    );

    if (blocks_seen !== undefined) {
      for (let i = curr_index; i < blocks.length; i++) {
        const this_block = blocks[i];
        if (this_block.enabled && !blocks_seen.includes(blocks[i].block_id)) {
          return false;
        }
      }
    }
    return unfinished.length > 0 ? false : true;
  };

  const nextDisabled = (b_id = block_id) => {
    let currBlock = blocks.find((b) => b.block_id === b_id);
    let unfinished = currBlock.questions.filter(
      (q) =>
        q.required && q.enabled && (q.value === null || q.value.length === 0)
    );
    return unfinished === undefined || unfinished.length > 0 ? true : false;
  };

  const nextDisabledVar = nextDisabled();

  const previousVisible = () => {
    let check = blocks.indexOf(blocks.find((b) => b.block_id === block_id)) - 1;
    while (check >= 0) {
      if (blocks[check].enabled) {
        return true;
      }
      check--;
    }
    return false;
  };

  const nextVisible = () => {
    let check = blocks.indexOf(blocks.find((b) => b.block_id === block_id)) + 1;
    while (check < blocks.length) {
      if (blocks[check].enabled) {
        return true;
      }
      check++;
    }
    return false;
  };

  const getProgress = () => {
    const numEnabled = blocks.filter((b) => b.enabled);
    let numCompleted = 1;
    for (
      let i = 0;
      i < blocks.indexOf(blocks.find((b) => b.block_id === block_id));
      i++
    ) {
      if (blocks[i].enabled) {
        numCompleted++;
      }
    }
    console.log(
      'progress is',
      Math.floor((numCompleted / numEnabled.length) * 100)
    );
    return Math.floor((numCompleted / numEnabled.length) * 100);
  };

  const nextBlockActionLocal = () => {
    if (!nextDisabledVar) {
      nextBlockAction();
    } else {
    }
  };

  const getDefaultValue = (type, val) => {
    if (val === []) {
      return [];
    }
    if (type === 'DDS') {
      return val[0];
    } else {
      return val;
    }
  };

  const setTodaysDate = (q_id) => {
    let now = new Date();
    let month = `${now.getMonth() + 1}`;
    if (month.length === 1) {
      month = `0${month}`;
    }
    let date = `${now.getDate()}`;
    if (date.length === 1) {
      date = `0${date}`;
    }
    let dateIso = `${now.getFullYear()}-${month}-${date}`;
    if (current_block.questions.find((q) => q.id === q_id).value.length === 0) {
      onTextChange(q_id, dateIso);
    }
    return dateIso;
  };

  const getAllQIds = () => {
    let ids = [];
    let retVal = '';
    blocks.forEach((b) => {
      b.questions.forEach((q) => {
        ids.push(q.id);
        retVal += q.id + ', ';
      });
    });
    console.log(ids);
    console.log(retVal);
    return retVal;
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
            <Icon name='checkmark' /> Continue Survey
          </Button>
        </Modal.Actions>
      </Modal>
      <Progress
        percent={getProgress()}
        color={'blue'}
        style={{ marginBottom: '1.5rem' }}
        progress
        active
      />
      <Container
        fluid
        id='header'
        style={{
          backgroundColor: 'white',
          padding: '2%',
          paddingBottom: '1.5%',
          borderRadius: '10px',
        }}
      >
        {current_block.required && (
          <Header size={'tiny'} color={'blue'} style={{ fontSize: '70%' }}>
            {current_block.block_header}
          </Header>
        )}
        {!current_block.required && (
          <Header size={'tiny'} color={'orange'} style={{ fontSize: '70%' }}>
            {current_block.block_header} (Optional)
          </Header>
        )}
        <Container text fluid>
          <p>{current_block.block_description}</p>
        </Container>
      </Container>
      <Container
        style={{ overflowX: 'auto', marginBottom: '6.5%', marginTop: '2%' }}
      >
        {questions.map(
          (q) =>
            q.enabled && (
              <Container fluid key={q.id} className={'questionBlock'}>
                <Grid divided stackable columns={2}>
                  <Grid.Row>
                    <Grid.Column textAlign={'left'} width={8}>
                      <Container text fluid style={{ maxWidth: '30%' }}>
                        <Header size={'tiny'}>{q.question_header}</Header>
                        <p>{q.question_desc}</p>
                        {q.img !== undefined &&
                          q.img !== null &&
                          q.img !== '' && <Image src={q.img} fluid />}
                        {q.long_question_desc != null &&
                          q.long_question_desc.length > 0 &&
                          q.long_question_desc.map((desc) => (
                            <p key={desc}>{desc}</p>
                          ))}
                      </Container>
                    </Grid.Column>
                    <Grid.Column width={8} textAlign={'right'}>
                      <Container
                        fluid
                        style={{
                          display: 'flex',
                          flexFlow: 'wrap',
                        }}
                      >
                        {(q.type === 'MC' || q.type === 'SATA') &&
                          q.options.map((o) => (
                            <Segment
                              textAlign={'center'}
                              inverted
                              color={isSelected(q.value, o)}
                              onClick={() =>
                                blockAction(block_id, q.id, o.value, o.enumVal)
                              }
                              key={o.value}
                              style={{
                                margin: '1%',
                                fontSize: '1.1rem',
                              }}
                              className={'selectButtons'}
                            >
                              {o.value}
                            </Segment>
                          ))}
                        {(q.type === 'DDS' || q.type === 'DDM') && (
                          <Container key={q.id}>
                            <Dropdown
                              fluid
                              multiple={q.type === 'DDM'}
                              selection
                              clearable
                              defaultValue={getDefaultValue(q.type, q.value)}
                              options={getOptions(q.options)}
                              onChange={(e, s) => dropdownChange(e, s, q.id)}
                              style={{ fontSize: '1rem' }}
                            />
                          </Container>
                        )}
                        {q.type === 'FR' && (
                          <Container key={q.id}>
                            <input
                              name={q.value}
                              defaultValue={q.value}
                              type={q.fr_type}
                              onChange={(val) =>
                                onTextChange(q.id, val.target.value)
                              }
                              className={'inputField'}
                            ></input>
                          </Container>
                        )}
                      </Container>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            )
        )}
      </Container>
      <Container
        className={'bottomButtons'}
        style={{ position: 'absolute', bottom: '3.6%' }}
      >
        <Grid container>
          <Grid.Row columns={'4'}>
            <Grid.Column floated='left'>
              {previousVisible() && (
                <Segment
                  style={{ margin: '2%' }}
                  inverted
                  color={'blue'}
                  onClick={() => prevBlockAction()}
                  className={'buttonSegEnabled'}
                >
                  Previous
                </Segment>
              )}
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
              {reviewEnabled() && (
                <Link to='/review'>
                  <Segment
                    style={{ margin: '2%' }}
                    inverted
                    color={'green'}
                    className={'buttonSegEnabled'}
                  >
                    Review
                  </Segment>
                </Link>
              )}
            </Grid.Column>
            <Grid.Column floated='right'>
              {nextVisible() && (
                <Segment
                  style={{ margin: '2%' }}
                  inverted
                  color={'blue'}
                  onClick={() => nextBlockActionLocal()}
                  disabled={nextDisabledVar}
                  className={
                    nextDisabledVar ? 'buttonSegDisabled' : 'buttonSegEnabled'
                  }
                >
                  Next
                </Segment>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    // questions: state.blocks.questions,
    ping: state.blocks.ping,

    block_id: state.blocks.current,
    blocks: state.blocks.blocks,
    blocks_seen: state.blocks.blocks_seen,

    cancelModalIsOpen: state.state.cancelModalIsOpen,
  };
};

export default connect(mapStateToProps, {
  blockAction,
  dropDownSelect,
  updateFRAction,
  nextBlockAction,
  prevBlockAction,
  modalActions,
})(QuestionBlock);
