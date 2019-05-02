require("dotenv").config();
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const routes = require("./routes");
const path = require("path");
const app = express();
const passport = require("./config/middleware/offervana");
const PORT = process.env.PORT || 3001;
const passportConfig = require("./config/passportConfig.js");
const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
process.env['REACT_APP_GOOGLE_PLACE_API_KEY'] = 'AIzaSyBKdsVgd6BTixezNIdvuRB84M7SA4tC9Bg';
var SequelizeStore = require("connect-session-sequelize")(session.Store);

const db = require("./models");

cloudinary.config({
  cloud_name: 'dxm4t5jwg',
  api_key: '591872893443713',
  api_secret: 'qDXyJ-dlcCoY_5GLi4XG4J4ZUJs'
});

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// console.log(db.sequelize.Sequelize);

app.use(
  session({
    secret: passportConfig.keys.secret,
    store: new SequelizeStore({
      db: db.sequelize
    }),
    resave: false, // we support the touch method so per the express-session docs this should be set to false
    proxy: true,
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

function handleError(err, req, res, next) {
  var output = {
    error: {
      name: err.name,
      message: err.message,
      text: err.toString()
    }
  };
  var statusCode = err.status || 500;
  res.status(statusCode).json(output);
}
app.use(routes);
app.use(handleError);

// Add routes, both API and view

// Start the API server
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
