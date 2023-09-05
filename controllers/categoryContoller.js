const categoryServices = require('../services/categoryServices')

const getAllCategories = async(req,res)=>{
    const allCategories = await categoryServices.getAllCategories()
    if(allCategories){
        res.status(200).send({status:'OK',data:allCategories})
    }else{
        res.status(400).send({status:'FAILED',data:null})
    }
}

const getCategory = async(req,res)=>{
    const id = req.params.categoryId
    try{
        const category = await categoryServices.getCategory(id)
        res.status(200).send({status:'OK',data:category})
    }catch(error){
        res.status(error.status || 500 ).send({status:'FAILED',data:error.message})
    }
}

const createCategory = async(req,res)=>{
    try {
        const {name} = req.body
        const createCategory = categoryServices.createCategory(name)
        res.status(201).send({status:'OK', data:createCategory})
    } catch (error) {
        res.status(error.status || 500 ).send({status: 'FAILED', data:error.message})
    }
}
 
const updateCategory = async(req,res)=>{
    const id = req.params.categoryId
    try{
        const {name} = req.body
        const update = categoryServices.updateCategory(id,name)
        res.status(200).send({status:'OK',data:update}) 
    }catch(error){
        res.status(error.status || 500).send({status:'FAILED',data:error.message})
    }
}

const deleteCategory = async(req,res)=>{
    const id = req.params.categoryId
    try {
        const deleteCategory = categoryServices.deleteCategory(id)
        res.status(200).send({status:'OK',data:deleteCategory})
    } catch (error) {
        res.status(error.status || 500).send({status:'FAILED', data:error.message})
    }
}


module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}


