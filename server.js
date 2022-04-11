const express = require('express');
const connectDB = require('./config/db');
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
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", 'https://fonts.googleapis.com', "'unsafe-inline'"],
        imgSrc: [
          "'self'",
          'data:',
          '*.gravatar.com',
          '*.googleusercontent.com',
          '*.auth0.com',
          'https://i1.wp.com/',
        ],
        connectSrc: [
          "'self'",
          `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
        ],
        fontSrc: ["'self'", 'https://fonts.gstatic.com/', 'data:'],
        objectSrc: ["'self'"],
        mediaSrc: ["'self'"],
        frameSrc: ["'self'", `${process.env.AUTH0_DOMAIN}`],
      },
    },
  })
);

// middleware function for auth0
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),

  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256'],
});

const forceSSL = (req, res, next) => {
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
};

app.post('/api/external', checkJwt, (req, res) => {
  console.log(req.headers.authorization);
  res.send({
    msg: 'Your access token was successfully validated!',
  });
});

app.use('/api', checkJwt);
// test if token is coming and if token is valid
app.post('/api/checkToken', (req, res) => {
  console.log(`token is ${req.headers.authorization}`);
  res.send(`token is ${req.headers.authorization}`);
});

//my unsecured routes
app.use('/auth0/config', require('./routes/auth0/config'));
app.use('/computeEcoScore', require('./routes/api/computeEcoScore'));
// my secured routes
app.use('/api/getSurveyData', require('./routes/api/getSurveyData'));
app.use('/api/submitSurvey', require('./routes/api/submitSurvey'));
app.use('/api/getSurveys', require('./routes/api/getSurveys'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  console.log('Forcing SSL Use');
  app.use(forceSSL);

  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.use(cors({ origin: process.env.MY_CORS_APP_ORIGIN }));
  app.use(cors({ origin: process.env.MY_CORS_APP_SUBMIT }));
}

const PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
