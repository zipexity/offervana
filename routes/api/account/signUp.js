const router = require("express").Router();
const Login = require("../../../Controllers/Login.js");

router.route("/").post(Login.signUp);
module.exports = router;
