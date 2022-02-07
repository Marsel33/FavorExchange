const router = require('express').Router()
const DealsController = require('../controllers/dealsController')

router.post('/newbarter/:id', DealsController.createBarterRequested)
router.put('/active/:id', DealsController.updateBarterStatusOnActive)
router.put('/ended/:id', DealsController.updateBarterStatusOnEnded)
router.put('/declined/:id', DealsController.updateBarterStatusOnDeclined)
router.get('/all-barters/:id', DealsController.getAllBarters)



module.exports = router;
