module.exports = (sequelize, type) => {
    return sequelize.define(
        "estudiante",
        {
            idEstudiante: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nombreEstudiante: {
                type: type.STRING(100),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            apellidoEstudiante: {
                type: type.STRING(100),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            direccionEstudiante: {
                type: type.STRING(100),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            fechaNacimientoEstudiante: {
                type: type.DATE,
                allowNull: false
            },
            celularEstudiante: {
                type: type.STRING(50),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            correoEstudiante: {
                type: type.STRING(150),
                allowNull: false,
                validate: {
                    notEmpty: true,
                }
            },
            generoEstudiante: {
                type: type.STRING(10),
                allowNull: false,
                validate: {
                    notEmpty: true,
                }
            },
            estadoEstudiante: {
                type: type.STRING(10),
                allowNull: false,
                defaultValue: false,
                validate: {
                    notEmpty: true,
                }
            },
            idEncargadoEstudiante: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                     model: "encargadoEstudiante",
                    key: "idEncargadoEstudiante",
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