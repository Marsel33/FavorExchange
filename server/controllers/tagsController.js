const {Tags, Categories, ProfilEntries} = require('../db/models')


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
            const allTags = await Tags.findAll({include: {model: Categories}, where: {profil_id: Number(id)}})
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
        console.log(req.body, 'ddddddddddddddddd')
        try {
            const tag = await Tags.create({title, catId, profil_id: Number(id)})
            await ProfilEntries.create({cat_id: catId, profil_id: Number(id)})
            console.log(tag)
            res.json({tag})
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new TagsController()
