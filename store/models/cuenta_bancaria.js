module.exports = (sequelize, type) => {
    return sequelize.define(
        "cuentaBancaria",
        {
            idCuentaBancaria: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            noCuentaBancaria: {
                type: type.STRING(50),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            banco: {
                type: type.STRING(100),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            tipodeCuentaBancaria: {
                type: type.STRING(100),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            nombreCuenta: {
                type: type.STRING(100),
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