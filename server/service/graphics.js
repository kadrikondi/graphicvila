const Graphic = require('../models/graphic')
const User = require('../models/user')

class GraphicService {

    static async getAllGraphics() {
        try {
            const info = await Graphic.find().sort({"_id": -1})
            return info
        } catch (e) {
            throw e
        }
    }

    static async userPostNewGraphics(id, data, file) {
        try {
            await User.findOne({_id: id}, async (err, user) => {
                await Graphic.create(data, async (err, graphic) => {
                    const graphical = user.graphics
                    graphic.photo = file
                    await graphic.save()
                    graphical.push(graphic)
                    await user.save()
                    return graphic
                })
            })
        } catch (e) {
            throw e
        }
    }

    static async getSingleGraphic(id) {
        try {
            return await Graphic.findOne({_id: id})
        } catch (e) {
            throw e
        }
    }

    static async updateGraphic(id, data) {
        try {
            const info = await Graphic.findOne({_id: id})
            if(info) {
                const { caption, ideaname, name } = data
                info.caption = caption || info.caption
                info.ideaname = ideaname || info.ideaname
                info.name = name || info.name
                await info.save()
                return info
            }
            return null
        } catch (e) {
            throw e
        }
    }

    static async deleteGraphic(id) {
        try {
            return await Graphic.findOneAndDelete({_id: id})
        } catch (e) {
            throw e
        }
    }
}

module.exports = GraphicService;
