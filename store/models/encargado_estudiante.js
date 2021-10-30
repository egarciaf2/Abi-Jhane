module.exports = (sequelize, type) => {
    return sequelize.define(
        "encargadoEstudiante",
        {
            idEncargadoEstudiante: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nombreEncargado: {
                type: type.STRING(100),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            apellidoEncargado: {
                type: type.STRING(100),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            direccionEncargado: {
                type: type.STRING(100),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            dpiEncargado: {
                type: type.STRING(50),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            celularEncargado: {
                type: type.STRING(50),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            correoEncargado: {
                type: type.STRING(150),
                allowNull: false,
                validate: {
                    notEmpty: true,
                }
            },
            generoEncargado: {
                type: type.STRING(10),
                allowNull: false,
                validate: {
                    notEmpty: true,
                }
            },
            estadoEncargadoEstudiante: {
                type: type.STRING(10),
                allowNull: false,
                defaultValue: false,
                validate: {
                    notEmpty: true,
                }
            },
            idUsuario: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                     model: "usuario",
                    key: "idUsuario",
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
