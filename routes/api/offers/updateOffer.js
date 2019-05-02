const router = require("express").Router();
const Offers = require("../../../Controllers/Offers.js");

router.route("/").put(Offers.updateOffer);
module.exports = router;
