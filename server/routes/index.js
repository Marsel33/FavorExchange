const router = require('express').Router()

const indexRouter = require('./indexRouter')
const userRouter = require('./userRouter')
const myProfilRouter = require('./myProfilRouter')
const portfolioRouter = require('./portfolioRouter')
const dealsRouter = require('./dealsRouter')
const tagsRouter = require('./tagsRouter')
const commenRouter = require('./commentRouter')
const findRouter = require('./findRouter')

router.use('/', indexRouter)
router.use('/user', userRouter)
router.use('/portfolio', portfolioRouter)
router.use('/myprofile', myProfilRouter)
router.use('/deals', dealsRouter)
router.use('/tags', tagsRouter)
router.use('/comment', commenRouter)
router.use('/find', findRouter)

module.exports = router
