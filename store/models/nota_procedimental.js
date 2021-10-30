module.exports = (sequelize, type) => {
    return sequelize.define(
        "notaProcedimental",
        {
            idNotaProcedimental: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            idUnidad: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                     model: "unidad",
                    key: "idUnidad",
                 }
            },
            idProcedimental: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                    model: "procedimental",
                    key: "idProcedimental",
                }
            },
            punteoNotaProcedimental: {
                type: type.DECIMAL,
                allowNull: false,
                validate: {
                    notEmpty: true
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