const { NotaActitudinal } = require("../../../store/db");


const insert = async (req) => {
    let response = {};
    let { idUnidad, idActitudinal, punteoNotaActitudinal } = req.body;
    let itemInsert = await NotaActitudinal.create({ idUnidad, idActitudinal, punteoNotaActitudinal });
    response.code = 1;
    response.data = itemInsert;
    
    return response;

}

const list = async (req) => {
    let response = {};
    response.code = 1;
    response.data = await NotaActitudinal.findAll();
    return response;
}

const update = async (req) => {
    let response = {};
    let { id } = req.params;
    if (Number(id) > 0) {
        const dataActual = await NotaActitudinal.findOne({
            where: { idNotaActitudinal: id }
        });

        if (dataActual) {
            let { idUnidad, idActitudinal, punteoNotaActitudinal } = req.body;
            let data = {
                idUnidad,
                idActitudinal,
                punteoNotaActitudinal,
                fecha_ult_mod:new Date()
            }
            const resultado = await NotaActitudinal.update(data, {
                where: {
                    idNotaActitudinal:id
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