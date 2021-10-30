module.exports = (sequelize, type) => {
    return sequelize.define(
        "usuario",
        {
            idUsuario: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            usuario: {
                type: type.STRING(50),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            contraseña: {
                type: type.STRING(300),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            descripcionUsuario: {
                type: type.STRING(50),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            estadoUsuario: {
                type: type.STRING(10),
                allowNull: false,
                defaultValue: false,
                validate: {
                    notEmpty: true,
                }
            },
            idTipoUsuario: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                     model: "tipoUsuario",
                    key: "idTipoUsuario",
                 }
            },
            fecha_crea: {
                type: type.DATE,
                allowNull: false,
                defaultValue: type.NOW
            },
            fecha_ult_mod: {
                type: type.DATE
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
        }
    );
};