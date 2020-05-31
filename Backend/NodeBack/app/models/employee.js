const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
  username: {type: String, unique: true},
  password: String,
  fullname: String,
  email: String,
  phone: String,
  entity: String,
  position: String,
  location: String
})

module.exports = mongoose.model('Employee', employeeSchema)
