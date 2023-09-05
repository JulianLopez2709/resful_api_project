const express = require('express')
const app = express()// intencia 
const bodyParser = require('body-parser')
const morgan = require('morgan')//informacion de la peticiones

app.get('/api/v1/users',(req,res)=>{
    res.send('HELLO ADSO!!')
})
app.get('/',(req,res)=>{
    res.send('HELLO MAIN ADSO!!')
})
//Validamos que noestemos en ambiente de production
if(process.env.NODE_ENV != 'production'){

    //Se carga la configuración archivo .env al process.env
    require('dotenv').config()
}

app.set('port',process.env.PORT || 4000)

//Middlewares 
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(morgan('dev'))

/*app.get('/',(req,res)=>{
    console.log('Ruta ppal')
    res.send({title:'Ruta Principal56', message:'Acceso a la ruta ppal'})
})*/

app.use('/api/v1/users',require('./api/v1/router/users.router'))//endPoint 
app.use('/api/v1/articles',require('./api/v1/router/articles.router'))
app.use('/api/v1/categories',require('./api/v1/router/categories.router'))


app.listen(app.get('port'),()=>{ // correr el servidor
    console.log(`Server running on localhost:${app.get('port')}`)
})