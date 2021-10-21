const mongoose = require("mongoose");

const ContinueWatching = mongoose.model(
  "ContinueWatching",
  new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User_Prof"
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Courses"
    },
    lecture: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lectures"
    },
    timeWatched: String, // hh:mm:ss
    timeTotal: String //hh:mm:ss
  }, { timestamps: true })
);

module.exports = ContinueWatching;
