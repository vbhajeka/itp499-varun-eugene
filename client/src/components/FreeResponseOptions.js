import React, { Fragment, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './components.css';
import { selectAction } from '../actions/testAction';

import {
  nextQuestionAction,
  selectOptionAction,
} from '../actions/surveyActions';

const FreeResponseOptions = ({ selectOptionAction }) => {
  const [formData, setFormData] = useState({
    textInput: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    selectOptionAction(e.target.value);
  };

  return (
    <Fragment>
      <textarea
        rows='4'
        name='textInput'
        onChange={(e) => handleChange(e)}
        className='textArea'
      />
    </Fragment>
  );
};

// FreeResponseOptions.propTypes = {
//   selectAction: PropTypes.func.isRequired,
//   questionOptions: PropTypes.array.isRequired,
//   selected: PropTypes.object,
// };

const mapStateToProps = (state) => ({
  questionOptions: state.questionBankReducer.current.options,
  selected: state.questionBankReducer.current.selected,
});

export default connect(mapStateToProps, {
  selectOptionAction,
})(FreeResponseOptions);
