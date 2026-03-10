import { dbactualizarProductoPorId, dbdeleteProductoPorId, dbgetProducto, dbregistroProducto } from "../services/producto.service.js";

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

export {
    creaProducto,
    getProducto,
    deleteProducto,
    actuliazarProducto
}