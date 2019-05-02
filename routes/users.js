// // Requiring our models and passport as we've configured it
// const db = require("../models");
// const passport = require("../config/middleware/offervana");

// module.exports = function(app) {
//   app.post("/createuser", function(req, res) {
//     if (req.body) {
//       console.log(req.body);
//       let firstname = req.body.firstname;
//       let lastname = req.body.lastname;
//       let phone = req.body.phone;
//       let address = req.body.address;
//       let AccountId = req.body.accountId;
//       let AgentId = req.body.agentId;
//       db.User.create({
//         firstname: firstname,
//         lastname: lastname,
//         phone: phone,
//         address: address,
//         status: "created",
//         iandD: "false",
//         detailsUpgrades: "false",
//         comparables: "false",
//         reviewInstant: "false",
//         negotiateOffer: "false",
//         marketTrends: "false",
//         settleSheet: "false",
//         saleTime: "false",
//         agentOffer: "false",
//         AccountId: AccountId,
//         AgentId: AgentId
//       })
//         .then(function(dbuser) {
//           res.json(dbuser);
//         })
//         .catch(function(err) {
//           res.json(err);
//         });
//     }
//   });

//   app.get("/homesurvey/q45", function(req, res) {
//     if (req.user) {
//       let AccountId = req.user.id;
//       console.log(req.user.id);
//       db.User.findOne({
//         where: {
//           AccountId: AccountId
//         },
//         include: [db.Account]
//       }).then(function(dbAuthor) {
//         res.json(dbAuthor);
//       });
//     } else {
//       res.json("test");
//     }
//   });

//   app.put("/api/surveys/:id", function(req, res) {
//     db.User.update(req.body, {
//       where: {
//         id: req.body.id
//       }
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });

//   app.get("/multi", function(req, res) {
//     if (req.user) {
//       db.User.findOne({
//         where: {
//           AccountId: req.user.id
//         },
//         include: [db.Agent]
//       }).then(function(dbSurvey) {
//         res.json(dbSurvey);
//       });
//     } else {
//       res.json({});
//     }
//   });
// };
