const router = require("express").Router();
const Agents = require("../../../Controllers/Agents.js");

router.route("/").post(Agents.agentCreate);
module.exports = router;
