const {Tags, Categories, Profils} = require('../db/models')

class FindController {
    async getCategory(req, res) {
        try {
            const allFind = await Tags.findAll({include: [{model: Categories}, {model: Profils}]})
            console.log(allFind[0].Profil)
            const temp = []
            for (let i = 0; i < allFind.length; i += 1) {
                temp.push({
                    tagId: allFind[i].id,
                    titleTag: allFind[i].title,
                    profilId: allFind[i].profil_id,
                    catId: allFind[i].catId,
                    CategoryId: allFind[i].Category.id,
                    CategoryTitle: allFind[i].Category.title,
                    ProfilsId: allFind[i].Profil.id,
                    ProfilsImg: allFind[i].Profil.img,
                    ProfilsName: allFind[i].Profil.name,
                    ProfilsDescription: allFind[i].Profil.description

                })

            }
            console.log(temp)
            if (temp) {
                res.json(temp)
            } else {
                res.sendStatus(500)
            }
        } catch (e) {
            console.log(e)
        }
    }


}

module.exports = new FindController()