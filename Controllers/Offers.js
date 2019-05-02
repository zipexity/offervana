const db = require("../models");

module.exports = {
  viewOffer: function(req, res) {
    var query = {};
    if (req.query.UserId) {
      query.UserId = req.query.UserId;
    }
    db.Offers.findAll({
      where: query
    }).then(function(dbSurvey) {
      res.json(dbSurvey);
    });
  },

  buildOffer: function(req, res) {
    db.Offers.create(req.body).then(function(dbSurvey) {
      res.json(dbSurvey);
    });
  },
  updateOffer: function(req, res) {
    db.Offers.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  },
  deleteOffer: function(req, res) {
    console.log("#############", req.body);
    var query = {};
    if (req.query.OfferId) {
      query.id = req.query.OfferId;
    }
    db.Offers.destroy({
      where: query
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  }
};
