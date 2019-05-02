const router = require("express").Router();
const Agents = require("../../../Controllers/Agents.js");

router.route("/").get(Agents.findAgent);
module.exports = router;
