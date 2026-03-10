import express from 'express'
import {actuliazarProducto, creaProducto, deleteProducto, getProducto} from '../controller/producto.controller.js'

const router = express.Router();

router.post('/',creaProducto);
router.get('/',getProducto);
router.delete('/:idProducto',deleteProducto);
router.patch('/:idProducto',actuliazarProducto);


export default router;