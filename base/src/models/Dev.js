const mongoose = require('mongoose')
const PointShema = require('./Utils/PointSchema')

const  DevSchema = new mongoose.Schema({
   name: String,
   github_username: String,
   avatar_url: String,
   bio: String,
   techs: [String],
   location: {
      type: PointShema,
      index: '2dsphere',
   }
})

module.exports = mongoose.model('Dev', DevSchema)