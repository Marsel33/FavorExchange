const router = require('express').Router()
const IndexController = require('../controllers/indexController')

router.get('/', IndexController.getPage)

module.exports = router
