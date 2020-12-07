
import dbSql from './dbSql.js'

//import db from './config/db.js';
//conectar base de datos mysql
// db.authenticate()
//     .then(()=>console.log('base de datos coenctada'))
//     .catch(error => console.log(error))

export default function crearTablas(){
    try 
    {
        dbSql.authenticate();
        dbSql.sync();
        
        console.log('Conexion a base de datos exitosa');
    
        //https://github.com/typeorm/typeorm/issues/2133
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

