//const express = require('express');
import express from 'express'
import router from './routes/index.js';
import crearTablas from './config/migrationTable.js';
import dotenv from 'dotenv'

dotenv.config({path: 'variables.env'})


crearTablas();
 
const app = express();

//definir la carpeta publica
app.use(express.static('public'))


//Obtener el año actual
app.use((req, resp, next)=>{
    
    const year = new Date();
    
    resp.locals.actualYear = year.getFullYear();//locals sirven para declarar variables 
    resp.locals.nombreSitio = "Agencia de viajes | ";

    next(); //pasa al sig middlware
})

//Agregar bodyparse para leer datos de formulario

app.use(express.urlencoded({extended:true}));

//habilitar pug
app.set('view engine','pug');

//agrega routes
app.use('/',router);


const host = process.env.HOST || '0.0.0.0';
const port1 = process.env.PORT || 4000;

app.listen(port1, host);


//middleware