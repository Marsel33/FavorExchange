const {Profils, MapProfil} = require('../db/models')

class MyProfileController {
    async getAllProfiles(req, res) {
        try {
            const allProfiles = await Profils.findAll({include: {model: MapProfil}, raw: true})
            const temp = []
            
            for ( let i = 0; i < allProfiles.length; i++) {
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
            const profile = await Profils.findOne({where: {user_id: Number(id)}})
            if (profile) {
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
            res.sendStatus(200).json({refreshProfile})
        } catch (e) {
            console.log(e);
        }
    }

}

module.exports = new MyProfileController()
