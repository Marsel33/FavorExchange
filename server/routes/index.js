const router = require('express').Router()

const indexRouter = require('./indexRouter')
const userRouter = require('./userRouter')
const myProfilRouter = require('./myProfilRouter')



router.use('/', indexRouter)
router.use('/user', userRouter)
// router.use('/myprofile', myProfilRouter)
//lalalalala
//spspps



module.exports = router
