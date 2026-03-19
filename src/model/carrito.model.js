import { Schema, model } from 'mongoose';

const carritoSchema = new Schema({
    nombre:{
        type: Schema.Types.ObjectId,
        ref:"Usuario",
        required:true
    },
    productos:[
        {
            productoId:{
                type: Schema.Types.ObjectId,
                ref:"Producto",
                required:true
            },
            cantidad:{
                type: Number,
                required:true,
                default:1
            }
        }
    ],
    estado:{
        type: String,
        enum:["activo","completado","cancelado"],
        default:"activo"
    }
},
{timestamps:true});

const carritoModel = model( "Carrito", carritoSchema);
export default carritoModel;