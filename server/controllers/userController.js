const bcrypt = require('bcrypt');
const {Users} = require('../db/models')

class UserController {

    check(req, res) {
        if (req.session.user) {
            return res.status(200).json({user: req.session.user})
        }
        res.sendStatus(401);
    }

    async signup(req, res) {
        const {email, name, password} = req.body;
        if (email && name && password) {
            const cryptPass = await bcrypt.hash(password, Number(process.env.SALT_ROUND))
            try {
                const currentUser = await Users.create({...req.body, password: cryptPass})
                req.session.user = {id: currentUser.id, name: currentUser.name}
                return res.json({user: {id: currentUser.id, name: currentUser.name, email: currentUser.email}})
            } catch (err) {
                console.log(err)
                return res.sendStatus(500)
            }
        } else {
            return res.sendStatus(500)
        }
    }



async signin(req, res){
    console.log(req.body)
    const {email, password} = req.body;
    if(email && password){
        try{
            const currentUser = await Users.findOne({where:{email}})
            console.log(currentUser)
            if (bcrypt.compare(password, currentUser.dataValues.password)) {
                req.session.user = {id:currentUser.dataValues.id, name:currentUser.dataValues.name}
              return res.json({user:{id:currentUser.dataValues.id, name:currentUser.dataValues.name}})
          } else {
              return res.sendStatus(500)
          }
      }catch(err){
          console.log(err)
          return res.sendStatus(500)
      }
    }else{
        return res.sendStatus(500)
  }
}
}

module.exports = new UserController()
