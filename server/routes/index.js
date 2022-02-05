const router = require('express').Router()

const indexRouter = require('./indexRouter')
const userRouter = require('./userRouter')
const myProfilRouter = require('./myProfilRouter')
const portfolioRouter = require('./portfolioRouter')



router.use('/', indexRouter)
router.use('/user', userRouter)
router.use('/portfolio',portfolioRouter)
router.use('/myprofile',myProfilRouter)


module.exports = router
