const { Router } = require('express');
const router = Router();
const reportsController = require('./reportsController');
const { verificaToken } = require('../common/authorization');


router.put('/api/reports/stock', [verificaToken], reportsController.reportStock);
router.put('/api/reports/stock-cie', [verificaToken], reportsController.reportStockCIE);
router.put('/api/reports/csv', [verificaToken], reportsController.reportCSV);
router.get('/api/reports/get-bod/:bod', reportsController.getBodegas);
router.put('/api/reports/precios', [verificaToken], reportsController.reportPrecios);
router.put('/api/reports/facturacion', [verificaToken], reportsController.reportFacturacion);
router.get('/api/reports/get-marcas', reportsController.getMarcas);


module.exports = router;