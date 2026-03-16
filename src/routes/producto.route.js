import express from 'express'
import {actuliazarProducto, creaProducto, deleteProducto, getProducto, getProductoPorId} from '../controller/producto.controller.js'

const router = express.Router();

router.post('/',creaProducto);
router.get('/',getProducto);
router.get('/:id', getProductoPorId);
router.delete('/:idProducto',deleteProducto);
router.patch('/:idProducto',actuliazarProducto);


export default router;