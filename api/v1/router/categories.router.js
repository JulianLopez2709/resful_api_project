const {Router}=require('express')
const categoryController =   require('../../../controllers/categoryContoller')
const router = Router()

router.get('/',categoryController.getAllCategories)
router.get('/:categoryId',categoryController.getCategory)
router.post('/',categoryController.createCategory)
router.put('/:categoryId',categoryController.updateCategory)
router.delete('/:categoryId',categoryController.deleteCategory)

module.exports = router