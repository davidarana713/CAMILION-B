import express from 'express'
import {actuliazarRegistro, creaRegistro, deleteRegistro, getRegistro} from '../controller/resgitro.controller.js'

const router = express.Router();

router.post('/',creaRegistro);
router.get('/',getRegistro);
router.delete('/:idRegistro',deleteRegistro);
router.patch('/:idRegistro',actuliazarRegistro);


export default router;