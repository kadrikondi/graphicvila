const GraphicService = require('../service/graphics')
const cloudinary = require('cloudinary')

class GraphicController {
    static async getAllGraphics(req, res) {
        try {
            const info = await GraphicService.getAllGraphics()
            if(info.length > 0) {
                return res.status(200).json({
                    info: info
                })
            }
            return null
        } catch (e) {
            return res.status(500).json({
                error: e.message
            })
        }
    }

    static async userPostNewGraphics(req, res) {
        try {
            if(!req.body.name || !req.body.ideaname || !req.body.caption) {
                return res.status(400).json({
                    message: 'Please fill in all fiels'
                })
            }
            else if(req.file == undefined || req.file == ''){
                return res.status(400).json({message:`Error: No file selected`})
            }
            else {
                var image = req.file.path
                const result = await cloudinary.uploader.upload(image)
                var imgUrl = result.secure_url
                const { id } = req.params
                const data = req.body
                const info = await GraphicService.userPostNewGraphics(id, data, imgUrl)
                return res.status(200).json({
                    info: info,
                    message: 'Post uploaded successfully'
                })
            }
        } catch (e) {
            return res.status(500).json({
                error: e.message
            })
        }
    }

    static async getSingleGraphic(req, res) {
        try {
            const { id } = req.params
            const info = await GraphicService.getSingleGraphic(id)
            return res.status(200).json({
                info: info
            })
        } catch (e) {
            return res.status(500).json({
                error: e.message
            })
        }
    }

    static async updateGraphic(req, res) {
        try {
            const { id } = req.params
            const data = req.body
            const info = await UserService.updateGraphic(id, data)
            return res.status(200).json({
                info: info
            })
        } catch (e) {
            return res.status(500).json({
                error: e.message
            })
        }
    }

    static async deleteGraphic(req, res) {
        try {
            const { _id } = req.params
            const info = await UserService.deleteGraphic(_id)
        } catch (e) {
            return res.status(500).json({
                error: e.message
            })
        }
    }
}

module.exports = GraphicController
