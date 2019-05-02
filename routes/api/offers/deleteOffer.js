const router = require("express").Router();
const Offers = require("../../../Controllers/Offers.js");

router.route("/").delete(Offers.deleteOffer);
module.exports = router;
