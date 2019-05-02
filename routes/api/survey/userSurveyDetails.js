const router = require("express").Router();
const Survey = require("../../../Controllers/Survey.js");

router.route("/").get(Survey.userSurveyDetails);
module.exports = router;
