module.exports = (sequelize, type) => {
    return sequelize.define(
        "pago",
        {
            idPago: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            idCuentaBancaria: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                     model: "cuentaBancaria",
                    key: "idCuentaBancaria",
                 }
            },
            fechaPago: {
                type: type.DATE,
                allowNull: false
            },
            montoPago: {
                type: type.DECIMAL,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            noBoleta: {
                type: type.STRING(50),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            idServicio: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                     model: "servicio",
                    key: "idServicio",
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