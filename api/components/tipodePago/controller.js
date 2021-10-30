const { TipodePago } = require("../../../store/db");

const insert = async (req) => {
    let response = {};
    let { descripcionTipodepago, montoTipoPago } = req.body;
    let itemInsert = await TipodePago.create({ descripcionTipodepago, montoTipoPago });
    response.code = 1;
    response.data = itemInsert;
    
    return response;

}

const list = async (req) => {
    let response = {};
    response.code = 1;
    response.data = await TipodePago.findAll();
    return response;
}

const update = async (req) => {
    let response = {};
    let { id } = req.params;
    if (Number(id) > 0) {
        const dataActual = await TipodePago.findOne({
            where: { idTipodePago: id }
        });

        if (dataActual) {
            let { descripcionTipodepago, montoTipoPago } = req.body;
            let data = {
                descripcionTipodepago,
                montoTipoPago,
                fecha_ult_mod:new Date()
            }
            const resultado = await TipodePago.update(data, {
                where: {
                    idTipodePago:id
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