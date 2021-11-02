const Sequelize = require('sequelize');
const config = require('../config');
const { QueryTypes } = require('sequelize');

const confiBd = new Sequelize(
  config.bd.database,
  config.bd.username,
  config.bd.password,
  {
    host: config.bd.host,
    dialect: config.bd.dialect,
    port: config.bd.port,
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
    logging: true, //Evitamos que nos muestre lo que hace con la bd
    timezone: "-06:00",
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = confiBd;


const TipoUsuarioModel = require('./models/tipo_usuario');
const UsuarioModel = require('./models/usuario');
const PersonalModel = require('./models/personal');
const EncargadoEstudianteModel = require('./models/encargado_estudiante');
const EstudianteModel = require('./models/estudiante');
const CursoModel = require('./models/curso');
const GradoModel = require('./models/grado');
const UnidadModel = require('./models/unidad');
const AsignacionModel = require('./models/asignacion');
const TipodePagoModel = require('./models/tipo_de_pago');
const CuentaBancariaModel = require('./models/cuenta_bancaria');
const PagoModel = require('./models/pago');
const ServicioModel = require('./models/servicio');

const TipoUsuario = TipoUsuarioModel(confiBd, Sequelize);
const Usuario = UsuarioModel(confiBd, Sequelize);
const Personal = PersonalModel(confiBd, Sequelize);
const EncargadoEstudiante = EncargadoEstudianteModel(confiBd, Sequelize);
const Estudiante = EstudianteModel(confiBd, Sequelize);
const Curso = CursoModel(confiBd, Sequelize);
const Grado = GradoModel(confiBd, Sequelize);
const Unidad = UnidadModel(confiBd, Sequelize);
const Asignacion = AsignacionModel(confiBd, Sequelize);
const TipodePago = TipodePagoModel(confiBd, Sequelize);
const CuentaBancaria = CuentaBancariaModel(confiBd, Sequelize);
const Pago = PagoModel(confiBd, Sequelize);
const Servicio = ServicioModel(confiBd, Sequelize);

Usuario.belongsTo(TipoUsuario,{
  as: "TipoUsuario",
  foreignKey: "idTipoUsuario",
  onDelete: "CASCADE",
});

Personal.belongsTo(Usuario,{
  as: "Usuario",
  foreignKey: "idUsuario",
  onDelete: "CASCADE",
});

EncargadoEstudiante.belongsTo(Usuario,{
  as: "Usuario",
  foreignKey: "idUsuario",
  onDelete: "CASCADE",
});

Estudiante.belongsTo(EncargadoEstudiante,{
  as: "EncargadoEstudiante",
  foreignKey: "idEncargadoEstudiante",
  onDelete: "CASCADE",
});

Estudiante.belongsTo(Usuario,{
  as: "Usuario",
  foreignKey: "idUsuario",
  onDelete: "CASCADE",
});

Unidad.belongsTo(Asignacion,{
  as: "Asignacion",
  foreignKey: "idAsignacion",
  onDelete: "CASCADE",
});

Asignacion.belongsTo(Personal,{
  as: "Personal",
  foreignKey: "idPersonal",
  onDelete: "CASCADE",
});

Asignacion.belongsTo(Curso,{
  as: "Curso",
  foreignKey: "idCurso",
  onDelete: "CASCADE",
});

Asignacion.belongsTo(Grado,{
  as: "Grado",
  foreignKey: "idGrado",
  onDelete: "CASCADE",
});

Asignacion.belongsTo(Estudiante,{
  as: "Estudiante",
  foreignKey: "idEstudiante",
  onDelete: "CASCADE",
});

Pago.belongsTo(CuentaBancaria,{
  as: "CuentaBancaria",
  foreignKey: "idCuentaBancaria",
  onDelete: "CASCADE",
});

Pago.belongsTo(Servicio,{
  as: "Servicio",
  foreignKey: "idServicio",
  onDelete: "CASCADE",
});

Servicio.belongsTo(EncargadoEstudiante,{
  as: "EncargadoEstudiante",
  foreignKey: "idEncargadoEstudiante",
  onDelete: "CASCADE",
});

Servicio.belongsTo(TipodePago,{
  as: "TipodePago",
  foreignKey: "idTipodePago",
  onDelete: "CASCADE",
});


db.sequelize.sync();

try {
  confiBd.sync({
    force: false,
  }).then(() => {
    confiBd.query("select count(*) as total from tipoUsuario", {
      type: QueryTypes.SELECT
    }).then(async (resultado) => {
      if (resultado[0].total === 0) {
        await TipoUsuario.bulkCreate(listTipoUsuario);
      }
    });
  });
} catch (e) {
  console.error(e);
}

module.exports = {
  TipoUsuario,
  Usuario, 
  Personal,
  EncargadoEstudiante,
  Estudiante,
  Curso,
  Grado,
  Unidad,
  Asignacion,
  TipodePago,
  CuentaBancaria,
  Pago,
  Servicio
}

