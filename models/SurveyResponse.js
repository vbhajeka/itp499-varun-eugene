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
  doctor: {
    type: String,
    required: true,
  },
});

module.exports = Survey = mongoose.model(
  'surveyResponse',
  SurveyResponseSchema
);
