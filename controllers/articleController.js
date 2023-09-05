const articleServices = require('../services/articleServices')

const getAllArticles = async(req,res)=>{
    const allArticles = await articleServices.getAllArticles()
    if(allArticles){
        res.status(200).send({status:'OK',data:allArticles})
    }else{
        res.status(400).send({status:'FAILED',data:null})
    }
}

const getArticle = async(req,res)=>{
    const id = req.params.articleId
    try {
        const article = await articleServices.getArticle(id)
        res.status(200).send({status:'OK',data:article})
    } catch (error) {
        res.status(error.status || 500).send({status:'FAILED',data:error.message})
    }
}
const updateArticle = async(req,res)=>{
    const id = req.params.articleId
    try {
        const {title,content,UserId} = req.body
        const update = await articleServices.updateArticle(id,title,content,UserId)
        res.status(200).send({status:'OK',data:update})
    } catch (error) {
        res.status(error.status || 500).send({status:'FAILED',data:error.message})
    }
}

const createArticle  = async(req,res)=>{
    try {
        const {title,content,UserId} = req.body
        const createArticle = await articleServices.createArticle(title,content,UserId)
        res.status(201).send({status:'OK', data:createArticle})
    } catch (error) {
        res.status(error.status || 500).send({status: 'FAILED', data:error.message})
    }
}

const deleteArticle =  async(req,res)=>{
    const id = req.params.articleId
    try {
        const deleteArticle = await articleServices.deleteArticle(id)
        res.status(200).send({status:'OK',data:deleteArticle})
    } catch (error) {
        res.status(error.status || 500).send({status: 'FAILED', data:error.message})
    }
}

module.exports = {
    getAllArticles,
    getArticle,
    updateArticle,
    createArticle,
    deleteArticle
}