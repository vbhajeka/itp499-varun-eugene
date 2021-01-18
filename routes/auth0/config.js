const express = require('express');
const router = express.Router();

const survey = require('../../models/SurveyResponse');
const ids = require('../../config/allQuestionIds');

// @route       GET api/auth
// @desc        Test route
// @access      Public
router.get('/', (req, res) => {
  console.log(req.body);
  const resBody = {
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    audience: process.env.AUTH0_AUDIENCE,
  };
  res.send(resBody);
});

module.exports = router;
