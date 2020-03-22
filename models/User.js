const mongoose = require("mongoose");

const UserAuthSchema = new mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  username: {
    type: String,
    required: [true, "Username is required!"],
    min: 5,
    max: 30
  },
  role: {
    type: String,
    required: [true, "role is required"],
    min: 8
  },
  email: {
    type: String,
    required: [true, "Email is required!"]
  },
  password: {
    type: String,
    required: [true, "Password is required!"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = authSchema = mongoose.model(
  "user_auth_detail",
  UserAuthSchema
);
