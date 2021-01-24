const mongoose = require('mongoose');

const SurveyResponseSchema = new mongoose.Schema({
  surveyID: {
    type: String,
    required: true,
  },
  version: {
    type: Number,
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
  doctor_id: {
    type: String,
    required: true,
  },
  doctor_email: {
    type: String,
    required: true,
  },
});

module.exports = Survey = mongoose.model(
  'surveyResponse',
  SurveyResponseSchema
);
