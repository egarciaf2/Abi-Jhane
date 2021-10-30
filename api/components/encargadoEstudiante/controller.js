const { EncargadoEstudiante } = require("../../../store/db");

const insert = async (req) => {
    let response = {};
    let { nombreEncargado, apellidoEncargado, direccionEncargado, dpiEncargado, celularEncargado, correoEncargado, generoEncargado, estadoEncargadoEstudiante, idUsuario } = req.body;
    let itemInsert = await EncargadoEstudiante.create({ nombreEncargado, apellidoEncargado, direccionEncargado, dpiEncargado, celularEncargado, correoEncargado, generoEncargado, estadoEncargadoEstudiante, idUsuario });
    response.code = 1;
    response.data = itemInsert;
    
    return response;

}

const list = async (req) => {
    let response = {};
    response.code = 1;
    response.data = await EncargadoEstudiante.findAll();
    return response;
}

const update = async (req) => {
    let response = {};
    let { id } = req.params;
    if (Number(id) > 0) {
        const dataActual = await EncargadoEstudiante.findOne({
            where: { idEncargadoEstudiante: id }
        });

        if (dataActual) {
            let { nombreEncargado, apellidoEncargado, direccionEncargado, dpiEncargado, celularEncargado, correoEncargado, generoEncargado, estadoEncargadoEstudiante, idUsuario } = req.body;
            let data = {
                nombreEncargado,
                apellidoEncargado,
                direccionEncargado,
                dpiEncargado,
                celularEncargado,
                correoEncargado,
                generoEncargado,
                estadoEncargadoEstudiante,
                idUsuario,
                fecha_ult_mod:new Date()
            }
            const resultado = await EncargadoEstudiante.update(data, {
                where: {
                    idEncargadoEstudiante:id
                }
            });

            if (resultado > 0) {
                response.code = 1;
                response.data = "Información  actualizada correctamente";
                return response;
            } else {
                response.code = 0;
                response.data = "No existen cambios para aplicar";
                return response;
            }
        } else {
            response.code = 0;
            response.data = "El código  ingresado no existe";
            return response;
        }

    } else {
        response.code = 0;
        response.data = "El código ingresado no existe";
        return response;
    }
}

module.exports = {
    insert,
    list,
    update
}