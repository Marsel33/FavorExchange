const {Reitings, Barters} = require('../db/models')

class CommentController {
    async createComment(req, res) {
        console.log('123')
        const {star, comment} = req.body.data
        console.log(req.body)
        //barter_id
        try {
            const barter = await Barters.findOne({where: {id: 6}})
            const profil_id = barter.opponent
            console.log(barter, profil_id)
            const result = await Reitings.create({star: star, barter_id: 6, comment: comment, profil_id})
            console.log(result)
            if (result) {
                res.json(result)
            } else {
                res.json({message: "Попробуйте еще раз!!!"})
            }
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new CommentController()