import mongoose = require ('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  nama: String,
  email: String,
  password:   String,
}, {timestamps: true})

mongoose.model('User', userSchema);

module.exports = User