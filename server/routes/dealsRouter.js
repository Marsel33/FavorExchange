const router = require('express').Router()
const DealsController = require('../controllers/dealsController')

router.post('/newbarter/:id',DealsController.createBarterRequested)
router.put('/active/:id',DealsController.updateBarterStatusOnActive)
router.put('/ended/:id',DealsController.updateBarterStatusOnEnded)
router.get('/request/:id',DealsController.getRequestedBarterInit)
router.get('/active/:id',DealsController.getActiveBarterInit)
router.get('/ended/:id',DealsController.getEndedBarterInit)
router.get('/request/op/:id',DealsController.getRequestedBarterOpponent)
router.get('/active/op/:id',DealsController.getActiveBarterOpponent)
router.get('/ended/op/:id',DealsController.getEndedBarterOpponent)



module.exports = router;