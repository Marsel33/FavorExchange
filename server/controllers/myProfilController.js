const {Profils, MapProfil, Reitings} = require('../db/models')

class MyProfileController {
    async getAllProfiles(req, res) {
        try {
            const allProfiles = await Profils.findAll({include: {model: MapProfil}, raw: true})
            const temp = []

            for (let i = 0; i < allProfiles.length; i++) {
                temp.push({
                    id: allProfiles[i].id,
                    name: allProfiles[i].name,
                    description: allProfiles[i].description,
                    img: allProfiles[i].img,
                    adress: allProfiles[i]['MapProfil.adress']

                })
            }

            if (allProfiles) {
                res.json(temp)
            } else {
                res.sendStatus(500)
            }
        } catch (e) {
            console.log(e)
        }
    }


    async getProfile(req, res) {
        try {
            const {id} = req.params
            const profileOne = await Profils.findOne({where: {user_id: Number(id)}})
            if (profileOne) {
                const starsProfile = await Reitings.findAll({where: {profil_id: profileOne.id}})
                const reiting = starsProfile.reduce((el, acc) => (acc += el.star), 0)
                const amountDeals = starsProfile.length
                const newRaitind = Math.floor(reiting / amountDeals)
                console.log(reiting, newRaitind, amountDeals)
                const profile = {
                    id: profileOne.id,
                    img: profileOne.img,
                    name: profileOne.name,
                    user_id: profileOne.user_id,
                    rating: newRaitind,
                    amountDeals: amountDeals
                }
                console.log(profileOne)
                res.json({profile})
            } else {
                res.json('\'Пожалуйста, дополните информацию о себе\'')
            }
        } catch (e) {
            console.log(e);
        }
    }

    async createProfile(req, res) {
        try {
            const {id} = req.params
            const {img, name, description, adress} = req.body
            const newProfile = await Profils.create({img, name, description, user_id: Number(id)})
            const geolocation = await MapProfil.create({adress, profil_id: Number(id)})
            if (newProfile) {
                console.log(newProfile)
                res.json({newProfile})
            } else {
                res.js
                ('Пожалуйста, дополните информацию о себе')
            }
        } catch (e) {
            console.log(e);
        }
    }

    async updateProfile(req, res) {
        try {
            const {img, name, description} = req.body
            const {id} = req.params
            const refreshProfile = await Profils.update({img, name, description}, {where: {user_id: Number(id)}})
            res.json({refreshProfile})
        } catch (e) {
            console.log(e);
        }
    }

}

module.exports = new MyProfileController()
