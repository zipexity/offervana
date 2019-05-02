const passport = require("../../../config/middleware/offervana");
const router = require("express").Router();

router.route("/").post(passport.authenticate("local"), (req, res) => {
  res.json(req.user);
});

module.exports = router;
