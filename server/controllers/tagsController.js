const {Tags, Categories} = require('../db/models')


class TagsController {
    async getCategories(req, res) {
        try {
            const allCategories = await Categories.findAll()
            if (allCategories) {
                res.json({allCategories})
            } else {
                res.sendStatus(500)
            }
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    async updateTag(req, res) {
        const {id} = req.params
        const {title, catId} = req.body
        try {
            const updatedTag = await Tags.update({title, catId}, {where: {id: Number(id)}})
            res.sendStatus(200).json({updatedTag})
        } catch (e) {
            console.log(e)
            res.sendStatus(500)

        }
    }


    async deleteTag(req, res) {
        const {id} = req.params
        try {
            const delTag = await Tags.destroy({where: {id: Number(id)}})
            res.sendStatus(200)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }


    async getAllTags(req, res) {
        const {id} = req.params
        try {
            const allTags = await Categories.findAll({include: Tags})
            if (allTags) {
                res.json({allTags})
            } else {
                res.json('Пожалуйста, дополните информацию о себе')
            }
        } catch (e) {
            console.log(e)
        }
    }

    async createTag(req, res) {
        const {id} = req.params
        const {title, catId} = req.body
        try {
            const tag = await Tags.create({title, catId, profil_id: Number(id)})
            res.json({tag})
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new TagsController()