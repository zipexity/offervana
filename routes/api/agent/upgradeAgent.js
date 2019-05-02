const router = require("express").Router();
const Agents = require("../../../Controllers/Agents.js");

router.route("/").put(Agents.upgradeAgent);
module.exports = router;
