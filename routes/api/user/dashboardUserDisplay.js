const router = require("express").Router();
const User = require("../../../Controllers/User.js");

router.route("/").get(User.dashboardUserDisplay);
module.exports = router;
