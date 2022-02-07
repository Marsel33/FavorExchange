const router = require('express').Router()
const TagsController = require('../controllers/tagsController')

router.post('/:id', TagsController.createTag)
router.get('/:id', TagsController.getAllTags)
router.get('/', TagsController.getCategories)

router.delete('/:id', TagsController.deleteTag)
router.put('/:id', TagsController.updateTag)
module.exports = router

