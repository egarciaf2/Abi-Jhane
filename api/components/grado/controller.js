const { Grado } = require("../../../store/db");


const insert = async (req) => {
    let response = {};
    let { nombreGrado } = req.body;
    let itemInsert = await Grado.create({ nombreGrado });
    response.code = 1;
    response.data = itemInsert;
    
    return response;

}

const list = async (req) => {
    let response = {};
    response.code = 1;
    response.data = await Grado.findAll();
    return response;
}

const update = async (req) => {
    let response = {};
    let { id } = req.params;
    if (Number(id) > 0) {
        const dataActual = await Grado.findOne({
            where: { idGrado: id }
        });

        if (dataActual) {
            let { nombreGrado } = req.body;
            let data = {
                nombreGrado,
                fecha_ult_mod:new Date()
            }
            const resultado = await Grado.update(data, {
                where: {
                    idGrado:id
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