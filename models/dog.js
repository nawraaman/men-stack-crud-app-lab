// models/dog.js
const mongoose = require('mongoose')

const dogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  isFriendly: Boolean
})

const Dog = mongoose.model('Dog', dogSchema)
module.exports = Dog
