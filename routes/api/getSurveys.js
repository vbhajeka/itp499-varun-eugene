const express = require('express');
const router = express.Router();

const survey = require('../../models/SurveyResponse');
const ids = require('../../config/allQuestionIds');

// @route       GET api/auth
// @desc        Test route
// @access      Public
router.post('/', (req, res) => {
  console.log(req.body);

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
