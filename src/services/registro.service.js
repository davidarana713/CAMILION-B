import registroModel from '../model/registro.model.js'

const dbregistroRegistro = async (newRegistro) => {
    return await registroModel.create(newRegistro);
}

const dbgetRegistro = async () => {
    return await registroModel.find();
}

const dbdeleteRegistroPorId = async (_id) =>{
    return await registroModel.findOneAndDelete({_id});
}

const dbactualizarRegistroPorId = async (_id,inputData) => {

    return await registroModel.findOneAndUpdate(
    { _id },
    inputData,
    { returnDocument: "after" }
    );
}

export {
    dbregistroRegistro,
    dbgetRegistro,
    dbdeleteRegistroPorId,
    dbactualizarRegistroPorId
}