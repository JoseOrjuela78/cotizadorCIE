const { Router } = require('express');
const router = Router();
const userController = require('./userController');
const { verificaToken } = require('../common/authorization');

//LOGIN

router.post('/api/usuarios/login', userController.login);

//USUARIOS

router.post('/api/usuarios', [verificaToken], userController.postUser);
router.put('/api/usuarios', [verificaToken], userController.updateUser);
router.put('/api/usuarios/status', [verificaToken], userController.updateStatusUser);
router.put('/api/usuarios/get-pag', [verificaToken], userController.getUsersPag);

//LISTAS
router.get('/api/listas/:idLista', [verificaToken], userController.getLista);
router.get('/api/cities/:codPais', [verificaToken], userController.getCiudades);

//ROLES

router.get('/api/rol/schema/:idRol', [verificaToken], userController.getRolSchema);
router.put('/api/get-roles', [verificaToken], userController.getRolesPag);
router.post('/api/create-permits-rol', [verificaToken], userController.createPermisosRol);
router.post('/api/create-rol', [verificaToken], userController.createRol);
router.put('/api/rol/status', [verificaToken], userController.updateStatusRol);

module.exports = router;