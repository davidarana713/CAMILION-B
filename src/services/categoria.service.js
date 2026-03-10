import categoriaModel from '../model/categoria.model.js'

const dbregistroCategoria = async (newCategoria) => {
    return await categoriaModel.create(newCategoria);
}

const dbgetCategoria = async () => {
    return await categoriaModel.find();
}

const dbdeleteCategoriaPorId = async (_id) =>{
    return await categoriaModel.findOneAndDelete({_id});
}

const dbactualizarCategoriaPorId = async (_id,inputData) => {

    // return await categoriaModel.findByIdAndUpdate(
    //     _id,
    //     inputData,
    //     {new: true}
    // );

    return await categoriaModel.findOneAndUpdate(
        { _id },
        inputData,
        {new: true}
    );
}

export {
    dbregistroCategoria,
    dbgetCategoria,
    dbdeleteCategoriaPorId,
    dbactualizarCategoriaPorId
}