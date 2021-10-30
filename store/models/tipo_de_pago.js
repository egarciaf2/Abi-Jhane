module.exports = (sequelize, type) => {
    return sequelize.define(
        "tipodePago",
        {
            idTipodePago: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            descripcionTipodepago: {
                type: type.STRING(300),
                unique: true,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            montoTipoPago: {
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