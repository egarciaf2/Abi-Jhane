module.exports = (sequelize, type) => {
    return sequelize.define(
        "unidad",
        {
            idUnidad: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            descripcionUnidad: {
                type: type.STRING(50),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            idAsignacion: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                     model: "asignacion",
                    key: "idAsignacion",
                 }
            },
            notaTotal: {
                type: type.STRING(50),
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