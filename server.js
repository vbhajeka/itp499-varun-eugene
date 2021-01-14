const express = require('express');
const connectDB = require('./config/db');
const otherDB = require('./config/otherDB');
const path = require('path');

const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const app = express();

// connect DB
connectDB();

// init middleware
// body parser
app.use(express.json({ extended: false }));
// auth0 middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ origin: process.env.APP_ORIGIN }));
app.use(cors({ origin: process.env.APP_SUBMIT }));

// middleware function for auth0
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH_DOMAIN}/.well-known/jwks.json`,
  }),

  audience: process.env.AUTH_AUDIENCE,
  issuer: `https://${process.env.AUTH_DOMAIN}/`,
  algorithms: ['RS256'],
});

function forceSSL(req, res, next) {
  var herokuProtocolHeader = req.headers['x-forwarded-proto'];
  if (herokuProtocolHeader && herokuProtocolHeader != 'https') {
    var hostName = req.get('host');
    hostName = hostName.replace(/:\d+$/, '');
    if (process.env.SSL_PORT) hostName += ':' + process.env.SSL_PORT;
    var redirectURL = 'https://' + hostName + req.url;
    console.log('Redirecting to: ' + redirectURL);
    return res.redirect(redirectURL);
  }
  next();
}

if (process.env.NODE_ENV === 'production') {
  console.log('Forcing SSL Use');
  app.use(forceSSL);
}

app.post('/api/external', checkJwt, (req, res) => {
  console.log(req.headers.authorization);
  res.send({
    msg: 'Your access token was successfully validated!',
  });
});

app.use('/api', checkJwt);
app.post('/api/checkToken', (req, res) => {
  console.log(`token is ${req.headers.authorization}`);
  res.send(`token is ${req.headers.authorization}`);
});

// define routes - examples
app.use('/api/users', require('./routes/api/users'));
// my routes
app.use('/api/getSurveyData', checkJwt, require('./routes/api/getSurveyData'));
app.use('/api/submitSurvey', checkJwt, require('./routes/api/submitSurvey'));
app.use('/api/getSurveys', require('./routes/api/getSurveys'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
