import Sequalize from 'sequelize';
import dbSql from '../config/dbSql.js';


export const Viaje = dbSql.define('Viaje',{
    titulo:{
        type : Sequalize.STRING
    },
    precio:{
        type : Sequalize.STRING
    },
    fecha_ida:{
        type : Sequalize.STRING
    },
    fecha_vuelta:{
        type : Sequalize.STRING
    },
    imagen:{
        type : Sequalize.STRING
    },
    descripcion:{
        type : Sequalize.STRING
    },
    disponibles:{
        type : Sequalize.STRING
    },
    slug:{
        type : Sequalize.STRING
    }

},{
    freezeTableName: true
})

export const Testimonial = dbSql.define('Testimonial',
{
    nombre:{
        type : Sequalize.STRING
    },
    correo:{
        type : Sequalize.STRING
    },
    mensaje:{
        type : Sequalize.STRING
    }
},{
    freezeTableName: true
});