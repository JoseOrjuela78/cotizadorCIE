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
router.post('/api/usuarios/update-pass', [verificaToken], userController.updatePassword);

//LISTAS
router.get('/api/listas/:idLista', [verificaToken], userController.getLista);
router.get('/api/cities/:codPais', [verificaToken], userController.getCiudades);

//ROLES

router.get('/api/rol/schema/:idRol', [verificaToken], userController.getRolSchema);
router.put('/api/get-roles', [verificaToken], userController.getRolesPag);
router.post('/api/create-permits-rol', [verificaToken], userController.createPermisosRol);
router.post('/api/create-rol', [verificaToken], userController.createRol);
router.put('/api/rol/status', [verificaToken], userController.updateStatusRol);

//RESTRICCIONES

router.post('/api/create-restriction', [verificaToken], userController.createRestriction);
router.put('/api/delete-restriction', [verificaToken], userController.deleteRestriction);
router.put('/api/get-users-restricted', [verificaToken], userController.getUsersRestricted);



module.exports = router;