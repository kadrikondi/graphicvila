const UserService = require('../service/user')
const bcrypt = require('bcryptjs')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

class UserController {

    static async getAllusers(req, res) {
        try {
            const info = await UserService.getAllUsers()
            return res.status(200).json({
                info: info
            })
        } catch (e) {
            return res.status(500).json({
                error: e.message
            })
        }
    }

    static async getSingleUser(req, res) {
        try {
            const { id } = req.params
            const info = await UserService.getSingleUser(id)
            return res.status(200).json({
                info: info
            })
        } catch (e) {
            return res.status(500).json({
                error: e.message
            })
        }
    }

    static async loginUser(req, res) {
        try {
            const { email, password } = req.body
            if(!email || !password) {
                return res.status(400).json({
                    message: 'Please fill all fields'
                })
            }
            else {
                const user = await UserService.loginUser(email, password)
                if(!user) {
                    return res.status(404).json({
                        message: 'wrong email/password'
                    })
                }
                else {
                    return res.status(200).json({
                        message: 'login was successful',
                        token: user
                    })
                }
            }
        } catch (e) {
            return res.status(500).json({
                error: e.message
            })
        }
    }

    static async deletUser(req, res) {
        try {
            const { id } = req.params
            const info = await UserService.deleteUser(id)
        } catch (e) {
            return res.status(500).json({
                error: e.message
            })
        }
    }

    static async registerUser(req, res) {
        try {
            if(!req.body.name || !req.body.email || !req.body.password || !req.body.address || !req.body.occupation || !req.body.phone) {
                return res.status(400).json({
                    message: 'Please fill in all fields'
                })
            }
            else {
                const data = req.body
                const hash = bcrypt.hashSync(req.body.password, 10)
                const info = await UserService.registerUser(data)
                info.password = hash
                await info.save()
                return res.status(201).json({
                    info: info
                })
            }
        } catch (e) {
            return res.status(500).json({
                error: e.message
            })
        }
    }

    static async updateUser(req, res) {
        try {
            const { id } = req.params
            const data = req.body
            const info = await UserService.updateUser(id, data)
            return res.status(200).json({
                info: info
            })
        } catch (e) {
            return res.status(500).json({
                error: e.message
            })
        }
    }
}

module.exports = UserController;
