const userServices = require('../services/userService')

const getAllUsers = async(req,res)=>{
    const allUsers= await userServices.getAllUsers();

    if(allUsers){
        res.status(200).send({status:'OK',data:allUsers})
    }else{
        res.status(400).send({status:'FAILE',data:null})
    }
}

const getUser = async(req,res)=>{
    let id = req.params.userId;
    try {
        const user =await userServices.getUser(id)
        res.status(200).send({status:"OK",data: user})
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED", data: error.message})
    }
}


const createUser= async(req,res)=>{
    //name,email.phone,password
    const {body} = req
    try {
        const createUser = await userServices.createUser(body.name,body.email,body.phone,body.password)
        if(createUser){
            res.status(200).send({status:'OK',data:createUser})
        }else{
            res.status(400).send({status:'FAILED',data:null})
        }
    } catch (error) {
        res.status(error.status || 500).send({status:"FAILED", data: error.message})
    }
    
}

const updateUser = async(req,res)=>{
    const id = req.params.userId
    const {name,email,phone,password} = req.body
    const update = await userServices.updateUser(id,name,email,phone,password)
    if(update){
        res.status(200).send({status:'OK',data:update})
    }else{
        res.status(400).send({status:'FAILED',data:null})
    }
}

const deleteUser = async(req,res)=>{
    const id = req.params.userId
    const deleteUser = await userServices.deleteUser(id)
    if(deleteUser){
        res.status(200).send({status:'OK',data:deleteUser})
    }else{
        res.status(200).send({status:'FAILED',data:null})
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}