const db = require('../models')

const getAllCategories = async()=>{
    try {
        let getAllCategory = await db.Category.findAll()
        return getAllCategory
    } catch (error) {
        throw{status:500,message: error.message || 'Failed to get categories'}
    }
}   

const getCategory = async(id)=>{
    try {
        let getCategory = await db.Category.findByPk(id)
        return getCategory
    } catch (error) {
        throw{status: 500, message:error.message || 'Failed to get Category'}
    }
}

const updateCategory = async(id,name)=>{
    try {
        let updateCategory = await db.Category.update({name},{where:{id}})
        return updateCategory
    } catch (error) {
        throw{status:500,message:error.message || 'Failed to update Category'}
    }
}


const createCategory = async(name)=>{
    try {
        const newCategory =  await db.Category.create({name});
        return newCategory
    } catch (error) {
        throw{status:500,message:error.message || 'Failed create category'}
    }
}

const deleteCategory= async(id)=>{
try {
    let deleteCategory = await db.Category.destroy({where:{id}})
    return deleteCategory
} catch (error) {
    throw{status:500,message:error.message|| 'Failed delete category'}
}
}


module.exports= {
    getAllCategories,
    getCategory,
    updateCategory,
    createCategory,
    deleteCategory
}