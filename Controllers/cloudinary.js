const db = require("../models");

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

module.exports = {
  uploadImages: function(req, res) {
    console.log("########", req.file, "########"); // to see what is returned to you
    const image = {};
    image.url = req.file.url;
    image.UserId = req.query.UserId;
    db.Images.create(image) // save image information in database
      .then(function(newImage) {
        res.json(newImage);
      })
      .catch(err => res.json(err));
  },
  viewImages: function(req, res) {
    var query = {};
    if (req.query.UserId) {
      query.UserId = req.query.UserId;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Images.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbSurvey) {
      res.json(dbSurvey);
    });
  }
};
