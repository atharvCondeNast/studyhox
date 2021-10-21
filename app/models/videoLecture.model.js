const mongoose = require("mongoose");

const Lectures = mongoose.model(
  "Lectures",
  new mongoose.Schema({
    type: String, // video, audio, wriiten
    title: String, // Concept by HC verma
    body: String, // This is a physics book which will let you work on your concepts of physics
    link: String, // https://s3.videolecture.com
    category: String // premium, normal, 
  }, {timestamps: true})
);

module.exports = Lectures;
