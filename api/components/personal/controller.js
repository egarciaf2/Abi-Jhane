const { Personal } = require("../../../store/db");

const insert = async (req) => {
    let response = {};
    let { nombrePersonal, apellidoPersonal, dpiPersonal, direccionPersonal, fechaNacimientoPersonal, celularPersonal, telefonoPersonal,  correoPersonal, generoPersonal, estadoPersonal, idUsuario } = req.body;
    let itemInsert = await Personal.create({ nombrePersonal, apellidoPersonal, dpiPersonal, direccionPersonal, fechaNacimientoPersonal, celularPersonal, telefonoPersonal,  correoPersonal, generoPersonal, estadoPersonal, idUsuario });
    response.code = 1;
    response.data = itemInsert;
    
    return response;

}

const list = async (req) => {
    let response = {};
    response.code = 1;
    response.data = await Personal.findAll();
    return response;
}

const update = async (req) => {
    let response = {};
    let { id } = req.params;
    if (Number(id) > 0) {
        const dataActual = await Personal.findOne({
            where: { idPersonal: id }
        });

        if (dataActual) {
            let { nombrePersonal, apellidoPersonal, dpiPersonal, direccionPersonal, fechaNacimientoPersonal, celularPersonal, telefonoPersonal,  correoPersonal, generoPersonal, estadoPersonal, idUsuario } = req.body;
            let data = {
                nombrePersonal,
                apellidoPersonal,
                dpiPersonal,
                direccionPersonal,
                fechaNacimientoPersonal,
                celularPersonal,
                telefonoPersonal,
                correoPersonal,
                generoPersonal,
                estadoPersonal,
                idUsuario,
                fecha_ult_mod:new Date()
            }
            const resultado = await Personal.update(data, {
                where: {
                    idPersonal:id
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