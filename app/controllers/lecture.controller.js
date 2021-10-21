const { mongoose } = require("../models");
const db = require("../models");
const Lecture = db.videoLecture
const ContinueWatching = db.continueWatching


exports.getVideoLecture = (req, res) => {
  const { type } = req.body
  let query = {}
  if (type) {
    query = { type }
  }
  Lecture.find(query)
    .then((response) => {
      return res.status(200).json({
        status: true,
        message: `success`,
        data: response
      })
    })
    .catch(err => {
      return res.status(400).json({
        status: false,
        message: `Soemthing went wrong. Please try again later`,
        data: err.message
      })
    })
}


exports.searchVideoLecture = (req, res) => {
  let { searchField } = req.body
  searchField
  let query = {}
  if (searchField) {
    query = { $or: 
      [
        {"title" : { $regex: searchField, $options: 'i' }} ,
        {"body" : { $regex: searchField, $options: 'i' }},
        {"type" : { $regex: searchField, $options: 'i' }}
      ]
    } 
  }
  console.log(query)
  Lecture.find(query)
    .then((response) => {
      return res.status(200).json({
        status: true,
        message: `success`,
        data: response
      })
    })
    .catch(err => {
      return res.status(400).json({
        status: false,
        message: `Soemthing went wrong. Please try again later`,
        data: err.message
      })
    })
}

exports.postVideoLecture = (req, res) => {
  const {type, title, body, link, category} = req.body
  if(!type || !title || !body || !link  || !category){
    return res.status(200).json({
      status: false,
      message: `One or more data is missing`,
      data: err.message
    })
  }
  const lectures = new Lecture({
    type,
    title, 
    body,
    link,
    category,
  });

  lectures.save((err, video) => {
    if (err) {
      return res.status(400).send({
        status: false,
        message: `Soemthing went wrong. Please try again later`,
        data: err.message
      })
    }

    return res.status(200).send({
      status: true, 
      message: `success`,
      data: video
    })
  });

}

exports.saveContinueWatching = (req,res) => {
  const { timeWatched, timeTotal, lecture, user, course} = req.body;
  if(!timeWatched || !timeTotal || !lecture || !user ){
    return res.status(200).json({
      status: false,
      message: `One or more data is missing`,
      data: {}
    })
  }
const continueWacthing = new ContinueWatching({
  timeWatched,
  timeTotal,
  course,
  lecture: mongoose.Types.ObjectId(lecture),
  user: mongoose.Types.ObjectId(user),
})

continueWacthing.save((err, response) => {
  if (err) {
    return res.status(400).send({
      status: false,
      message: `Soemthing went wrong. Please try again later`,
      data: err.message
    })
  }

  return res.status(200).send({
    status: true, 
    message: `success`,
    data: response
  })
})
}

exports.getContinueWatching = (req,res) => {
  const {lecture, user} = req.body;
  if( !lecture || !user ){
    return res.status(200).json({
      status: false,
      message: `One or more data is missing`,
      data: {}
    })
  }

  ContinueWatching.find({lecture, user}).populate('user').populate('lecture').populate('course')
  .then(response => {
    return res.status(200).send({
      status: true, 
      message: `success`,
      data: response
    })
  }).catch(err => {
    return res.status(200).json({
      status: false,
      message: `One or more data is missing`,
      data: err.message
    })
  })
}
