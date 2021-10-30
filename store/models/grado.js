module.exports = (sequelize, type) => {
    return sequelize.define(
        "grado",
        {
            idGrado: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nombreGrado: {
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