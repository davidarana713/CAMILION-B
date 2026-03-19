import productoModel from "../model/producto.model.js";

const dbregistroProducto = async (newProducto) => {
    return await productoModel.create(newProducto);
}

const dbgetProducto = async () => {
    return await productoModel.find();
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

// Nuevo método: Actualizar stock de múltiples productos
const dbactualizarStockMultiple = async (productos) => {
    try {
        const resultados = [];

        for (const item of productos) {
            const { productoId, cantidad } = item;

            // Obtener el producto actual para restar el stock
            const producto = await productoModel.findById(productoId);

            if (!producto) {
                resultados.push({
                    productoId,
                    error: 'Producto no encontrado',
                    success: false
                });
                continue;
            }

            // Calcular el nuevo stock
            const nuevoStock = producto.stock - cantidad;

            if (nuevoStock < 0) {
                resultados.push({
                    productoId,
                    error: `Stock insuficiente. Stock disponible: ${producto.stock}`,
                    success: false
                });
                continue;
            }

            // Actualizar el stock del producto
            const productoActualizado = await productoModel.findByIdAndUpdate(
                productoId,
                { stock: nuevoStock },
                { new: true }
            );

            resultados.push({
                productoId,
                nombre: productoActualizado.nombre,
                stockAnterior: producto.stock,
                stockNuevo: nuevoStock,
                success: true
            });
        }

        return resultados;
    } catch (error) {
        console.error('Error en dbactualizarStockMultiple:', error);
        throw error;
    }
}

export {
    dbregistroProducto,
    dbgetProducto,
    dbdeleteProductoPorId,
    dbactualizarProductoPorId,
    dbactualizarStockMultiple
}