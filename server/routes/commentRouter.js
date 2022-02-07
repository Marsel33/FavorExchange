const router = require('express').Router()
const CommentController = require('../controllers/commentController')
router.post('/', CommentController.createComment)

module.exports = router