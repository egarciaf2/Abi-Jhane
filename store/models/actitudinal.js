module.exports = (sequelize, type) => {
    return sequelize.define(
        "actitudinal",
        {
            idActitudinal: {
                type: type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            noAspecto: {
                type: type.STRING(50),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            aspecto: {
                type: type.STRING(100),
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            punteoActitudinal: {
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