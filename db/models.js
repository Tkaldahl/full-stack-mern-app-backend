const mongoose = require('./connection.js')

const OccupantSchema = new mongoose.Schema({
  name: String,
  age: Number,
  role: String
})

mongoose.model('Occupant', OccupantSchema)

module.exports = mongoose
