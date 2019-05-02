const db = require("../models");

module.exports = {
  createUser: function(req, res) {
    if (req.body) {
      console.log(req.body);
      let firstname = req.body.firstname;
      let lastname = req.body.lastname;
      let phone = req.body.phone;
      let address = req.body.address;
      let AccountId = req.user.id;
      let AgentId = req.body.agentId;
      db.User.create({
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        address: address,
        status: "created",
        iandD: "false",
        detailsUpgrades: "false",
        comparables: "false",
        reviewInstant: "false",
        negotiateOffer: "false",
        marketTrends: "false",
        settleSheet: "false",
        saleTime: "false",
        agentOffer: "false",
        AccountId: AccountId,
        AgentId: AgentId
      })
        .then(function(dbuser) {
          res.json(dbuser);
        })
        .catch(function(err) {
          res.json(err);
        });
    }
  },

  dashboardUserDisplay: function(req, res) {
    var query = {};
    if (req.query.UserId) {
      query.UserId = req.query.UserId;
    }
    db.User.findOne({
      where: query,
      include: [db.Account]
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  },

  returnUser: function(req, res) {
    if (req.user) {
      let AccountId = req.user.id;
      console.log(req.user.id);
      db.User.findOne({
        where: {
          AccountId: AccountId
        },
        include: [db.Account]
      }).then(function(dbAuthor) {
        res.json(dbAuthor);
      });
    } else {
      res.json({});
    }
  },

  updateUser: function(req, res) {
    db.User.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  },
  returnUserAgent: function(req, res) {
    var query = {};
    if (req.query.UserId) {
      query.id = req.query.UserId;
    }
    db.User.findOne({
      where: query,
      include: [db.Agent]
    }).then(function(dbSurvey) {
      res.json(dbSurvey);
    });
  }
};
