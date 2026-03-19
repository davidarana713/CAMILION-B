import { Schema, model } from "mongoose";

const productoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'categoria',
        // required: true,

    },
    talla: {
        type: String,
        // required: true,
        enum: ["S", "M", "L", "XL", "XXL", "NO APLICA"]
    },
    stock: {
        type: Number,
        required: true,
    },
    img: {
        type: String
    },
    descuento: {
        type: Number,
        default: 0
    }

},
    { timestamps: true }); //el {timestamps:true} sirve para que se cree un campo donde se vea la hora y fecha de creado o actualizacion

const productoModel = model(
    'producto',
    productoSchema
);
export default productoModel;