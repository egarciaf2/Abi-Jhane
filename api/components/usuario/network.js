const express = require('express');
const controller = require('./controller');
const response = require('../../../network/response');
const router = express.Router();


const registrar = (req, res, next) => {
    controller.insert(req)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(next);
}


const list = (req, res, next) => {
    controller.list(req)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(next);
}


const update = (req, res, next) => {
    controller.update(req)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(next);
}


const login = (req, res, next) => {
    controller.login(req)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(next);
}


router.post('/', registrar);
router.get('/', list);
router.post('/login', login);
router.put('/:id', update);

module.exports = router;