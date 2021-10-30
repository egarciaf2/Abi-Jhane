const { TipoUsuario } = require("../../../store/db");


const insert = async (req) => {
    let response = {};
    let { descripcionTipoUsuario} = req.body;
    let itemInsert = await TipoUsuario.create({ descripcionTipoUsuario });
    response.code = 1;
    response.data = itemInsert;
    
    return response;

}

const list = async (req) => {
    let response = {};
    response.code = 1;
    response.data = await TipoUsuario.findAll();
    return response;
}

const update = async (req) => {
    let response = {};
    let { id } = req.params;
    if (Number(id) > 0) {
        const dataActual = await TipoUsuario.findOne({
            where: { idTipoUsuario: id }
        });

        if (dataActual) {
            let { descripcionTipoUsuario } = req.body;
            let data = {
                descripcionTipoUsuario,
                fecha_ult_mod:new Date()
            }
            const resultado = await TipoUsuario.update(data, {
                where: {
                    idTipoUsuario:id
                }
            });

            if (resultado > 0) {
                response.code = 1;
                response.data = "Información del Tipo de Usuario actualizada correctamente";
                return response;
            } else {
                response.code = 0;
                response.data = "No existen cambios para aplicar";
                return response;
            }
        } else {
            response.code = 0;
            response.data = "El código del Tipo de Usuario ingresado no existe";
            return response;
        }

    } else {
        response.code = 0;
        response.data = "El código del Tipo de Usuario ingresado no existe";
        return response;
    }
}

module.exports = {
    insert,
    list,
    update
}