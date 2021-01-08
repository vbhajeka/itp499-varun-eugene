const mongoose = require('mongoose');

const SurveyResponseSchema = new mongoose.Schema({
  surveyID: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  surveyAnswers: [String],
});

module.exports = Survey = mongoose.model(
  'surveyResponse',
  SurveyResponseSchema
);
