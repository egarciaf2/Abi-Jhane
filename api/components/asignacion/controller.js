const { Asignacion } = require("../../../store/db");


const insert = async (req) => {
    let response = {};
    let { cicloEscolar, seccion, idPersonal, idCurso, idGrado, idEstudiante } = req.body;
    let itemInsert = await Asignacion.create({  cicloEscolar, seccion, idPersonal, idCurso, idGrado, idEstudiante });
    response.code = 1;
    response.data = itemInsert;
    
    return response;

}

const list = async (req) => {
    let response = {};
    response.code = 1;
    response.data = await Asignacion.findAll();
    return response;
}

const update = async (req) => {
    let response = {};
    let { id } = req.params;
    if (Number(id) > 0) {
        const dataActual = await Asignacion.findOne({
            where: { idAsignacion: id }
        });

        if (dataActual) {
            let { cicloEscolar, seccion, idPersonal, idCurso, idGrado, idEstudiante } = req.body;
            let data = {
                cicloEscolar,
                seccion,
                idPersonal,
                idCurso,
                idGrado,
                idEstudiante,
                fecha_ult_mod:new Date()
            }
            const resultado = await Asignacion.update(data, {
                where: {
                    idAsignacion:id
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