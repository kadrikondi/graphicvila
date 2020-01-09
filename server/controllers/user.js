import UserService from '../service/user'

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
                        user: user
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
}

export default UserController;
