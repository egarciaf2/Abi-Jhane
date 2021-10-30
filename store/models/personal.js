module.exports = (sequelize, type) => {
    return sequelize.define(
        "personal",
        {
            idPersonal: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nombrePersonal: {
                type: type.STRING(100),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            apellidoPersonal: {
                type: type.STRING(100),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            dpiPersonal: {
                type: type.STRING(50),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            direccionPersonal: {
                type: type.STRING(100),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            fechaNacimientoPersonal: {
                type: type.DATE,
                allowNull: false
            },
            celularPersonal: {
                type: type.STRING(50),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            telefonoPersonal: {
                type: type.STRING(50),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            correoPersonal: {
                type: type.STRING(150),
                allowNull: false,
                validate: {
                    notEmpty: true,
                }
            },
            generoPersonal: {
                type: type.STRING(10),
                allowNull: false,
                validate: {
                    notEmpty: true,
                }
            },
            estadoPersonal: {
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
