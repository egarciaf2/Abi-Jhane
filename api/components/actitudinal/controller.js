const { Actitudinal } = require("../../../store/db");

const insert = async (req) => {
    let response = {};
    let { noAspecto, aspecto, punteoActitudinal } = req.body;
    let itemInsert = await Actitudinal.create({ noAspecto, aspecto, punteoActitudinal });
    response.code = 1;
    response.data = itemInsert;
    
    return response;

}

const list = async (req) => {
    let response = {};
    response.code = 1;
    response.data = await Actitudinal.findAll();
    return response;
}

const update = async (req) => {
    let response = {};
    let { id } = req.params;
    if (Number(id) > 0) {
        const dataActual = await Actitudinal.findOne({
            where: { idActitudinal: id }
        });

        if (dataActual) {
            let { noAspecto, aspecto, punteoActitudinal } = req.body;
            let data = {
                noAspecto,
                aspecto,
                punteoActitudinal,
                fecha_ult_mod:new Date()
            }
            const resultado = await Actitudinal.update(data, {
                where: {
                    idActitudinal:id
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