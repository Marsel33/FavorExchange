const {Barters, Tasks} = require('../db/models')

class DealsController {

    async getAllBarters(req, res) {
        const {id} = req.params
        try {
            const allMyBartersRaw = await Barters.findAll({include: {model: Tasks}, where: {opponent: Number(id)}})
            const barters = []
            for (let i = 0; i < allMyBartersRaw.length; i += 1) {
                barters.push({
                    taskId: allMyBartersRaw[i].Task.id,
                    offer: allMyBartersRaw[i].Task.offer,
                    service: allMyBartersRaw[i].Task.service,
                    title: allMyBartersRaw[i].Task.title,
                    barterId: allMyBartersRaw[i].id,
                    initiator: allMyBartersRaw[i].initiator,
                    opponent: allMyBartersRaw[i].opponent,
                    status: allMyBartersRaw[i].status
                })
            }
            res.json({barters})
        } catch (e) {
            console.log(e)
        }
    }

    async createBarterRequested(req, res) {
        const {id} = req.params
        console.log('req.body: ', req.body)
        console.log('req.params: ', req.params)
        try {
            const {title, service, offer, opponentId} = req.body.data
            const task = await Tasks.create({title, service, offer})
            const barter = await Barters.create({
                task_id: Number(task.id),
                initiator: Number(id),
                opponent: Number(opponentId),
                status: 'requested'
            })
            res.json({task, barter})
        } catch (e) {
            console.log(e)
        }
    }

    async updateBarterStatusOnActive(req, res) {
        const {id} = req.params
        try {
            const barter = await Barters.update({status: 'active'}, {where: {id: Number(id)}})
            if (barter) {
                res.sendStatus(200)
            } else {
                res.json({message: 'Пожалуйста, дополните информацию о себе'})
            }

        } catch (e) {
            console.log(e)
        }
    }

    async updateBarterStatusOnEnded(req, res) {
        const {id} = req.params
        console.log(id)
        try {
            const barter = await Barters.update({status: 'ended'}, {where: {id: Number(id)}})
            console.log(barter)
            if (barter) {
                res.sendStatus(200)
            } else {
                res.json({message: 'Пожалуйста, дополните информацию о себе'})
            }

        } catch (e) {
            console.log(e)
        }
    }

    async updateBarterStatusOnDeclined(req, res) {
        const {id} = req.params
        try {
            const barter = await Barters.update({status: 'declined'}, {where: {id: Number(id)}})
            if (barter) {
                res.sendStatus(200)
            } else {
                res.json({message: 'Пожалуйста, дополните информацию о себе'})
            }

        } catch (e) {
            console.log(e)
        }
    }


}

module.exports = new DealsController()