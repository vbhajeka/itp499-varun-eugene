const express = require('express');
const router = express.Router();

const Survey = require('../../models/SurveyResponse');

const { check, validationResult } = require('express-validator');

// @route       POST api/submitSurvey
// @desc        Submit survey results
// @access      Public
router.post(
  '/',
  [
    check('surveyID', 'surveyID is required').notEmpty(),
    check('answers', 'need survey answers').isArray(),
  ],
  async (req, res) => {
    console.log('accepted token');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { surveyID, answers, doctor } = req.body;

    try {
      let surveyData = new Survey({ surveyID, surveyAnswers: answers, doctor });

      await surveyData.save(function (err, survey) {
        if (err) return console.error(err);
        console.log(survey.surveyID + ' saved to collection.');
      });

      res.send('survey submitted!');
    } catch (err) {
      console.log(err);
    }
  }
);

module.exports = router;
