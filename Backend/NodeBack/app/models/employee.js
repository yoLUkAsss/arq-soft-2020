const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
  username: String,
  password: String,
  fullname: String,
  phone: String,
  entity: String,
  position: String,
  location: String
})

module.exports = mongoose.model('Employee', employeeSchema)
