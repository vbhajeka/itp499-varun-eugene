const mongoose = require('mongoose');

const SurveyResponseSchema = new mongoose.Schema({
  surveyID: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Data.now,
  },
  surveyAnswers: [String],
});

module.exports = Survey = mongoose.model(
  'surveyResponse',
  SurveyResponseSchema
);
