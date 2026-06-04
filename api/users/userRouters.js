const { Router } = require('express');
const router = Router();
const userController = require('./userController');
const { verificaToken } = require('../common/authorization');


router.post('/api/usuarios', [verificaToken], userController.postUser);
router.post('/api/usuarios/login', userController.login);
router.put('/api/usuarios/:id', [verificaToken], userController.updateUser);
router.put('/api/usuarios/get-pag', [verificaToken], userController.getUsersPag);

router.get('/api/rol/schema/:idRol', [verificaToken], userController.getRolSchema);

module.exports = router;