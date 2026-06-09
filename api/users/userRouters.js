const { Router } = require('express');
const router = Router();
const userController = require('./userController');
const { verificaToken } = require('../common/authorization');


router.post('/api/usuarios', [verificaToken], userController.postUser);
router.get('/api/usuarios/:idLista', [verificaToken], userController.getLista);
router.post('/api/usuarios/login', userController.login);
router.get('/api/usuarios-cities/:codPais', [verificaToken], userController.getCiudades);

router.put('/api/usuarios/:id', [verificaToken], userController.updateUser);
router.put('/api/usuarios/get-pag', [verificaToken], userController.getUsersPag);

router.get('/api/rol/schema/:idRol', [verificaToken], userController.getRolSchema);
router.get('/api/rol', [verificaToken], userController.getRoles);

module.exports = router;