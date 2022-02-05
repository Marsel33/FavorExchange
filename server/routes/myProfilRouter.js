const router = require('express').Router()
const MyProfileController = require('../controllers/myProfilController')

router.get('/:id',MyProfileController.getProfile)
router.post('/:id',MyProfileController.createProfile)
router.put('/:id',MyProfileController.updateProfile)

module.exports = router
