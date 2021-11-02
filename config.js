/*module.exports = {
    api: {
      port: process.env.API_PORT || 3100,
    },
    bd: {
      database: "ProyectoEscolar",
      username: "postgres",
      password: "web2021.",
      host: "localhost",
      dialect: "postgres",
      port: 5432,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
  },
};*/

module.exports = {
  api: {
    port: process.env.API_PORT || 3100,
    //DATABASE_URL:"postgres://hqmgsksiovknnz:7e7ae98f92f9d3a8fcff5c68bb19481a28a7726f1f5a1c4ff2803c079465ff5e@ec2-3-217-91-165.compute-1.amazonaws.com:5432/d4vf4a9mti8ru",
  },
  bd: {
    database: "d4vf4a9mti8ru",
    username: "hqmgsksiovknnz",
    password: "7e7ae98f92f9d3a8fcff5c68bb19481a28a7726f1f5a1c4ff2803c079465ff5e",
    host: "ec2-3-217-91-165.compute-1.amazonaws.com",
    dialect: "postgres",
    port: 5432,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
},
};