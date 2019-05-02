const router = require("express").Router();
const User = require("../../../Controllers/User.js");

router.route("/").put(User.updateUser);
module.exports = router;
