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
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import {
  blockAction,
  dropDownSelect,
  updateFRAction,
  nextBlockAction,
  prevBlockAction,
} from '../actions/blockActions';

const QuestionBlock = ({
  blockAction,
  dropDownSelect,
  updateFRAction,
  nextBlockAction,
  prevBlockAction,
  questions,
  block_id,
  blocks,
  current_block,
  blocks_seen,
  ping,
}) => {
  // set current block & questions
  current_block = blocks.find((b) => b.block_id === block_id);
  questions = current_block.questions;

  const isSelected = (value, option) => {
    return (value, value.find((o) => o === option.value) !== undefined)
      ? 'orange'
      : 'black';
  };

  const dropdownChange = (event, { value }, qId) => {
    console.log(value, qId);
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
    console.log(qId, val);
    updateFRAction(block_id, qId, val);
  };

  const reviewClicked = () => {
    console.log('review clicked');
  };

  const reviewEnabled = () => {
    let unfinished = blocks.filter(
      (b) => b.required && b.enabled && nextDisabled(b.block_id)
    );
    let curr_index = blocks.indexOf(
      blocks.find((b) => b.block_id === block_id)
    );

    if (blocks_seen != undefined) {
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
    console.log('checking to enable next', b_id);
    let currBlock = blocks.find((b) => b.block_id === b_id);
    let unfinished = currBlock.questions.filter(
      (q) =>
        q.required && q.enabled && (q.value === null || q.value.length === 0)
    );
    console.log(
      unfinished === undefined || unfinished.length > 0
        ? 'not done'
        : 'all done'
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
    return Math.floor(
      (blocks.indexOf(blocks.find((b) => b.block_id === block_id)) /
        blocks.length) *
        100
    );
  };

  const nextBlockActionLocal = () => {
    if (!nextDisabledVar) {
      console.log('here');
      nextBlockAction();
    } else {
      console.log('not done');
    }
  };

  return (
    <Fragment>
      <Progress percent={getProgress()} color={'blue'} progress />
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
        <Header size={'tiny'} color={'blue'} style={{ fontSize: '70%' }}>
          {current_block.block_header}
        </Header>
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
              <Container
                fluid
                key={q.id}
                style={{
                  backgroundColor: 'white',
                  padding: '3%',
                  borderRadius: '10px',
                  marginTop: '2%',
                  marginBottom: '2%',
                }}
              >
                <Grid divided columns={2}>
                  <Grid.Row>
                    <Grid.Column textAlign={'left'} width={8}>
                      <Container text fluid style={{ maxWidth: '30%' }}>
                        <Header size={'tiny'}>{q.question_header}</Header>
                        <p>{q.question_desc}</p>
                        {q.img !== '' && <Image src={q.img} fluid />}
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
                          float: 'right',
                        }}
                      >
                        {(q.type === 'MC' || q.type === 'SATA') &&
                          q.options.map((o) => (
                            <Segment
                              textAlign={'center'}
                              inverted
                              color={isSelected(q.value, o)}
                              onClick={() =>
                                blockAction(block_id, q.id, o.value)
                              }
                              key={o.value}
                              style={{
                                width: '45%',
                                margin: '1%',
                                fontSize: '1.1rem',
                              }}
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
                              defaultValue={q.value}
                              options={getOptions(q.options)}
                              onChange={(e, s) => dropdownChange(e, s, q.id)}
                              style={{ fontSize: '50%' }}
                            />
                          </Container>
                        )}
                        {q.type === 'FR' && (
                          <Container key={q.id}>
                            <input
                              name={q.value}
                              defaultValue={
                                q.fr_type === 'date'
                                  ? new Date().toISOString().substr(0, 10)
                                  : q.value
                              }
                              type={q.fr_type}
                              onChange={(val) =>
                                onTextChange(q.id, val.target.value)
                              }
                              style={{
                                fontSize: '65%',
                                width: '100%',
                                padding: '1%',
                              }}
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
      <Container style={{ position: 'absolute', bottom: '3.6%' }}>
        <Grid>
          <Grid.Row columns={'3'}>
            <Grid.Column floated='left'>
              {previousVisible() && (
                <Segment
                  style={{ margin: '2%' }}
                  inverted
                  color={'blue'}
                  onClick={() => prevBlockAction()}
                  className={'buttonSegEnabled'}
                >
                  Previous Question
                </Segment>
              )}
            </Grid.Column>
            <Grid.Column>
              {reviewEnabled() && (
                <Link to='/review'>
                  <Segment
                    style={{ margin: '2%' }}
                    inverted
                    color={'green'}
                    onClick={() => reviewClicked()}
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
                  Next Question
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
  };
};

export default connect(mapStateToProps, {
  blockAction,
  dropDownSelect,
  updateFRAction,
  nextBlockAction,
  prevBlockAction,
})(QuestionBlock);
