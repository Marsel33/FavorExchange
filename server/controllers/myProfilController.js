const {Profils} = require('../db/models')
class MyProfileController{

  async getProfile(req,res){
  try {
    const {id} = req.params
    const profile = await Profils.findOne({where:{user_id:Number(id)}})
    res.json({profile})
  } catch (e) {
    console.log(e);
  }
  }

  async createProfile(req,res){
try {
  const {id} = req.params
  const {img,name,description} = req.body
  const newProfile = await Profils.create({img,name,description,user_id:Number(id)})
  res.json({newProfile})
} catch (e) {
  console.log(e);
}
  }

  async updateProfile(req,res){
  try {
    const {img,name,description} = req.body
    const {id}= req.params   
    const refreshProfile = await Profils.update({img,name,description},{where:{user_id:Number(id)}})
    res.sendStatus(200).json({refreshProfile})
  } catch (e) {
    console.log(e);
  }
  }

}
module.exports = new MyProfileController()
