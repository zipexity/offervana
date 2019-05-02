const router = require("express").Router();
const Offers = require("../../../Controllers/Offers.js");

router.route("/").post(Offers.buildOffer);
module.exports = router;
