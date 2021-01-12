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
//otherDB();

// init middleware
// body parser
app.use(express.json({ extended: false }));
// auth0 middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ origin: process.env.APP_ORIGIN }));

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

app.post('/api/external', checkJwt, (req, res) => {
  res.send({
    msg: 'Your access token was successfully validated!',
  });
});

// define routes - examples
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
// my routes
app.use('/api/submitSurvey', checkJwt, require('./routes/api/submitSurvey'));
app.use('/api/getSurveys', require('./routes/api/getSurveys'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
