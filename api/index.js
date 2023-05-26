const express = require('express');
const {userRouter} = require('./src/routes')
const app = express();


app.use(express.json()); // parse la donnée en .json reçus de l'APi (la req)

const APIRouter = express.Router();

APIRouter.get('/version', function(req, res){
    const {version} = require('./package.json') // NORME récupère la version
    return res.json({version}) // la renvoie en format json  Les standard de version : coorection des bug dernier chiffre / deuxieme chiffre ajouts d'une nouvelle feature / premier chiffres breaking change 
})

APIRouter.use('/users', userRouter);


app.use('/api',APIRouter);



app.listen(8080, function(){
    console.log('API is running on 8080')
}) // app écoute sur le port 8080