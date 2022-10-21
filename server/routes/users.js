var express = require("express");
var router = express.Router();
const UserModel = require("../models/user.model");

/* GET users listing. */
router.post("/", async function (req, res, next) {
  console.log(req.body);
  /*********** SAVE query **********/
  await UserModel(
    // firstName: "perry",
    // lastName: "raj",
    // Email: "abbc@gmail.com",
    // Mno: "8898877281",
    res.body
  ).save();

  /***************** Get All Data ***********/
  // const users = await UserModel.find({ firstName: "Test" });

  //**************** Update ***************/
  // const users = await UserModel.findOneAndUpdate(
  //   { lastName: "two" },
  //   { $set: { firstName: "Test-21" } },
  //   { new: true }
  // );
  // const users = await UserModel.find({ lastName: "raj" });

  // const users = await UserModel.deleteOne({ lastName: "raj" });

  // console.log(users);
  // res.json(users);
});

module.exports = router;
