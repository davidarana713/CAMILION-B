import productoModel from "../model/producto.model.js";

const dbregistroProducto = async (newProducto) => {
    return await productoModel.create(newProducto);
}

const dbgetProducto = async () => {
    return await productoModel.find().populate(['categoria']);
}

const dbdeleteProductoPorId = async (_id) =>{
    return await productoModel.findOneAndDelete({_id});
}

const dbactualizarProductoPorId = async (_id,inputData) => {

    return await productoModel.findByIdAndUpdate(
        _id,
        inputData,
        {new: true}
    );
}

export {
    dbregistroProducto,
    dbgetProducto,
    dbdeleteProductoPorId,
    dbactualizarProductoPorId
}