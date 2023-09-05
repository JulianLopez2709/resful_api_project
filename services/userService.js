const db=require('../models')

const getAllUsers= async()=>{
    try {
        let users = await db.User.findAll()
        return users
    } catch (error) {
        return error.message || 'Failed to get users'
    }
}


const getUser= async(id)=>{
    try {
        let user = await db.User.findByPk(id)
        return user
    } catch (error) {
        throw {status: 500, message: error.message || "Failed to get user"}
    }
}

const createUser = async(name,email,phone,password)=>{
    try {
        if(name === "" || email === "" || phone == "" || password == ""){
            return false
        }else{
            return await db.User.create({name,email,phone,password})
        }
    } catch (error) {
        throw {status: 500, message: error.message || "User could not be created"}
    }
}

const updateUser = async(id,name,email,phone,password)=>{
    try {
        let user = await db.User.update({name,email,phone,password},{where:{id}})
        return user
    } catch (error) {
        return error.message || 'Failed to get user'
        
    }
}

const deleteUser = async(id)=>{
    try {
        let userDelete = await db.User.destroy({where:{id}})
        return userDelete
    } catch (error) {
        return 'Failed to get user'

    }
}

module.exports= {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}