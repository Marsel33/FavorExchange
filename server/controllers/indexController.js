const {MainPage} = require('../db/models')

class IndexController {
  
  async getPage(req, res){
    try {
      const mainPage = await MainPage.findAll()
     // res.json({mainPage})
     res.sendStatus(200)
    } catch (e) {
      console.log('asdfghjkl;',e)
    }
  }
}

module.exports = new IndexController()
