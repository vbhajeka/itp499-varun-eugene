const express = require('express');
const router = express.Router();
const jwToken = require('jsonwebtoken');

const survey = require('../../models/SurveyResponse');
const ids = require('../../config/allQuestionIds');

// @route       GET api/auth
// @desc        Test route
// @access      Public
router.post('/', (req, res) => {
  console.log(
    'Authorization header is ' + JSON.stringify(req.headers.authorization)
  );
  let token = req.headers.authorization.split(' ')[1]; //Get rid of Bearer
  // get the decoded payload and header
  let decoded = jwToken.decode(token, { complete: true });

  if (
    !(
      decoded.payload[`http://hipstr-survey/roles`] &&
      decoded.payload[`http://hipstr-survey/roles`].includes('survey_admin')
    )
  ) {
    res.status(401).send({ message: "uh oh, you're not authorized!" });
  }

  const { startDate, endDate } = req.body;

  let queryOptions = {
    $and: [{ date: { $gte: startDate } }, { date: { $lte: endDate } }],
  };

  survey.find(queryOptions, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      const resBody = {
        ids,
        result,
      };
      res.send({ ...resBody });
    }
  });
});

module.exports = router;
