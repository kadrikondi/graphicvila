const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

class UserService {

    static async getAllUsers() {
        try {
            const info = await User.find().sort({"_id": -1})
            if(info.length > 0) {
                return info
            }
            return null
        } catch (e) {
            throw e
        }
    }

    static async registerUser(data) {
        try {
            return await User.create(data)
        } catch (e) {
            throw e
        }
    }

    static async loginUser(email, password) {
        try {
            const user = await User.findOne({email: email})
                if(!user){
                    return null
                }
                else{
                    
                        const passwordIsvalid = bcrypt.compareSync(password, user.password)
                        if(!passwordIsvalid){
                            return null
                        }
                        else{
                            const token = await jwt.sign({id:user.id, name:user.name, email:user.email}, config.UserSecret)
                            const id = user._id
                            const combined = [token, id]
                            return combined
                        }
                }
        } catch (e) {
            throw e
        }
    }

    static async getSingleUser(id) {
        try {
            const info = await User.findById(id).populate("graphics")
            const user_graphics_details = info.graphics
            const combined_info = [info, user_graphics_details]
            return combined_info
        } catch (e) {
            throw e
        }
    }

    static async deleteUser(id) {
        try {
            const info = await User.findOneAndDelete({_id: id })
            if(info) {
                return info
            }
            return null
        } catch (e) {
            throw e
        }
    }

    static async updateUser(id, data, file) {
        try {
            const info = await User.findOne({_id: id })
            if(info) {
                const { name, email, gender, address, phone } = data
                info.name = name || info.name
                info.email = email || info.email
                info.gender = gender || info.gender
                info.address = address || info.address
                info.phone = phone || info.phone
                info.photo = file || info.photo
                await info.save()
                return info
            }
            return null
        } catch (e) {
            throw e
        }
    }
}

module.exports = UserService;
