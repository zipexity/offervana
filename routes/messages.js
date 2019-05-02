// const db = require("../models");

// module.exports = function(app) {
//   app.post("/multi", function(req, res) {
//     let to = req.body.to;
//     let from = req.body.from;
//     let body = req.body.body;
//     let stepinProcess = req.body.stepinProcess;
//     db.Messages.create({
//       to: to,
//       from: from,
//       body: body,
//       stepinProcess: stepinProcess,
//       AccountId: req.user.id
//     })
//       .then(function(dbuser) {
//         res.json(dbuser);
//       })
//       .catch(function(err) {
//         res.json(err);
//       });
//   });

//   app.get("/usermessages", function(req, res) {
//     if (req.user) {
//       db.Messages.findAll({
//         where: { AccountId: req.user.id }
//       }).then(function(message) {
//         res.json(message);
//       });
//     } else {
//       res.json("test");
//     }
//   });

//   app.get("/adminmessages", function(req, res) {
//     if (req.user) {
//       db.Messages.findAll({
//         where: { to: req.user.id }
//       }).then(function(message) {
//         res.json(message);
//       });
//     } else {
//       res.json("test");
//     }
//   });
// };
