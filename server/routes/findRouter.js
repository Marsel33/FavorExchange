const router = require('express').Router()
const FindController = require('../controllers/findController')
router.get('/categories', FindController.getCategory)
module.exports = router