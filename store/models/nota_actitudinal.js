module.exports = (sequelize, type) => {
    return sequelize.define(
        "notaActitudinal",
        {
            idNotaActitudinal: {
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
            idActitudinal: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                    model: "actitudinal",
                    key: "idActitudinal",
                }
            },
            punteoNotaActitudinal: {
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