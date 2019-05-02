// var db = require("../models");

// // Routes
// // =============================================================
// module.exports = function(app) {
//   // GET route for getting all of the posts
//   app.get("/profilemain", function(req, res) {
//     var query = {};
//     if (req.query.UserId) {
//       query.UserId = req.query.UserId;
//     }
//     db.Offers.findAll({
//       where: query
//     }).then(function(dbSurvey) {
//       res.json(dbSurvey);
//     });
//   });

//   // PUT route for updating posts
//   app.post("/buildoffer", function(req, res) {
//     console.log(req.body);
//     db.Offers.create(req.body).then(function(dbSurvey) {
//       res.json(dbSurvey);
//     });
//   });
// };
