const router = require('express').Router()
const PortfolioController = require('../controllers/portfolioController')
router.get('/:id',PortfolioController.getPortfolio)
router.post('/:id',PortfolioController.createPortfolio)

module.exports = router

