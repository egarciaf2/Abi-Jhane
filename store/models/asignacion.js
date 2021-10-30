module.exports = (sequelize, type) => {
    return sequelize.define(
        "asignacion",
        {
            idAsignacion: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            cicloEscolar: {
                type: type.DATE,
                allowNull: false
            },
            seccion: {
                type: type.STRING(100),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            idPersonal: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                     model: "personal",
                    key: "idPersonal",
                 }
            },
            idCurso: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                    model: "cursos",
                    key: "idCurso",
                }
            },
            idGrado: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                    model: "grado",
                    key: "idGrado",
                }
            },           
            idEstudiante: {
                type: type.INTEGER,
                allowNull: false,
                references: {
                    model: "estudiante",
                    key: "idEstudiante",
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