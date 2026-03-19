import { dbactualizarProductoPorId, dbdeleteProductoPorId, dbgetProducto, dbregistroProducto, dbactualizarStockMultiple } from "../services/producto.service.js";

const creaProducto = async (req, res) => {

    try {
        const data = req.body;

        console.log(data);

        const dataRegister = await dbregistroProducto(data);
        res.json({
            msg: 'Producto Creado',
            dataRegister
        });
    }

    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error no se puede crear el producto'
        });

    };
}

const getProducto = async (req, res) => {
    try{
        const producto = await dbgetProducto();
        res.json({
            msg:'obtiene los productos',
            producto
        });
    }
    catch (error) {
        console.error(error);
        res.json({
            msg:'Error no se pudo obtener los productos'
        });
    }

}

const deleteProducto = async (req, res) => {
    try{
        const idProducto = req.params.idProducto;

        const productoDelet = await 
        dbdeleteProductoPorId (idProducto);

        res.json({
            productoDelet
        });
    }
    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error no se pudo eliminar el producto'
        });
    }
}

const actuliazarProducto = async (req, res) => {

   try{
    const inputData = req.body;
    const idProducto = req.params.idProducto;

    const productoUpdate = await dbactualizarProductoPorId
    (idProducto,inputData);

    res.json(
        inputData,
        productoUpdate
    );

   }
   
   catch (error){
    console.error(error);
    res.json({
        msg:'Error no se pudo actualizar el producto por id'
    })
   }

};

// Nuevo controlador: Actualizar stock de múltiples productos
const actualizarStockMultiple = async (req, res) => {
    try {
        const { productos } = req.body;

        // Validar que se recibieron productos
        if (!productos || !Array.isArray(productos) || productos.length === 0) {
            return res.status(400).json({
                msg: 'Error: Debes enviar un array de productos',
                success: false
            });
        }

        // Actualizar el stock de todos los productos
        const resultados = await dbactualizarStockMultiple(productos);

        // Verificar si alguna actualización falló
        const fallos = resultados.filter(r => !r.success);
        
        if (fallos.length > 0) {
            return res.status(400).json({
                msg: 'Algunas actualizaciones fallaron',
                resultados,
                success: false
            });
        }

        res.json({
            msg: 'Stock de todos los productos actualizado correctamente',
            resultados,
            success: true
        });
    } catch (error) {
        console.error('Error en actualizarStockMultiple:', error);
        res.status(500).json({
            msg: 'Error al actualizar el stock de los productos',
            error: error.message,
            success: false
        });
    }
};

export {
    creaProducto,
    getProducto,
    deleteProducto,
    actuliazarProducto,
    actualizarStockMultiple
}