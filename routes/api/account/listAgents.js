const router = require("express").Router();
const Login = require("../../../Controllers/Login");

router.route("/").get(Login.listAgents);
module.exports = router;
