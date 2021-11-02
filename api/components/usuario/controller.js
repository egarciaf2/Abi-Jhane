const { Usuario, TipoUsuario } = require("../../../store/db");



const insert = async (req) => {
    let response = {};
    let { usuario, contraseña, descripcionUsuario, estadoUsuario, idTipoUsuario } = req.body;
    let itemInsert = await Usuario.create({ usuario, contraseña, descripcionUsuario, estadoUsuario, idTipoUsuario });
    response.code = 1;
    response.data = itemInsert;

    return response;

}

const list = async (req) => {
    let response = {};
    response.code = 1;
    response.data = await Usuario.findAll({
        include: [{
            model: TipoUsuario,
            as: "TipoUsuario",
            required: true
        }
        ]
    });
    return response;
}

const login = async (req) => {
    let response = {};
    let {username,password}=req.body;

    
    let data = await Usuario.findOne({
        where:{usuario:username,contraseña:password}
    });
    if(data){
        response.code=1;
        response.data=data;
    }else{
        response.code=-1;
        response.data='Credenciales invalidas';
    }
    

    return response;
}


const update = async (req) => {
    let response = {};
    let { id } = req.params;
    if (Number(id) > 0) {
        const dataActual = await Usuario.findOne({
            where: { idUsuario: id }
        });

        if (dataActual) {
            let { usuario, contraseña, descripcionUsuario, estadoUsuario, idTipoUsuario } = req.body;
            let data = {
                usuario,
                contraseña,
                descripcionUsuario,
                estadoUsuario,
                idTipoUsuario,
                fecha_ult_mod: new Date()
            }
            const resultado = await Usuario.update(data, {
                where: {
                    idUsuario: id
                }
            });

            if (resultado > 0) {
                response.code = 1;
                response.data = "Información del Usuario actualizada correctamente";
                return response;
            } else {
                response.code = 0;
                response.data = "No existen cambios para aplicar";
                return response;
            }
        } else {
            response.code = 0;
            response.data = "El código del Usuario ingresado no existe";
            return response;
        }

    } else {
        response.code = 0;
        response.data = "El código del Usuario ingresado no existe";
        return response;
    }
}

module.exports = {
    insert,
    list,
    update,
    login
}