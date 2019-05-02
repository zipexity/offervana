const router = require("express").Router();
const Offers = require("../../../Controllers/Offers.js");

router.route("/").get(Offers.viewOffer);
module.exports = router;
