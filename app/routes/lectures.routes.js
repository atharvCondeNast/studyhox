const { authJwt } = require("../middlewares");
const controller = require("../controllers/lecture.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/lecture/getLecture", controller.getVideoLecture);

  app.post("/api/lecture/postLecture", controller.postVideoLecture);

  app.post("/api/lecture/searchLecture", controller.searchVideoLecture);

  app.post("/api/lecture/saveContinueWatching", controller.saveContinueWatching);

  app.post("/api/lecture/getContinueWatching", controller.getContinueWatching);



};
