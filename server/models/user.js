import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    occupation: String,
    phone: String,
    address: String,
    graphics: [{ type: mongoose.Schema.Types.ObjectId, ref: 'graphics'}]
})

const exportModel = mongoose.model('users', userSchema)
export default exportModel;
