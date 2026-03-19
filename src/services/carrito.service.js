import carritoModel from "../model/carrito.model.js";

const dbcrearCarrito = async (nuevoCarrito) => {
    return await carritoModel.create(nuevoCarrito);
}

const dbGetCarrito = async (usuarioId) => {
    return await carritoModel.find({
        nombre: usuarioId,
        estado: "activo"
    }).populate("productos.productoId");
}

const dbAgregarProducto = async (carritoId, producto) => {
    return await carritoModel.findByIdAndUpdate(
        carritoId,
        { $push: { productos: producto } },
        { new: true }
    ).populate("productos.productoId");
}

const dbActualizarCarrito = async (carritoId, productoId, cantidad) => {
    return await carritoModel.findOneAndUpdate(
        { _id: carritoId, "productos.productoId": productoId },
        { $set: { "productos.$.cantidad": cantidad } },
        { new: true }
    ).populate("productos.productoId");
}

// Eliminar un producto específico del carrito
const dbEliminarProducto = async (carritoId, productoId) => {
    return await carritoModel.findByIdAndUpdate(
        carritoId,
        {
            $pull: {
                productos: { productoId: productoId }
            }
        },
        { new: true }
    ).populate("productos.productoId");
};

// Limpiar todos los productos del carrito (vaciar carrito)
const dbLimpiarCarrito = async (carritoId) => {
    return await carritoModel.findByIdAndUpdate(
        carritoId,
        { productos: [] },
        { new: true }
    ).populate("productos.productoId");
};

// Finalizar compra (cambiar estado a completado)
const dbFinalizarCompra = async (carritoId) => {
    return await carritoModel.findByIdAndUpdate(
        carritoId,
        { 
            estado: "completado",
            productos: []
        },
        { new: true }
    ).populate("productos.productoId");
};

// Función anterior (se mantiene por compatibilidad, pero corregida)
const dbDeleteCarritoPorId = async (carritoId, productoId) => {
    return await dbEliminarProducto(carritoId, productoId);
};

export {
    dbcrearCarrito,
    dbGetCarrito,
    dbAgregarProducto,
    dbActualizarCarrito,
    dbDeleteCarritoPorId,
    dbEliminarProducto,
    dbLimpiarCarrito,
    dbFinalizarCompra
}