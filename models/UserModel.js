import db from "../database/db.js";

import { DataTypes } from "sequelize";

const UserModel = db.define('inscriptos',{
    dni:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING},
    cuil:{type:DataTypes.STRING},
    nombres:{type:DataTypes.STRING},
    apellido:{type:DataTypes.STRING},
    genero:{type:DataTypes.STRING},
    estadoCivil:{type:DataTypes.STRING},
    fechaDeNacimiento:{type:DataTypes.STRING},
    argentinoNativo:{type:DataTypes.STRING},
    provinciaNacimiento:{type:DataTypes.STRING},
    lugarDeNacimiento:{type:DataTypes.STRING},
    apellidoNombreMadre:{type:DataTypes.STRING},
    apellidoNombrePadre:{type:DataTypes.STRING},
    resideProvincia:{type:DataTypes.STRING},
    localidad:{type:DataTypes.STRING},
    noResideProvincia:{type:DataTypes.STRING},
    departamento:{type:DataTypes.STRING},
    domicilio:{type:DataTypes.STRING},
    telefono_1:{type:DataTypes.STRING},
    telefono_2:{type:DataTypes.STRING},
    comisaria:{type:DataTypes.STRING},
    nivelEstudio:{type:DataTypes.STRING},
    tituloSecundario:{type:DataTypes.STRING},
    fechaTituloSecundario:{type:DataTypes.STRING},
    tituloSuperior:{type:DataTypes.STRING},
    fechaTituloSuperior:{type:DataTypes.STRING},
    pregunta1:{type:DataTypes.STRING},
    pregunta2:{type:DataTypes.STRING},
    pregunta3:{type:DataTypes.STRING},
    pregunta4:{type:DataTypes.STRING},
    
})

export default UserModel