const {Barters,Tasks} = require('../db/models')
class DealsController{

    async createBarterRequested(req,res){
        const {id} = req.params

        try{
        const {title,service,offer,opponent} = req.body
        const task = await Tasks.create({title,service,offer})
        const barter = await Barters.create({task_id:task.id,initiator:Number(id),opponent:opponent,status:'request'})
        res.json({task,barter})
    }catch (e){
        console.log(e)
    }
    }
    async updateBarterStatusOnActive(req,res){
        const {id} = req.params

        try{
       const barter = await Barters.update({status:'active'},{where:{id:Number(id)}})
       if(barter){
           res.sendStatus(200)
       }else{
           res.sendStatus(500)
       }

   }catch (e) {
       console.log(e)
   }
    }
    async updateBarterStatusOnEnded(req,res){
        const {id} = req.params

        try{
            const barter = await Barters.update({status:'ended'},{where:{id:Number(id)}})
            if(barter){
                res.sendStatus(200)
            }else{
                res.sendStatus(500)
            }

        }catch (e) {
            console.log(e)
        }
    }
    async getRequestedBarterInit(req,res){
        const {id} = req.params
    try{
         const barterALL = await Barters.findAll({where:{initiator:Number(id)}})

        if(barterALL){
            const barter = barterALL.filter(el=>el.status === 'request')
            res.json({barter})
        }else{
            res.sendStatus(500)
        }
     }catch (e) {
     console.log(e)
     }
    }
    async getActiveBarterInit(req,res){
        const {id} = req.params
        try{
            const barterALL = await Barters.findAll({where:{initiator:Number(id)}})

            if(barterALL){
                const barter = barterALL.filter(el=>el.status === 'active')
                res.json({barter})
            }else{
                res.sendStatus(500)
            }
        }catch (e) {
            console.log(e)
        }
    }
    async getEndedBarterInit(req,res){
        const {id} = req.params
        try{
            const barterALL = await Barters.findAll({where:{initiator:Number(id)}})

            if(barterALL){
                const barter = barterALL.filter(el=>el.status === 'ended')
                res.json({barter})
            }else{
                res.sendStatus(500)
            }
        }catch (e) {
            console.log(e)
        }
    }
    async getRequestedBarterOpponent(req,res){
        const {id} = req.params
        try{
            const barterALL = await Barters.findAll({where:{initiator:Number(id)}})

            if(barterALL){
                const barter = barterALL.filter(el=>el.status === 'request')
                res.json({barter})
            }else{
                res.sendStatus(500)
            }
        }catch (e) {
            console.log(e)
        }
    }
    async getActiveBarterOpponent(req,res){
        const {id} = req.params
        try{
            const barterALL = await Barters.findAll({where:{initiator:Number(id)}})

            if(barterALL){
                const barter = barterALL.filter(el=>el.status === 'active')
                res.json({barter})
            }else{
                res.sendStatus(500)
            }
        }catch (e) {
            console.log(e)
        }
    }
    async getEndedBarterOpponent(req,res){
        const {id} = req.params
        try{
            const barterALL = await Barters.findAll({where:{initiator:Number(id)}})

            if(barterALL){
                const barter = barterALL.filter(el=>el.status === 'ended')
                res.json({barter})
            }else{
                res.sendStatus(500)
            }
        }catch (e) {
            console.log(e)
        }
    }

 }
module.exports = new DealsController()