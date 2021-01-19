const express = require('express');
const router = express.Router();

// @route       GET auth0/config
// @desc        Return Auth0 Environment route
// @access      Public

router.get('/', (req, res) => {
  res.send({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    audience: process.env.AUTH0_AUDIENCE,
  });
});

module.exports = router;
