const config = require("../config");
const { BitacoraPeticion } = require("../store/db");

exports.success = (req, res, message, status) => {
    let statusCode = status || 200;
    res.status(statusCode).send({
        error: false,
        status: status,
        body: message
    });
}

exports.error = (req, res, message, status) => {
    let statusCode = status || 500;
    res.status(statusCode).send({
        error: true,
        status: status,
        body: message
    });
}
