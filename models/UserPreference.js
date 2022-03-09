const mongoose = require('mongoose');

const SurveyResponseSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  surveyPrefs: [String],
});

module.exports = UserPreference = mongoose.model(
  'UserPreference',
  SurveyResponseSchema
);
