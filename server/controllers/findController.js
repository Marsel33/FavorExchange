const {Tags, Categories, Profils, MapProfil, ProfilEntries} = require('../db/models')

class FindController {
    async getAllCategory(req, res) {
        try {
            const category = await Categories.findAll()
// const title = category.map(el=>el.title)
            console.log(category)
            if (category) {
                res.json(category)
            } else {
                res.sendStatus(500)
            }
        } catch (e) {
            console.log(e);
        }
    }

    // async filter(req, res){
    //   const {category_id, tag_it} = req.body
    // }

    async getCategory(req, res) {
        const {category_id, tag_id} = req.body
        console.log('==========================================', req.body);
        if (!category_id && !tag_id) {
            // WITHOUT QUERY
            try {

                const temp = await Profils.findAll({
                        raw: true,
                        include: [
                            {model: MapProfil}
                        ]
                    }
                )
                console.log(temp);
                const newTemp = [];
                for (let i = 0; i < temp.length; i++) {
                    newTemp.push({
                        adress: temp[i]['MapProfil.adress'],
                        mapId: temp[i]['MapProfil.id'],
                        profilId: temp[i]['MapProfil.profil_id'],
                        description: temp[i].description,
                        img: temp[i].img,
                        name: temp[i].name,
                        category_id: temp[i]['Categories.id']
                    })
                }
                if (newTemp) {
                    res.json(newTemp)
                } else {
                    res.sendStatus(500)
                }
            } catch (e) {
                console.log(e)
            }
        } else if (category_id && !tag_id) {
            // WHEN YOUVE GOT ONLY CATEGORY
            try {
                console.log('testtestetstest');
                const profEnt = await ProfilEntries.findAll({where: {cat_id: Number(category_id)}})
                console.log(profEnt);
                const profileIds = profEnt.map(e => e.profil_id)
                console.log(profileIds);
                const rawQuery = await Profils.findAll({
                    where: {id: profileIds}, raw: true,
                    include: [
                        {model: MapProfil}
                    ]
                })


                console.log('===========>', rawQuery);
                const newTemp = [];
                for (let i = 0; i < rawQuery.length; i++) {
                    newTemp.push({
                        adress: rawQuery[i]['MapProfil.adress'],
                        mapId: rawQuery[i]['MapProfil.id'],
                        profilId: rawQuery[i]['MapProfil.profil_id'],
                        description: rawQuery[i].description,
                        img: rawQuery[i].img,
                        name: rawQuery[i].name,
                        category_id: rawQuery[i]['Categories.id']
                    })
                }
                if (newTemp) {
                    res.json(newTemp)
                } else {
                    res.sendStatus(500)
                }


            } catch (e) {
                console.log(e);
            }
        } else if (tag_id && !category_id) {
            // WHEN YOUVE GOT ONLY TAG
            try {
                console.log('testtestetstest');
                const profEnt = await Tags.findAll({where: {id: Number(tag_id)}})
                const profileIds = profEnt.map(e => e.profil_id)
                const rawQuery = await Profils.findAll({
                    where: {id: profileIds}, raw: true,
                    include: [
                        {model: MapProfil}
                    ]
                })
                console.log('===========>', rawQuery);
            } catch (e) {
                console.log(e);
            }
        } else if (category_id && tag_id) {
            // WHEN YOU RECEIVED EVERYTHING
            try {

                const rawQuery = await Profils.findAll({
                    raw: true,
                    include: [
                        {model: Tags, where: {id: Number(tag_id), catId: Number(category_id)}},
                        {model: MapProfil}
                    ]
                })
                console.log('===========>', rawQuery);
            } catch (e) {
                console.log(e);
            }
        }

    }


}

module.exports = new FindController()
