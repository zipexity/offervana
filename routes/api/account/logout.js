const router = require("express").Router();
const Login = require("../../../Controllers/Login.js");

router.route("/").get(Login.logout);
module.exports = router;
