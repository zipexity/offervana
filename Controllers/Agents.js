const db = require("../models");

module.exports = {
  dashboard: function(req, res) {
    var query = {};
    if (req.query.AgentId) {
      query.AgentId = req.query.AgentId;
    }
    db.User.findAll({
      where: query,
      include: [db.Account]
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  },

  agentList: function(req, res) {
    var query = {};
    if (req.query.AgentId) {
      query.id = req.query.AgentId;
    }
    db.Agent.findOne({
      where: query,
      include: [db.Account]
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  },

  findAgent: function(req, res) {
    if (req.user) {
      let AccountId = req.user.id;
      db.Agent.findOne({
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

  agentCreate: function(req, res) {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let phone = req.body.phone;
    let email = req.body.email;
    let AccountId = req.body.accountId;
    db.Agent.create({
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      email: email,
      AccountId: AccountId
    })
      .then(function(dbagent) {
        res.json(dbagent);
      })
      .catch(function(err) {
        res.json(err);
      });
  },

  upgradeAgent: function(req, res) {
    db.Account.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  }
};
