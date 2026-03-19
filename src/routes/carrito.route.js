import express from 'express';
import {
  crearCarrito,
  getCarrito,
  agregarProducto,
  actualizarProducto,
  eliminarProducto,
  limpiarCarrito,
  finalizarCompra
} from '../controller/carrito.controller.js';

const router = express.Router();

// Rutas para carrito
router.post('/', crearCarrito);                                    // Crear carrito
router.get('/:usuarioId', getCarrito);                             // Obtener carrito
router.post('/:carritoId/productos', agregarProducto);             // Agregar producto
router.put('/:carritoId/productos/:productoId', actualizarProducto); // Actualizar cantidad
router.delete('/:carritoId/productos/:productoId', eliminarProducto); // Eliminar producto
router.delete('/:carritoId', limpiarCarrito);                      // Limpiar carrito
router.put('/:carritoId/finalizar', finalizarCompra);              // Finalizar compra

export default router;