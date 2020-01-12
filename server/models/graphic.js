const mongoose = require('mongoose')

const graphicSchema = new mongoose.Schema({
    caption: String,
    ideaname: String,
    name: String,
    link: String,
    photo: String
})

const graphicModel = mongoose.model('graphics', graphicSchema)

module.exports = graphicModel;
