const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
//module.exports = router;
router.use("/api", apiRoutes);
//module.exports = router(app);
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
