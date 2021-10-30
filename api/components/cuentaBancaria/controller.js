const { CuentaBancaria } = require("../../../store/db");

const insert = async (req) => {
    let response = {};
    let { noCuentaBancaria, banco, tipodeCuentaBancaria, nombreCuenta } = req.body;
    let itemInsert = await CuentaBancaria.create({ noCuentaBancaria, banco, tipodeCuentaBancaria, nombreCuenta });
    response.code = 1;
    response.data = itemInsert;
    
    return response;

}

const list = async (req) => {
    let response = {};
    response.code = 1;
    response.data = await CuentaBancaria.findAll();
    return response;
}

const update = async (req) => {
    let response = {};
    let { id } = req.params;
    if (Number(id) > 0) {
        const dataActual = await CuentaBancaria.findOne({
            where: { idCuentaBancaria: id }
        });

        if (dataActual) {
            let { noCuentaBancaria, banco, tipodeCuentaBancaria, nombreCuenta } = req.body;
            let data = {
                noCuentaBancaria,
                banco,
                tipodeCuentaBancaria,
                nombreCuenta,
                fecha_ult_mod:new Date()
            }
            const resultado = await CuentaBancaria.update(data, {
                where: {
                    idCuentaBancaria:id
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