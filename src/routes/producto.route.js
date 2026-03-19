import express from 'express'
import {actuliazarProducto, creaProducto, deleteProducto, getProducto, actualizarStockMultiple} from '../controller/producto.controller.js'

const router = express.Router();

router.post('/',creaProducto);
router.get('/',getProducto);
router.post('/actualizar-stock-multiple', actualizarStockMultiple); // Nueva ruta (ANTES de :idProducto)
router.delete('/:idProducto',deleteProducto);
router.patch('/:idProducto',actuliazarProducto);

export default router;