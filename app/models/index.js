const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.videoLecture = require("./videoLecture.model")
db.continueWatching = require("./continueWatching.model")
db.courses = require("./courses.model")

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;