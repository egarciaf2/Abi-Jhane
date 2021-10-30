const { Pago } = require("../../../store/db");


const insert = async (req) => {
    let response = {};
    let { idCuentaBancaria, fechaPago, montoPago, noBoleta, idServicio } = req.body;
    let itemInsert = await Pago.create({ idCuentaBancaria, fechaPago, montoPago, noBoleta, idServicio });
    response.code = 1;
    response.data = itemInsert;
    
    return response;

}

const list = async (req) => {
    let response = {};
    response.code = 1;
    response.data = await Pago.findAll();
    return response;
}

const update = async (req) => {
    let response = {};
    let { id } = req.params;
    if (Number(id) > 0) {
        const dataActual = await Pago.findOne({
            where: { idPago: id }
        });

        if (dataActual) {
            let { idCuentaBancaria, fechaPago, montoPago, noBoleta, idServicio } = req.body;
            let data = {
                idCuentaBancaria,
                fechaPago,
                montoPago,
                noBoleta,
                idServicio,
                fecha_ult_mod:new Date()
            }
            const resultado = await Pago.update(data, {
                where: {
                    idPago:id
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