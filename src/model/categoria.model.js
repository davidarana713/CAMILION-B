import { Schema, model } from "mongoose";

const categoriaSchema = new Schema ({
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    activa:{
      type:Boolean,
      default: true
    }

},
{timestamps:true}); //el {timestamps:true} sirve para que se cree un campo donde se vea la hora y fecha de creado o actualizacion

const categoriaModel = model (
    'categoria',
    categoriaSchema
);
export default categoriaModel;