const router = require("express").Router();
const Messages = require("../../../Controllers/Messages.js");

router.route("/").get(Messages.userViewMessages);
module.exports = router;
