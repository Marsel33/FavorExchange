const router = require('express').Router();
const UserController = require('../controllers/userController')

router.post('/check',UserController.check)
router.post('/signup',UserController.signup)
router.post('/signin',UserController.signin)
router.post('/logout', (req,res)=>{
  req.session.destroy()
  res.clearCookie('sid').sendStatus(200)
})




module.exports = router;


