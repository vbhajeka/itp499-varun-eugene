const basic_details = require('./hipstrSurveyQuestions/basic_details');
const own_car_specs = require('./hipstrSurveyQuestions/own_car_specs');
const new_car_specs = require('./hipstrSurveyQuestions/new_car_specs');
const used_car_specs = require('./hipstrSurveyQuestions/used_car_specs');
const commute_details = require('./hipstrSurveyQuestions/commute_details');

const realState = {
  ping: true,
  blocks_seen: [],
  surveyID: 'as341s',
  versionID: 1.0,
  current: 'basic_details',
  blocks: [
    basic_details,
    own_car_specs,
    new_car_specs,
    used_car_specs,
    commute_details,
  ],
};

module.exports = realState;
