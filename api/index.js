const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('../config');
const errors = require('../network/errors');
const PORT = process.env.PORT || 5000;
require("../store/db");

const TipoUsuario = require('./components/tipoUsuario/network');
const Usuario = require('./components/usuario/network');
const Personal = require('./components/personal/network');
const EncargadoEstudiante = require('./components/encargadoEstudiante/network');
const Estudiante = require('./components/estudiante/network');
const Curso = require('./components/curso/network');
const Grado = require('./components/grado/network');
const Unidad = require('./components/unidad/network');
const Asignacion = require('./components/asignacion/network');
const TipodePago = require('./components/tipodePago/network');
const CuentaBancaria = require('./components/cuentaBancaria/network');
const Pago = require('./components/pago/network');
const Servicio = require('./components/servicio/network');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/tipoUsuario', TipoUsuario);
app.use('/api/usuario', Usuario);
app.use('/api/personal', Personal);
app.use('/api/encargadoEstudiante', EncargadoEstudiante);
app.use('/api/estudiante', Estudiante);
app.use('/api/curso', Curso);
app.use('/api/grado', Grado);
app.use('/api/unidad', Unidad);
app.use('/api/asignacion', Asignacion);
app.use('/api/tipodePago', TipodePago);
app.use('/api/cuentaBancaria', CuentaBancaria);
app.use('/api/pago', Pago);
app.use('/api/servicio', Servicio);


app.use(errors);

app.listen(PORT);



