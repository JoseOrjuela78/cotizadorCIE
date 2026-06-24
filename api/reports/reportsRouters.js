const { Router } = require('express');
const router = Router();
const reportsController = require('./reportsController');
const { verificaToken } = require('../common/authorization');


router.put('/api/reports/stock', [verificaToken], reportsController.reportStock);
router.put('/api/reports/stock-cie', [verificaToken], reportsController.reportStockCIE);
router.put('/api/reports/csv', [verificaToken], reportsController.reportCSV);

module.exports = router;