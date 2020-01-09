import User from '../models/user'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from '../config/config'

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
            const user = await User.findOne({email: email })
            if(!user) {
                return null
            }
            else {
                const passwordisValid = bcrypt.compareSync(user.password, password)
                if(!passwordisValid) {
                    return null
                }
                else {
                    const token = await jwt.sign({_id: user.id, name: user.name}, config.UserSecret)
                    return token
                }
            }
        } catch (e) {
            throw e
        }
    }

    static async getSingleUser(id) {
        try {
            const info = await User.findOne({_id: id })
            if(info) {
                return info
            }
            return null
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

    static async updateUser(id) {
        try {
            const info = await User.findOne({_id: id })
            if(info) {
                return info
            }
            return null
        } catch (e) {
            throw e
        }
    }
}

export default UserService;
