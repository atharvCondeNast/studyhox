const mongoose = require("mongoose");

const User = mongoose.model(
  "User_Prof",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    stream: String,
    class: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  }, {timestamps: true})
);

module.exports = User;
