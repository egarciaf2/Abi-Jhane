module.exports = (sequelize, type) => {
    return sequelize.define(
        "cursos",
        {
            idCurso: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nombreCurso: {
                type: type.STRING(100),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            horarioCurso: {
                type: type.TIME,
                allowNull: false,
                defaultValue: type.NOW
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