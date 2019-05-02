const router = require("express").Router();
const Survey = require("../../../Controllers/Survey.js");

router.route("/").post(Survey.postSurvey);
module.exports = router;
