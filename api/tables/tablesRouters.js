const { Router } = require('express');
const router = Router();
const tablesController = require('./tablesController');
const { verificaToken } = require('../common/authorization');

router.put('/api/tables-upload/:table', [verificaToken], tablesController.uploadTable);
router.get('/api/tables-get/:table', [verificaToken], tablesController.generateTable);

module.exports = router;