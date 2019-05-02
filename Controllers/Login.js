const db = require("../models");

module.exports = {
  checkLog: function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      let AccountId = req.user.id;
      console.log(req.user.id);
      db.Account.findOne({
        where: {
          id: AccountId
        }
      }).then(function(dbAuthor) {
        res.json(dbAuthor);
      });
    }
  },

  logout: function(req, res) {
    req.session.destroy(function(err) {
      res.redirect("/"); //Inside a callback… bulletproof!
    });
  },

  listnonAgents: function(req, res) {
    db.Account.findAll({
      where: {
        role: "client"
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  },

  listAgents: function(req, res) {
    db.Account.findAll({
      where: {
        role: "agent"
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  },
  signUp: function(req, res) {
    let email = req.body.email;
    let password = req.body.password;
    let role = req.body.role;

    if (!email) {
      return res.status(422).send({ Error: "Please Enter A Valid Email" });
    }

    if (!password) {
      return res.status(422).send({ Error: "Please Enter A Password" });
    }

    db.Account.findOne({ where: { email: email } }).then((err, existuser) => {
      if (err) {
        return res.status(422).send({ err });
      }
      if (existuser) {
        return res.status(422).send({ Error: "Email Already In Use" });
      } else {
        db.Account.create({
          email: email,
          password: password,
          role: role
        })
          .then(function(user) {
            // return res.json.redirect("/api/login");
            req.login(user, function(err) {
              if (err) {
                return next(err);
              }
              return res.redirect("/users/" + req.user.username);
            });
          })
          .catch(function(err) {
            res.json(err);
          });
      }
    });
  }
};
