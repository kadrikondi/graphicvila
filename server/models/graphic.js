import mongoose from 'mongoose'

const graphicSchema = new mongoose.Schema({
    caption: String,
    ideaname: String,
    name: String
})

const graphicModel = mongoose.model('graphics', graphicSchema)

export default graphicModel;
