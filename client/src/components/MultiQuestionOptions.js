import { getSuggestedQuery } from '@testing-library/react';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Header, Dropdown } from 'semantic-ui-react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './components.css';
import { multiFreeResponseSelectAction } from '../actions/surveyActions';

const MultiQuestionOptions = ({
  currentID,
  questionBank,
  multiFreeResponseSelectAction,
}) => {
  const onTextChange = (subQId, val) => {
    console.log(subQId, val.target.value);
    multiFreeResponseSelectAction(subQId, val.target.value);
  };

  //   const dropdownChange = (subQId, val) => {
  //     console.log(subQId, val.target.innerText);
  //     console.log(val);
  //     multiFreeResponseSelectAction(subQId, val.target.innerText);
  //   };

  const getOptions = (options) => {
    options.forEach((o) => {
      o.key = o.value;
      o.text = o.value;
    });
    return options;
  };

  const currQ = questionBank.find((o) => o.id === currentID);

  let subQuestions = [];

  currQ.options.forEach((element) => {
    subQuestions.push(questionBank.find((o) => o.id === element.q_id));
  });

  console.log(subQuestions);

  const dropdownChange = (event, { value }, subQId) => {
    multiFreeResponseSelectAction(subQId, value);
  };

  return (
    <Fragment>
      {subQuestions !== null &&
        subQuestions.length > 0 &&
        subQuestions.map((qOption) =>
          qOption.type === 'MFRSATA' || qOption.type === 'MFRO' ? (
            <div key={qOption.id}>
              <Header block color={'red'} size={'large'}>
                {qOption.header}
              </Header>
              <Dropdown
                fluid
                multiple={qOption.type === 'MFRSATA'}
                selection
                clearable
                options={getOptions(qOption.options)}
                onChange={(e, s) => dropdownChange(e, s, qOption.id)}
                style={{ fontSize: '50%' }}
              />
            </div>
          ) : (
            //if MFRFR
            <div key={qOption.id}>
              <Header block color={'red'} size={'large'}>
                {qOption.header}
              </Header>
              <input
                name={qOption.value}
                onChange={(val) => onTextChange(qOption.id, val)}
              ></input>
            </div>
          )
        )}
    </Fragment>
  );
};

MultiQuestionOptions.propTypes = {};

const mapStateToProps = (state) => ({
  questionOptions: state.questionBankReducer.current.options,
  selected: state.questionBankReducer.current.selected,

  currentID: state.survey.current,
  questionBank: state.survey.questions,
});

export default connect(mapStateToProps, { multiFreeResponseSelectAction })(
  MultiQuestionOptions
);
