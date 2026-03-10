import express from 'express'
import {actuliazarCategoria, creaCategoria, deleteCategoria, getCategoria} from "../controller/categoria.controller.js"

const router = express.Router();

router.post('/',creaCategoria);
router.get('/',getCategoria);
router.delete('/:idCategoria',deleteCategoria);
router.patch('/:idCategoria',actuliazarCategoria);


export default router;