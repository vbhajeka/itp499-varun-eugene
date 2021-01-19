const express = require('express');
const router = express.Router();
const jwToken = require('jsonwebtoken');

const UserPref = require('../../models/UserPreference');

const surveyInitState = require('../../config/reduxState');

// @route       GET api/getSurveyData
// @desc        Test route
// @access      Public
router.get('/', async (req, res) => {
  console.log(
    'Authorization header is ' + JSON.stringify(req.headers.authorization)
  );
  let token = req.headers.authorization.split(' ')[1]; //Get rid of Bearer
  // get the decoded payload and header
  let decoded = jwToken.decode(token, { complete: true });

  // get last charted value on this user
  let prefs = await UserPref.findOne(
    { userId: decoded.payload.sub },
    { useFindAndModify: false }
  ).exec();

  console.log(prefs);

  // if this user has any last charted vals, parse them
  if (prefs !== null) {
    prefs = prefs.surveyPrefs.map(JSON.parse);
  }

  const responseBody = {
    questions: surveyInitState,
    prefs: prefs,
  };

  res.send(responseBody);
});

module.exports = router;
