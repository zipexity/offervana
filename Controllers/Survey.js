const db = require("../models");

module.exports = {
  agentSurveyView: function(req, res) {
    var query = {};
    if (req.query.UserId) {
      query.UserId = req.query.UserId;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Survey.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbSurvey) {
      res.json(dbSurvey);
    });
  },

  userSurveyDetails: function(req, res) {
    var query = {};
    if (req.query.UserId) {
      query.UserId = req.query.UserId;
    }
    db.Survey.findAll({
      where: query
    }).then(function(dbSurvey) {
      res.json(dbSurvey);
    });
  },

  postSurvey: function(req, res) {
    db.Survey.create(req.body).then(function(dbSurvey) {
      res.json(dbSurvey);
    });
  }
};
