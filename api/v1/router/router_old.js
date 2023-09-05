const db = require('../../../models')
const {Router} = require('express')
const router = new Router()

router.get('/',(req, res)=>{
    console.log("get ruta principal")
    res.send({title:'Saludos ADSO'})
})

router.post('/new',async(req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let password = req.body.password;
    try{
        await db.User.create(
            {
                name,
                email,
                phone,
                password
            }
        )
        res.status(200).send({status:'OK',menssage:'User created!'})
    }catch(error){
        res.status(400).send('User could not be created!')
    }
})

//Ruta o endPoint para traer todos los usuarios
router.get('/all',async(req,res)=>{
    try {
        let users = await db.User.findAll();
        res.status(200).send({status:'OK',menssage:'Users listed!',data:users})
    } catch (error) {
        res.status(400).send({status:'FAIL',menssage:'Users error!',data:null})
    }
})

router.get('/:id',async(req,res)=>{
    try {
        let id = req.params.id
        let user = await db.User.findByPk(id)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send({status:'FAIL',menssage:'Error'})
    }
})

router.put('/:id', async(req,res)=>{
    try {
        let id = req.params.id
        let {name,email,password,phone} = req.body
        await db.User.update(
                {
                name,
                email,
                phone,
                password
                },
                {
                    where:{
                        id,
                    }
                }
            )
        res.status(200).send('User edit sucess')
    } catch (error) {
        res.status(400).send({status:'FAIL',menssage:'Error'})
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try {
        let id = req.params.id
        await db.User.destroy({where:{id}})
        res.status(200).send('User delete sucess')

    } catch (error) {
        res.status(400).send({status:'FAIL',menssage:'Error'})
        
    }
})

module.exports = router