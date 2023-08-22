const { Router } = require('express');
const router = Router();
const tablesController = require('./tablesController');
const { verificaToken } = require('../common/authorization');

router.get('/api/tables-get/:table', [verificaToken], tablesController.generateTable);
router.put('/api/tables-tools/:table', [verificaToken], tablesController.inserttablas);
//router.put('/api/tables-uptools/:id', [verificaToken], tablesController.updateHerramientas);
//lista detalle
//router.get('/api/list-zp', [verificaToken], tablesController.getZonaProveedor);
//router.put('/api/tables-uplistdetail/:id', [verificaToken], tablesController.updateListaDet);
//Monedas
router.put('/api/tables-upcoin/:id', [verificaToken], tablesController.updateMoneda);
//Parametros
router.put('/api/tables-upparams/:id', [verificaToken], tablesController.updateParametro);
//Proveedores
router.put('/api/tables-upbrands/:id', [verificaToken], tablesController.updateProveedor);
//Rangos
router.put('/api/tables-uprangos/:id', [verificaToken], tablesController.updateRango);
//Tarifas
router.put('/api/tables-uptarifas/:id', [verificaToken], tablesController.updateTarifa);
//Trm
router.put('/api/tables-uptrm/:id', [verificaToken], tablesController.updateTrm);

//Vartarifas
router.put('/api/tables-upvartarifas/:id', [verificaToken], tablesController.updateVartarifa);
//Zona_Moneda
//router.put('/api/tables-upzonamoneda/:id', [verificaToken], tablesController.updateZonaMoneda);
//Zona_Proveedor
//router.put('/api/tables-upzonaproveedor/:id', [verificaToken], tablesController.updateZonaProveedor);
//Zonas
router.put('/api/tables-upzonas/:id', [verificaToken], tablesController.updateZonas);

module.exports = router;