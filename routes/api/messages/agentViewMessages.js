const router = require("express").Router();
const Messages = require("../../../Controllers/Messages.js");

router.route("/").get(Messages.agentViewMessages);
module.exports = router;
