const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    gender: String,
    phone: String,
    address: String,
    photo: String,
    graphics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'graphics'}]
})

const exportModel = mongoose.model('users', userSchema)

module.exports = exportModel;
