import { 
    dbActualizarCarrito,
    dbAgregarProducto,
    dbDeleteCarritoPorId,
    dbGetCarrito,
    dbcrearCarrito,
    dbEliminarProducto,
    dbLimpiarCarrito,
    dbFinalizarCompra
} from "../services/carrito.service.js";


const crearCarrito = async (req, res) => {
    try {
        const nuevoCarrito = req.body;
        const carritoCreado = await dbcrearCarrito(nuevoCarrito);
        res.status(201).json(carritoCreado);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el carrito" });
    }
}

const getCarrito = async (req, res) => {
    try {
        const usuarioId = req.params.usuarioId;
        const carrito = await dbGetCarrito(usuarioId);
        res.json(carrito);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el carrito" });
    }
}

const agregarProducto = async (req, res) => {
    try {
        const carritoId = req.params.carritoId;
        const producto = req.body;

        const productoAgregado = await dbAgregarProducto(carritoId, producto);
        res.json(productoAgregado);
    } catch (error) {
        res.status(500).json({ error: "Error al agregar el producto al carrito" });
    }
}

const actualizarProducto = async (req, res) => {
    try {
        const carritoId = req.params.carritoId;
        const productoId = req.params.productoId;
        const { cantidad } = req.body;

        const productoActualizado = await dbActualizarCarrito(carritoId, productoId, cantidad);
        res.json(productoActualizado);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el producto en el carrito" });
    }
}

const eliminarProducto = async (req, res) => {
    try {
        const carritoId = req.params.carritoId;
        const productoId = req.params.productoId;

        const carritoActualizado = await dbEliminarProducto(carritoId, productoId);
        res.json(carritoActualizado);
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el producto del carrito" });
    }
}

const limpiarCarrito = async (req, res) => {
    try {
        const carritoId = req.params.carritoId;

        const carritoLimpiado = await dbLimpiarCarrito(carritoId);
        res.json({ mensaje: "Carrito vaciado correctamente", carrito: carritoLimpiado });
    } catch (error) {
        res.status(500).json({ error: "Error al limpiar el carrito" });
    }
}

const finalizarCompra = async (req, res) => {
    try {
        const carritoId = req.params.carritoId;

        const carritoFinalizado = await dbFinalizarCompra(carritoId);
        res.json({ mensaje: "Compra finalizada correctamente", carrito: carritoFinalizado });
    } catch (error) {
        res.status(500).json({ error: "Error al finalizar la compra" });
    }
}

export { crearCarrito, getCarrito, agregarProducto, actualizarProducto, eliminarProducto, limpiarCarrito, finalizarCompra };
