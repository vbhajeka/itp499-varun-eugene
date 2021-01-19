const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
const jwToken = require('jsonwebtoken');

const Survey = require('../../models/SurveyResponse');
const UserPref = require('../../models/UserPreference');

const { check, validationResult } = require('express-validator');

const groupSurveysByBlocks = (serv) => {
  let retVal = [];
  let currBlock;
  serv = serv.map(JSON.parse);
  console.log(serv);
  serv.forEach((s) => {
    const thisBlock = retVal.find((x) => x.block === s.block);
    if (thisBlock) {
      thisBlock.questions.push(s);
    } else {
      retVal.push({ block: s.block, questions: [s] });
    }
  });
  return retVal;
};

const generateHtml = (answers) => {
  let tableContents = '';
  let rowContents = '';
  const blocks = groupSurveysByBlocks(answers);

  blocks.forEach((b) => {
    rowContents += `<tr style='margin:auto'><th colSpan='2' style='border: 1px solid black;'>${b.block}</th></tr>`;
    b.questions.forEach((q) => {
      rowContents += `<tr>
          <td style='border: 1px solid black;'>${q.question}</td>
          <td style='border: 1px solid black;'>${q.value}</td>
        </tr>`;
    });
    tableContents += rowContents;
    rowContents = '';
  });

  return `<table style='border: 1px solid black; margin-left: auto;
  margin-right: auto;'>${tableContents}</table>`;
};

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
    const auth0UserId = decoded.payload.sub;

    console.log('accepted token');

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { surveyID, answers, prefs, doctor, versionID } = req.body;

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

      // save last charted values
      const filter = { userId: auth0UserId };
      const update = { surveyPrefs: prefs };

      await UserPref.findOneAndUpdate(
        filter,
        update,
        { new: true, upsert: true, useFindAndModify: false },
        function (err) {
          if (err) return console.error(err);
          console.log('saved to prefs');
        }
      );
    } catch (err) {
      console.log(err);
    }

    const resultsHtml = generateHtml(answers);

    // survey is submitted to db, now send email
    sgMail.setApiKey(process.env.SENDGRID_KEY);
    const msg = {
      to: emailAddy, // Change to your recipient
      from: 'hipreg1@gmail.com', // Change to your verified sender
      subject: 'HIPSTR Survey Submission Confirmation',
      html: resultsHtml,
    };

    try {
      await sgMail.send(msg);
      console.log('Email sent to ', emailAddy);
    } catch (err) {
      console.error(err);
    }
    // sgMail
    //   .send(msg)
    //   .then(() => {
    //     console.log('Email sent to ', emailAddy);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }
);

module.exports = router;
