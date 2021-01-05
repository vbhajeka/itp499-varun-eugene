const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  order: [],
  date: {
    type: Date,
    default: Data.now,
  },
});

module.exports = Survey = mongoose.model('survey', SurveySchema);
