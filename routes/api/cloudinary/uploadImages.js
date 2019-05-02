const router = require("express").Router();
const db = require("../../../models");
// const cloudinaryRoute = require("../../../Controllers/cloudinary.js");
const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "demo",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }]
});
const parser = multer({ storage: storage });
router.route("/").post(parser.single("image"), function(req, res) {
  const image = {};
  image.url = req.file.url;
  image.UserId = req.query.UserId;
  db.Images.create(image) // save image information in database
    .then(function(newImage) {
      return res.redirect("/images");
    })
    .catch(err => res.json(err));
});
module.exports = router;
