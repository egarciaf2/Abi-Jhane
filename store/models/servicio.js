module.exports = (sequelize, type) => {
    return sequelize.define(
        "servicio",
        {
            idServicio: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            descripcionServicio: {
                type: type.STRING(50),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            saldo: {
                type: type.DECIMAL,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            fechaGeneracion: {
                type: type.DATE,
                allowNull: false
            },
            idEncargadoEstudiante: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                     model: "encargadoEstudiante",
                    key: "idEncargadoEstudiante",
                 }
            },
            idTipodePago: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                     model: "tipodePago",
                    key: "idTipodePago",
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