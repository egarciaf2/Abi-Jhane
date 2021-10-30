const { Unidad } = require("../../../store/db");


const insert = async (req) => {
    let response = {};
    let { descripcionUnidad, idAsignacion } = req.body;
    let itemInsert = await Unidad.create({ descripcionUnidad, idAsignacion });
    response.code = 1;
    response.data = itemInsert;
    
    return response;

}

const list = async (req) => {
    let response = {};
    response.code = 1;
    response.data = await Unidad.findAll();
    return response;
}

const update = async (req) => {
    let response = {};
    let { id } = req.params;
    if (Number(id) > 0) {
        const dataActual = await Unidad.findOne({
            where: { idUnidad: id }
        });

        if (dataActual) {
            let { descripcionUnidad, idAsignacion } = req.body;
            let data = {
                descripcionUnidad,
                idAsignacion,
                fecha_ult_mod:new Date()
            }
            const resultado = await Unidad.update(data, {
                where: {
                    idUnidad:id
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
        response.data = "El código  ingresado no existe";
        return response;
    }
}

module.exports = {
    insert,
    list,
    update
}