const authRouter = require("express").Router();

// packages
const bcrypt = require("bcrypt");

// models
const authSchema = require("../models/User");
const userBasicDetailSchema = require("../models/UserDetail");

// validators
const { registerValidation } = require("../middlewares/authValidation");

authRouter.post("/register", async (req, res) => {
  const { username, email, role } = req.body;

  const validatorResult = registerValidation(req.body);

  // check if there is any validation error
  if (validatorResult.error)
    return res.status(400).json(validatorResult.error.details[0].message);

  // generate hashed password
  const password = bcrypt.hashSync(req.body.password, 10);

  const _id = require("mongoose").Types.ObjectId();

  const newUser = new authSchema({
    _id,
    role,
    username,
    email,
    password
  });

  const newUserDetail = new userBasicDetailSchema({
    _id
  });

  try {
    //   check if user already exists
    const userExist = await authSchema.findOne({
      $or: [{email}, {username}]
    });

    if (userExist)
      return res
        .status(400)
        .json({ msg: "User with that username or email already exist!" });

    const userAuthDetailStatus = await newUser.save();
    const userBasicDetailStatus = await newUserDetail.save();
    res.json({ userAuthDetailStatus, userBasicDetailStatus });
  } catch (err) {
    if (err) return res.status(500).json(err);
  }
});

module.exports = authRouter;
