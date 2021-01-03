import 'semantic-ui-css/semantic.min.css';
import { Segment } from 'semantic-ui-react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './components.css';
import { selectAction } from '../actions/testAction';

import { selectOptionAction } from '../actions/surveyActions';

const NewOptions = ({ qDetails, selectOptionAction, currentQ_ID, ping }) => {
  const clicked = function (message) {
    console.log(message);
    selectOptionAction(message);
  };

  console.log(qDetails);

  return (
    <Fragment>
      {qDetails !== null &&
        qDetails.options !== null &&
        qDetails.options.length > 0 &&
        qDetails.options.map((qOption) => (
          <div key={qOption.value} onClick={() => clicked(qOption)}>
            <div className='segContainer'>
              <Segment
                className={
                  qDetails.value !== null &&
                  qDetails.value.includes(qOption.value)
                    ? 'selectedOption'
                    : 'optionSegments'
                }
              >
                {qOption.value}
              </Segment>
            </div>
          </div>
        ))}
    </Fragment>
  );
};

NewOptions.propTypes = {};

const mapStateToProps = (state) => ({
  qDetails: state.survey.questions.find((q) => q.id === state.survey.current),
  currentQ_ID: state.survey.current,
  ping: state.survey.ping,
});

export default connect(mapStateToProps, { selectAction, selectOptionAction })(
  NewOptions
);
