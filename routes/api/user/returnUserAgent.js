const router = require("express").Router();
const User = require("../../../Controllers/User.js");

router.route("/").get(User.returnUserAgent);
module.exports = router;
