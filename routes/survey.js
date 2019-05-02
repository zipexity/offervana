// var db = require("../models");

// // Routes
// // =============================================================
// module.exports = function(app) {
//   // GET route for getting all of the posts
//   app.get("/viewsurveys", function(req, res) {
//     var query = {};
//     if (req.query.UserId) {
//       query.UserId = req.query.UserId;
//     }
//     // Here we add an "include" property to our options in our findAll query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Author
//     db.Survey.findAll({
//       where: query,
//       include: [db.User]
//     }).then(function(dbSurvey) {
//       res.json(dbSurvey);
//     });
//   });

//   app.get("/detailsupgrades", function(req, res) {
//     var query = {};
//     if (req.query.UserId) {
//       query.UserId = req.query.UserId;
//     }
//     db.Survey.findAll({
//       where: query
//     }).then(function(dbSurvey) {
//       res.json(dbSurvey);
//     });
//   });

//   //   // Get route for retrieving a single post
//   //   app.get("/api/survey/:id", function(req, res) {
//   //     // Here we add an "include" property to our options in our findOne query
//   //     // We set the value to an array of the models we want to include in a left outer join
//   //     // In this case, just db.Author
//   //     db.Post.findOne({
//   //       where: {
//   //         id: req.params.id
//   //       },
//   //       include: [db.Author]
//   //     }).then(function(dbPost) {
//         res.json(dbPost);
//   //     });
//   //   });

//   // DELETE route for deleting posts
//   app.delete("/api/survey/:id", function(req, res) {
//     db.Survey.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbSurvey) {
//       res.json(dbSurvey);
//     });
//   });

//   // PUT route for updating posts
//   app.post("/api/surveys/:id", function(req, res) {
//     console.log(req.body);
//     db.Survey.create(req.body).then(function(dbSurvey) {
//       res.json(dbSurvey);
//     });
//   });
// };
