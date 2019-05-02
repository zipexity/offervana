const router = require("express").Router();
const cloudinary = require("../../../Controllers/cloudinary.js");

router.route("/").get(cloudinary.viewImages);
module.exports = router;
