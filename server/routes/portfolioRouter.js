const router = require('express').Router()
const PortfolioController = require('../controllers/portfolioController')
router.get('/:id', PortfolioController.getAllPortfolio)
router.post('/:id', PortfolioController.createPortfolio)

module.exports = router

