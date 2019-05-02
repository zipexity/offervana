const router = require("express").Router();
const Login = require("../../../Controllers/Login");

router.route("/").get(Login.checkLog);
module.exports = router;
