var express = require("express");
var router = express.Router();

/* GET home page. */
const test = function (req, res, next) {
  console.log("YEST");

  next();
};

router.get("/", function (req, res) {
  console.log("TEST GET ROUTE");

  res.send({ message: "MESSAGE" });
});

router.get("/:userId", test, function (req, res, next) {
  console.log(req.query, "PARAMS", req.params);
  res.render("index", { title: "Express" });
});

module.exports = router;
