import express from 'express'
import {actuliazarRegistro, creaRegistro, deleteRegistro, getRegistro, getRegistroPorID} from '../controller/resgitro.controller.js'

const router = express.Router();

router.post('/',creaRegistro);
router.get('/',getRegistro);
router.get('/:id', getRegistroPorID);
router.delete('/:idRegistro',deleteRegistro);
router.patch('/:idRegistro',actuliazarRegistro);


export default router;