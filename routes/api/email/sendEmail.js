const router = require("express").Router();
const Email = require("../../../Controllers/Email.js");

router.route("/").post(Email.sendEmail);
module.exports = router;
