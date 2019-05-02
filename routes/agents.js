// Requiring our models and passport as we've configured it
// const db = require("../models");
// const passport = require("../config/middleware/offervana");

// module.exports = function(app) {
//   app.get("/dashboard", function(req, res) {
//     var query = {};
//     if (req.query.AgentId) {
//       query.AgentId = req.query.AgentId;
//     }
//     db.User.findAll({
//       where: query,
//       include: [db.Account]
//     }).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

//   app.get("/findagent", function(req, res) {
//     if (req.user) {
//       let AccountId = req.user.id;
//       db.Agent.findOne({
//         where: {
//           AccountId: AccountId
//         },
//         include: [db.Account]
//       }).then(function(dbAuthor) {
//         res.json(dbAuthor);
//       });
//     } else {
//       res.json({});
//     }
//   });

//   app.post("/agentcreate", function(req, res) {
//     let firstname = req.body.firstname;
//     let lastname = req.body.lastname;
//     let phone = req.body.phone;
//     let AccountId = req.body.accountId;
//     db.Agent.create({
//       firstname: firstname,
//       lastname: lastname,
//       phone: phone,
//       AccountId: AccountId
//     });
//   });

//   app.put("/upgradeuser", function(req, res) {
//     db.Account.update(req.body, {
//       where: {
//         id: req.body.id
//       }
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });
// };
