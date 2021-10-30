const { NotaProcedimental } = require("../../../store/db");


const insert = async (req) => {
    let response = {};
    let { idUnidad, idProcedimental, punteoNotaProcedimental } = req.body;
    let itemInsert = await NotaProcedimental.create({ idUnidad, idProcedimental, punteoNotaProcedimental });
    response.code = 1;
    response.data = itemInsert;
    
    return response;

}

const list = async (req) => {
    let response = {};
    response.code = 1;
    response.data = await NotaProcedimental.findAll();
    return response;
}

const update = async (req) => {
    let response = {};
    let { id } = req.params;
    if (Number(id) > 0) {
        const dataActual = await NotaProcedimental.findOne({
            where: { idNotaProcedimental: id }
        });

        if (dataActual) {
            let { idUnidad, idProcedimental, punteoNotaProcedimental } = req.body;
            let data = {
                idUnidad,
                idProcedimental,
                punteoNotaProcedimental,
                fecha_ult_mod:new Date()
            }
            const resultado = await NotaProcedimental.update(data, {
                where: {
                    idNotaProcedimental:id
                }
            });

            if (resultado > 0) {
                response.code = 1;
                response.data = "Información del nombre de Grado Escolar actualizada correctamente";
                return response;
            } else {
                response.code = 0;
                response.data = "No existen cambios para aplicar";
                return response;
            }
        } else {
            response.code = 0;
            response.data = "El código del Grado Escolar ingresado no existe";
            return response;
        }

    } else {
        response.code = 0;
        response.data = "El código del Grado Escolar ingresado no existe";
        return response;
    }
}

module.exports = {
    insert,
    list,
    update
}