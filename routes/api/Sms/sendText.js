const router = require("express").Router();
const Sms = require("../../../Controllers/Sms.js");

router.route("/").post(Sms.sendText);
module.exports = router;
