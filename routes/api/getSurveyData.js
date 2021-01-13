const express = require('express');
const router = express.Router();

const surveyInitState = require('../../config/reduxState');

// @route       GET api/getSurveyData
// @desc        Test route
// @access      Public
router.post('/', (req, res) => {
  console.log(req.headers.authorization);
  res.send(surveyInitState);
});

module.exports = router;
