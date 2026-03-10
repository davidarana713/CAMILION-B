import { Schema, model } from "mongoose";

const registroSchema = new Schema ({
    nombre:{
        type:String,
        required:true
    },
    correo:{
        type:String,
        required:true
    },
    telefono:{
      type:Number,
      require:true
    },
    edad:{
        type:Number,
        required:true
    },
    pin:{
        type:Number,
        required:true,
        minlength:5

    },
    confirmapin:{
        type:Number,
        required:true,
        minlength:5
    },
    rol:{
        type:String,
        required:true,
        enum:["administrador","ayudante","usuario"],
        default:"usuario"
    }

},
{timestamps:true}); //el {timestamps:true} sirve para que se cree un campo donde se vea la hora y fecha de creado o actualizacion

const registroModel = model (
    'registro',
    registroSchema
);
export default registroModel;