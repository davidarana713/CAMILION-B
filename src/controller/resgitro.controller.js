import {dbactualizarRegistroPorId, dbdeleteRegistroPorId, dbgetRegistro, dbregistroRegistro } from "../services/registro.service.js"

const creaRegistro = async (req, res) => {

    try {
        const data = req.body;

        console.log(data);

        const dataRegister = await dbregistroRegistro(data);
        res.json({
            msg: 'Registro el Usuario',
            dataRegister
        });
    }

    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error no se puede crear el usuario'
        });

    };
}

const getRegistro = async (req, res) => {
    try{
        const registro = await dbgetRegistro();
        res.json({
            msg:'obtiene los usuarios',
            registro
        });
    }
    catch (error) {
        console.error(error);
        res.json({
            msg:'Error no se pudo obtener los usuarios'
        });
    }

}

const deleteRegistro = async (req, res) => {
    try{
        const idRegistro = req.params.idRegistro;

        const registroDelet = await 
        dbdeleteRegistroPorId (idRegistro);

        res.json({
            registroDelet
        });
    }
    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error no se pudo eliminar el usuario'
        });
    }
}

const actuliazarRegistro = async (req, res) => {

   try{
    const inputData = req.body;
    const idRegistro = req.params.idRegistro;

    const RegistroUpdate = await dbactualizarRegistroPorId
    (idRegistro,inputData);

    res.json(
        inputData,
        RegistroUpdate
    );

   }
   
   catch (error){
    console.error(error);
    res.json({
        msg:'Error no se pudo actualizar el usuario por id'
    })
   }

};

export {
    creaRegistro,
    getRegistro,
    deleteRegistro,
    actuliazarRegistro
}