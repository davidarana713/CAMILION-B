import { Schema, model } from "mongoose";

const ofertaSchema = new Schema ({
    id:{
        type:Number,
        required:true
    },
    descuento:{
        type:Number,
        required:true,
        enum:[10,20,30,40,50,60,70,80,90],
        default:10
    }

},
{timestamps:true});

const ofertaModel = model (
    'oferta',
    ofertaSchema
);
export default ofertaModel;