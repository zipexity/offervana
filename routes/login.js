// // Requiring our models and passport as we've configured it
// const db = require("../models");
// const passport = require("../config/middleware/offervana");

// module.exports = function(app) {
//   // Using the passport.authenticate middleware with our local strategy.
//   // If the user has valid login credentials, send them to the members page.
//   // Otherwise the user will be sent an error
//   app.post("/login", passport.authenticate("local"), function(req, res) {
//     // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
//     // So we're sending the user back the route to the members page because the redirect will happen on the front end
//     // They won't get this or even be able to access this page if they aren't authed
//     res.json("/profile/:id");
//   });

//   app.get("/api/logout", function(req, res) {
//     req.session.destroy(function(err) {
//       res.redirect("/"); //Inside a callback… bulletproof!
//     });
//   });

//   app.get("/api/checklog", function(req, res) {
//     if (!req.user) {
//       // The user is not logged in, send back an empty object
//       res.json({});
//     } else {
//       // Otherwise send back the user's email and id
//       // Sending back a password, even a hashed password, isn't a good idea
//       let AccountId = req.user.id;
//       console.log(req.user.id);
//       db.Account.findOne({
//         where: {
//           id: AccountId
//         }
//       }).then(function(dbAuthor) {
//         res.json(dbAuthor);
//       });
//     }
//   });

//   app.get("/createagent", function(req, res) {
//     db.Account.findAll({
//       where: {
//         role: "client"
//       }
//     }).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

//   // app.get("/dashboard/:id", function(req, res) {
//   //   db.account.findAll({}).then(function(dbUser) {
//   //     res.json(dbUser);
//   //   });
//   // });

//   // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
//   // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
//   // otherwise send back an error
//   app.post("/api/signup", function(req, res) {
//     let email = req.body.email;
//     let password = req.body.password;
//     let role = req.body.role;

//     if (!email) {
//       return res.status(422).send({ Error: "Please Enter A Valid Email" });
//     }

//     if (!password) {
//       return res.status(422).send({ Error: "Please Enter A Password" });
//     }

//     db.Account.findOne({ where: { email: email } }).then((err, existuser) => {
//       if (err) {
//         return res.status(422).send({ err });
//       }
//       if (existuser) {
//         return res.status(422).send({ Error: "Email Already In Use" });
//       } else {
//         db.Account.create({
//           email: email,
//           password: password,
//           role: role
//         })
//           .then(function() {
//             return res.json.redirect("/api/login");
//           })
//           .catch(function(err) {
//             res.json(err);
//           });
//       }
//     });
//   });
// };
