const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');

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

    // survey is submitted to db, now send email
    sgMail.setApiKey(process.env.SENDGRID_KEY);
    const msg = {
      to: 'trombonevarun@gmail.com', // Change to your recipient
      from: 'hipreg1@gmail.com', // Change to your verified sender
      subject: 'HIPSTR Survey Submission Confirmation',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent');
      })
      .catch((error) => {
        console.error(error);
      });
  }
);

module.exports = router;
