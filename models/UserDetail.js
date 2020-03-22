const mongoose = require("mongoose");

const userBasicDetail = new mongoose.Schema({
  _id: mongoose.SchemaTypes.ObjectId,
  firstName: {
    type: String,
    min: 5,
    max: 30
  },
  lastName: {
    type: String,
    min: 5,
    max: 30
  },
  contactNumber: {
    type: String,
    min: 9,
    max: 10
  },
  education: {
    type: Array
  },
  skills: {
    type: Array
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = userBasicDetailSchema = mongoose.model("user_basic_detail", userBasicDetail);
