const { Estudiante } = require("../../../store/db");

const insert = async (req) => {
    let response = {};
    let { nombreEstudiante, apellidoEstudiante, direccionEstudiante, fechaNacimientoEstudiante, celularEstudiante, correoEstudiante, generoEstudiante, estadoEstudiante, idEncargadoEstudiante, idUsuario } = req.body;
    let itemInsert = await Estudiante.create({ nombreEstudiante, apellidoEstudiante, direccionEstudiante, fechaNacimientoEstudiante, celularEstudiante, correoEstudiante, generoEstudiante, estadoEstudiante, idEncargadoEstudiante, idUsuario });
    response.code = 1;
    response.data = itemInsert;
    
    return response;

}

const list = async (req) => {
    let response = {};
    response.code = 1;
    response.data = await Estudiante.findAll();
    return response;
}

const update = async (req) => {
    let response = {};
    let { id } = req.params;
    if (Number(id) > 0) {
        const dataActual = await Estudiante.findOne({
            where: { idEstudiante: id }
        });

        if (dataActual) {
            let { nombreEstudiante, apellidoEstudiante, direccionEstudiante, fechaNacimientoEstudiante, celularEstudiante, correoEstudiante, generoEstudiante, estadoEstudiante, idEncargadoEstudiante, idUsuario } = req.body;
            let data = {
                nombreEstudiante,
                apellidoEstudiante,
                direccionEstudiante,
                fechaNacimientoEstudiante,
                celularEstudiante,
                correoEstudiante,
                generoEstudiante,
                estadoEstudiante,
                idEncargadoEstudiante,
                idUsuario,
                fecha_ult_mod:new Date()
            }
            const resultado = await Estudiante.update(data, {
                where: {
                    idEstudiante:id
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