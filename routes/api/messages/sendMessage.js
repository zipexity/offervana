const router = require("express").Router();
const Messages = require("../../../Controllers/Messages.js");

router.route("/").post(Messages.sendMessage);
module.exports = router;
