import { dbregistroCategoria,dbgetCategoria, dbdeleteCategoriaPorId, dbactualizarCategoriaPorId } from "../services/categoria.service.js"

const creaCategoria = async (req, res) => {

    try {
        const data = req.body;

        console.log(data);

        const dataRegister = await dbregistroCategoria(data);
        res.json({
            msg: 'Categoria Creada',
            dataRegister
        });
    }

    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error no se puede crear la categoria'
        });

    };
}

const getCategoria = async (req, res) => {
    try{
        const categoria = await dbgetCategoria();
        res.json({
            msg:'obtiene las categorias',
            categoria
        });
    }
    catch (error) {
        console.error(error);
        res.json({
            msg:'Error no se pudo obtener las categorias'
        });
    }

}

const deleteCategoria = async (req, res) => {
    try{
        const idCategoria = req.params.idCategoria;

        const categoriaDelet = await 
        dbdeleteCategoriaPorId (idCategoria);

        res.json({
            categoriaDelet
        });
    }
    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error no se pudo eliminar la categoria'
        });
    }
}

const actuliazarCategoria = async (req, res) => {

   try{
    const inputData = req.body;
    const idCategoria = req.params.idCategoria;

    const categoriaUpdate = await dbactualizarCategoriaPorId(idCategoria,inputData);

    res.json(
        categoriaUpdate
    );

   }
   catch (error){
    console.error(error);
    res.json({
        msg:'Error no se pudo actualizar la categoria por id'
    })
   }

};

export {
    creaCategoria,
    getCategoria,
    deleteCategoria,
    actuliazarCategoria
}