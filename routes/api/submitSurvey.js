const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
const jwToken = require('jsonwebtoken');

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
    console.log(
      'Authorization header is ' + JSON.stringify(req.headers.authorization)
    );
    let token = req.headers.authorization.split(' ')[1]; //Get rid of Bearer
    // get the decoded payload and header
    let decoded = jwToken.decode(token, { complete: true });
    console.log(decoded);

    const emailAddy = decoded.payload['http://hipstr-survey/email'];

    console.log('accepted token');

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { surveyID, answers, doctor, versionID } = req.body;

    try {
      let surveyData = new Survey({
        surveyID,
        surveyAnswers: answers,
        doctor,
        doctor_id: decoded.payload.sub,
        version: versionID,
      });

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
      to: emailAddy, // Change to your recipient
      from: 'hipreg1@gmail.com', // Change to your verified sender
      subject: 'HIPSTR Survey Submission Confirmation',
      text:
        "Uh oh! Looks like this feature isn't quite ready yet! Bear with us, and you'll recieve your HIPSTR survey results soon!",
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
