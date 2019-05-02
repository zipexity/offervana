const router = require("express").Router();
const User = require("../../../Controllers/User.js");

router.route("/").post(User.createUser);
module.exports = router;
