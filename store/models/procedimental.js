module.exports = (sequelize, type) => {
    return sequelize.define(
        "procedimental",
        {
            idProcedimental: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            noActividad: {
                type: type.STRING(50),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            actividad: {
                type: type.STRING(100),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            punteoProcedimental: {
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