const express = require('express');
const router = express.Router();

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
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('survey submitted!');
  }
);

module.exports = router;
