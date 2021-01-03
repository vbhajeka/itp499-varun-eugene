import 'semantic-ui-css/semantic.min.css';
import '../index.css';

import { Grid, Header, Button, Container, Segment } from 'semantic-ui-react';

import MultiQuestionOptions from './MultiQuestionOptions';
import FreeResponseOptions from './FreeResponseOptions';
import NewOptions from './NewOptions';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { nextQuestion, prevQuestion } from '../actions/testAction';
import {
  nextQuestionAction,
  prevQuestionAction,
} from '../actions/surveyActions';

import PropTypes from 'prop-types';
import { Fragment } from 'react';

const QuestionGrid = ({
  nextQuestion,
  prevQuestion,
  questionTitle,
  questionText,

  currentId,
  allDetails,
  nextQuestionAction,
  prevQuestionAction,
  isFirst,
  isLast,
}) => {
  const currDetails = allDetails.find((o) => o.id === currentId);

  return (
    <Fragment>
      <Grid verticalAlign='middle'>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Header size='huge' id='questionTitleHeader'>
              {currDetails.header}
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2} divided stretched>
          <Grid.Column>
            <Segment>
              <p>{currDetails.text}</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            {(currDetails.type === 'MC' || currDetails.type === 'SATA') && (
              <NewOptions />
            )}
            {currDetails.type === 'FR' && <FreeResponseOptions />}
            {currDetails.type === 'MFR' && <MultiQuestionOptions />}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            {!isFirst && (
              <Button onClick={() => prevQuestionAction()}>Previous</Button>
            )}
          </Grid.Column>
          <Grid.Column>
            {!isLast && (
              <Button onClick={() => nextQuestionAction()}>Next</Button>
            )}
            {isLast && <Button>Review</Button>}
          </Grid.Column>
        </Grid.Row>
        <Link to='/confirm'>placeholder</Link>
      </Grid>
    </Fragment>
  );
};

QuestionGrid.propTypes = {
  nextQuestion: PropTypes.func.isRequired,
  prevQuestion: PropTypes.func.isRequired,
  questionText: PropTypes.string.isRequired,
  questionTitle: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    questionTitle: state.questionBankReducer.current.title,
    questionText: state.questionBankReducer.current.text,
    currentId: state.survey.current,
    allDetails: state.survey.questions,
    isFirst: state.survey.firstQuestion,
    isLast: state.survey.lastQuestion,
  };
};

export default connect(mapStateToProps, {
  nextQuestion,
  prevQuestion,
  nextQuestionAction,
  prevQuestionAction,
})(QuestionGrid);
