# Experimental Surgery Survey Website

### Staging URL - https://hipster-survey-stage.herokuapp.com

### Technologies Used:

- Node.js
- Express.js
- React.js
- Mongoose - MongoDB Atlas

### To Run Locally

- Create an Auth0 Account (https://auth0.com)
  - Create an Application, obtain _Domain_, _Client ID_
- Create a MongoDB Atlas Account (https://www.mongodb.com)
  - Create a Project, and a Cluster
  - Whitelist your IP Address
  - Create a DB User, note the _DB User, DB Password_
  - Create a Database, note the _DB Name_
  - Note the _DB Host_
- Create a Sendgrid Account (https://app.sendgrid.com)
  - Obtain a `SendGrid API Key` for a Single Page App running on Node.js
- `git pull https://github.com/vbhajeka/Experimental-Surgery-Survey.git`
- Create a file called `.bash-source` with the following contents (NOTE: values after the equals sign should be encased in single quotes:

```export MONGO_USER=Your_Mongo_UserName
    export MONGO_PWD=Your_Mongo_Password
    export MONGO_HOST=Your_Mongo_Host
    export MONGO_DB=Your_Mongo_DB_Name
    export AUTH0_DOMAIN=Your_Auth0_Domain
    export AUTH0_CLIENT_ID=Your_Auth0_ClientID
    export AUTH0_AUDIENCE='https://{{Your_Auth0_Domain}}/api/v2/'
    export SENDGRID_KEY=Your_SendGrid_Key
```

- `npm install`
- `npm install --prefix client`
- `source .bash-source`
- `npm run dev`
- Go to http://localhost:3000 - The App will be running!
