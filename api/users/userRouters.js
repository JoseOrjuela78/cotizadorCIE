const { Router } = require('express');
const router = Router();
const userController = require('./userController');
const { verificaToken } = require('../common/authorization');


router.post('/api/usuarios', [verificaToken], userController.postUser);
router.post('/api/usuarios/login', userController.login);
router.put('/api/usuarios/:id', [verificaToken], userController.updateUser);
router.get('/api/usuarios/get/:estado', [verificaToken], userController.getUsers);
router.get('/api/usuarios/getid/:identificacion', [verificaToken], userController.getIdUsers);

module.exports = router;