const { mongoose } = require("../models");
const db = require("../models");
const Courses = db.courses


exports.getCourses = (req, res) => {
  const { type } = req.body
  let query = {}
  if (type) {
    query = { type }
  }
  Courses.find(query).populate('lectureIds')
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


exports.searchVideoCourses = (req, res) => {
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
  Courses.find(query).populate('lectureIds')
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

exports.postVideoCourses = (req, res) => {
  const {type, title, body, lectureIds, category} = req.body
  if(!type || !title || !body || !lectureIds  || !category){
    return res.status(200).json({
      status: false,
      message: `One or more data is missing`,
      data: err.message
    })
  }
  const Coursess = new Courses({
    type,
    title, 
    body,
    lectureIds,
    category,
  });

  Coursess.save((err, video) => {
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

