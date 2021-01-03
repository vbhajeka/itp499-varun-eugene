import React from 'react';
import PropTypes from 'prop-types';

import { Segment, Header, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

const ConfirmPage = ({ questions }) => {
  const elems = questions.map((question) => (
    <Grid.Row divided columns={2} key={question.questionID}>
      <Grid.Column>
        <Segment>{question.text}</Segment>
      </Grid.Column>{' '}
      <Grid.Column>
        <Segment>{question.selected.text}</Segment>
      </Grid.Column>
    </Grid.Row>
  ));

  return (
    <div>
      <Header size='huge' textAlign='center' style={{ color: 'white' }}>
        Your Answers
      </Header>
      <Grid>
        <Grid.Row>asdf</Grid.Row>
        {elems}
      </Grid>
      <Link to='/'>placeholder</Link>
    </div>
  );
};

ConfirmPage.propTypes = {
  questions: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    questions: state.questionBankReducer.previous,
  };
};

export default connect(mapStateToProps, {})(ConfirmPage);
