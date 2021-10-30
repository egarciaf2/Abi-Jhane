const { Procedimental } = require("../../../store/db");


const insert = async (req) => {
    let response = {};
    let { noActividad, actividad, punteoProcedimental } = req.body;
    let itemInsert = await Procedimental.create({ noActividad, actividad, punteoProcedimental });
    response.code = 1;
    response.data = itemInsert;
    
    return response;

}

const list = async (req) => {
    let response = {};
    response.code = 1;
    response.data = await Procedimental.findAll();
    return response;
}

const update = async (req) => {
    let response = {};
    let { id } = req.params;
    if (Number(id) > 0) {
        const dataActual = await Procedimental.findOne({
            where: { idProcedimental: id }
        });

        if (dataActual) {
            let { noActividad, actividad, punteoProcedimental } = req.body;
            let data = {
                noActividad,
                actividad,
                punteoProcedimental,
                fecha_ult_mod:new Date()
            }
            const resultado = await Procedimental.update(data, {
                where: {
                    idProcedimental:id
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