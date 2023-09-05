const db = require('../models')

const getAllArticles = async()=>{
    try {
        let articles = await db.Article.findAll({
            include:{
                model: db.User,
                require: true,
                as:'User',
                attributes:["id","name","email"],
            },
        })
        return articles
    } catch (error) {
        throw{status: 500,message: error.message || 'Failed to get Articles'}
    }
}

const getArticle = async(id)=>{
    try {
        let getArticle = await db.Article.findByPk(id)
        return getArticle
    } catch (error) {
        throw{status:500,message:error.message || 'Failed to get Article'}
    }
}
const updateArticle = async(id,title,content,UserId)=>{
    try {
        let article = await db.Article.update({title,content,UserId},{where:{id}})
        return article
    } catch (error) {
        throw{status:500,message:error.message || 'Failed to update Article'}
    }
}

const createArticle = async(title,content,UserId)=>{
    try {
        await db.Article.create({title,content,UserId})
    } catch (error) {
        throw {status : 500, message: error.message}
    }
}

const deleteArticle = async(id)=>{
    try {
        let articleDelete = await db.Article.destroy({where:{id}})
        return articleDelete
    } catch (error) {
        throw {status:500,message: error.message}
    }
}

module.exports = {
    getAllArticles,
    getArticle,
    updateArticle,
    createArticle,
    deleteArticle
}