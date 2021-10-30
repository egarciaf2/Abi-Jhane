const { Curso } = require("../../../store/db");


const insert = async (req) => {
    let response = {};
    let { nombreCurso, horarioCurso } = req.body;
    let itemInsert = await Curso.create({ nombreCurso, horarioCurso });
    response.code = 1;
    response.data = itemInsert;
    
    return response;

}

const list = async (req) => {
    let response = {};
    response.code = 1;
    response.data = await Curso.findAll();
    return response;
}

const update = async (req) => {
    let response = {};
    let { id } = req.params;
    if (Number(id) > 0) {
        const dataActual = await Curso.findOne({
            where: { idCurso: id }
        });

        if (dataActual) {
            let { nombreCurso, horarioCurso  } = req.body;
            let data = {
                nombreCurso,
                horarioCurso,
                fecha_ult_mod:new Date()
            }
            const resultado = await Curso.update(data, {
                where: {
                    idCurso:id
                }
            });

            if (resultado > 0) {
                response.code = 1;
                response.data = "Información del nombre del Curso actualizada correctamente";
                return response;
            } else {
                response.code = 0;
                response.data = "No existen cambios para aplicar";
                return response;
            }
        } else {
            response.code = 0;
            response.data = "El código del Curso ingresado no existe";
            return response;
        }

    } else {
        response.code = 0;
        response.data = "El código del Curso ingresado no existe";
        return response;
    }
}

module.exports = {
    insert,
    list,
    update
}