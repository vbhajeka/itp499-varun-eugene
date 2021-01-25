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

// Decided to create a template of the Email using Grape.js and then broke it down here.
// With more time, we could have used a template generator for the HTML text
// Note image src is hardcoded as is the sender email. They should probably be environment
// variables
const generateHtml = (answers, doctor, submissionTime) => {
  const blocks = groupSurveysByBlocks(answers);
  let blockcontents = '';

  blocks.forEach((b) => {
    let rowContents = ''; // Initialize questions/value at the start of the block
    b.questions.forEach((q) => {
      rowContents += `
                            <tr id="ifx6s" style="box-sizing: border-box; border: 0 solid; font-size: .8rem">
                              <td id="idv9z" style="box-sizing: border-box; vertical-align: top; color: rgb(111, 119, 125); margin: 0; padding: 0; width: 50%; height: auto;" width="50%" valign="top">
                                <p class="card-text" style="box-sizing: border-box; margin: 12px 0 0 0;text-align: right; padding-right: 15px;">${q.question}
                                </p>
                              </td>
                              <td id="iavhg" style="box-sizing: border-box; vertical-align: top; color: #673ab7; margin: 0; padding: 0; width: 50%;" width="50%" valign="top">
                                <p class="card-text" style="box-sizing: border-box; margin: 12px 0 0 0; padding-left: 15px;">${q.value}
                                </p>
                              </td>
                            </tr>`;
    });
    blockcontents += `     
                <table id="ittwm6" style="box-sizing: border-box; width: 100%; margin-top: 10px; margin-bottom: 10px; border: 1px solid #000000; border-collapse: separate; padding: 0 0 10px 0;" width="100%">
                  <tbody style="box-sizing: border-box; ">
                    <tr style="box-sizing: border-box;">
                      <td class="divider" style="box-sizing: border-box; background-color: rgba(0, 0, 0, 0.1); height: auto;" bgcolor="rgba(0, 0, 0, 0.1)">
                        <div id="isigf" style="box-sizing: border-box; padding: 3px; font-size: 1.2rem; background-color: rgba(0,0,0,0.1);">${b.block}
                        </div>
                        <table id="iuumk" style="box-sizing: border-box; height: auto; margin: 0 auto 0 auto; padding: 5px 0 0 0; width: 100%;" width="100%">
                          <tbody style="box-sizing: border-box;">${rowContents}</tbody></table></td></tr></tbody></table>`;
  });

  return `<table class="main-body" style="min-height: auto; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; width: 100%; height: 100%; background-color: rgb(234, 236, 237);" width="100%" height="100%" bgcolor="rgb(234, 236, 237)">
   <tbody id="i866" style="box-sizing: border-box;">
     <tr class="row" style="box-sizing: border-box; vertical-align: top;" valign="top">
       <td class="main-body-cell" style="box-sizing: border-box; text-align: justify; border: 0; width: 0;" align="justify">
         <table class="container" style="box-sizing: border-box; font-family: Helvetica, serif; min-height: 150px; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; margin-top: auto; margin-right: auto; margin-bottom: auto; margin-left: auto; height: 0px; width: 90%; max-width: 100%;" width="90%" height="0">
           <tbody id="igj3" style="box-sizing: border-box;">
             <tr id="idwu" style="box-sizing: border-box;">
               <td class="container-cell" style="box-sizing: border-box; vertical-align: top; padding-bottom: 50px; padding: 1px 1px 10px 1px; width: 100%;" width="100%" valign="top">
                 <table class="c1766" style="box-sizing: border-box; margin-top: 0px; margin-right: auto; margin-bottom: 10px; margin-left: 0px; padding-top: 5px; padding-right: 5px; padding-bottom: 5px; padding-left: 5px; width: 100%; min-height: 30px; background-color: black;" width="100%" bgcolor="black">
                   <tbody id="iqo07" style="box-sizing: border-box;">
                     <tr id="ift4p" style="box-sizing: border-box;">
                       <td class="cell c1769" style="box-sizing: border-box; width: 11%; color: #000000; text-align: center;" width="11%" align="center">
                         <img src="${process.env.SENDGRID_ICON}" alt="HipSTER" id="igfb9" class="c926" style="box-sizing: border-box; color: rgb(158, 83, 129); width: 10rem; border: 0 solid #cd4011; border-collapse: separate;" width="100">
                       </td>
                       <td class="cell c1776" style="box-sizing: border-box; width: 70%; vertical-align: middle;" width="70%" valign="middle">
                         <div class="c1144" style="box-sizing: border-box; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; font-size: 2rem; font-weight: 300; padding: 30px 10px 30px 30px; text-align: center; vertical-align: middle; color: #ffffff; font-family: Arial, Helvetica, sans-serif;">
                           <span style="box-sizing: border-box;">HipSTER Survey Submission</span>
                         </div>
                         <table id="ipgdv" style="box-sizing: border-box; height: auto; margin: 10px auto 10px auto; padding: 5px 5px 5px 5px; width: 100%; min-height: auto;" width="100%">
                           <tbody id="iblti" style="box-sizing: border-box;">
                             <tr style="box-sizing: border-box; font-size: 1rem; color: #ffffff;">
                               <td id="isb1u" style="box-sizing: border-box; font-weight: 300; vertical-align: top; margin: 0; padding: 0; width: 50%;" width="50%" valign="top">
                                 <div id="i0voh" style="box-sizing: border-box; padding: 10px;">
                                   <span style="box-sizing: border-box;">Submitted by ${doctor}</span>
                                 </div>
                               </td>
                               <td id="i7n8g" style="box-sizing: border-box; font-weight: 300; vertical-align: top; margin: 0; padding: 0; width: 50%;" width="50%" valign="top">
                                 <div id="id79t" style="box-sizing: border-box; padding: 10px; text-align: right;">
                                   <span style="box-sizing: border-box;">Submitted on ${submissionTime}</span>
                                 </div>
                               </td>
                             </tr>
                           </tbody>
                         </table>
                       </td>
                     </tr>
                   </tbody>
                 </table>${blockcontents}                <div class="c2421" style="box-sizing: border-box; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px; font-size: .5rem; background-color: #000000; color: #ffffff; text-align: right; font-family: Arial, Helvetica, sans-serif;">
                  <p data-gjs-type="text" draggable="true" data-highlightable="1" id="i81o2f" style="box-sizing: border-box;">
                    <em style="box-sizing: border-box;">©&nbsp;Copyright 2021 Dr. Marc Safron</em>
                  </p>
                </div>
              </td></tr></tbody></table></td></tr></tbody></table>`;
};

// @route       POST api/submitSurvey
// @desc        Submit survey results
// @access      Public
router.post(
  '/',
  [
    check('surveyID', 'surveyID is required').notEmpty(),
    check('answers', 'need survey answers').isArray(),
    check('doctor', 'need doctor name').notEmpty(),
    check('versionID', 'need versionID').notEmpty(),
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

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { surveyID, answers, prefs, doctor, versionID } = req.body;

    let prefsFailed = false;
    let emailFailed = false;

    try {
      let surveyData = new Survey({
        surveyID,
        surveyAnswers: answers,
        doctor,
        doctor_id: decoded.payload.sub,
        doctor_email: emailAddy,
        version: versionID,
      });

      await surveyData.save(function (err, survey) {
        if (err) return console.error(err);
        console.log(survey.surveyID + ' saved to collection.');
      });
    } catch (err) {
      // failed to write to db
      res.status(500).send('Error is ' + err);
    }

    try {
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
      prefsFailed = true;
      console.error(`Could not save prefs: ${err}`);
    }

    const resultsHtml = generateHtml(
      answers,
      doctor,
      new Date().toLocaleString()
    );

    // survey is submitted to db, now send email
    sgMail.setApiKey(process.env.SENDGRID_KEY);
    const msg = {
      to: emailAddy, // Change to your recipient
      from: process.env.SENDGRID_EMAIL_FROM,
      subject: process.env.SENDGRID_EMAIL_SUBJECT,
      html: resultsHtml,
    };

    try {
      await sgMail.send(msg);
      console.log('Email sent to ', emailAddy);
      response = 'Success!';
    } catch (err) {
      console.error(`Could not send email: ${err}`);
      emailFailed = true;
    }

    let resMesg = { msgs: [] };

    if (prefsFailed) {
      resMesg.msgs.push('Failed to save last charted value');
    }
    if (emailFailed) {
      resMesg.msgs.push(`Failed to send a confirmation email to ${emailAddy}`);
    }
    res.send(resMesg);
  }
);

module.exports = router;
