const router = require("express").Router();
const Sms = require("../../../Controllers/Sms.js");

router.route("/").post(Sms.autoSend);
module.exports = router;
