const { Router } = require('express');
const router = Router();
const quotesController = require('./quotesController');
const { verificaToken } = require('../common/authorization');


router.post('/api/quote', /*[verificaToken],*/ quotesController.createQuote);
router.post('/api/quote-detail', /*[verificaToken],*/ quotesController.createQuoteDetail);
router.put('/api/quote-generate' /*, [verificaToken]*/ , quotesController.generateQuote);
router.get('/api/quote-get/:idquote', /*[verificaToken],*/ quotesController.getQuotes);

router.get('/api/brands-get', /*[verificaToken],*/ quotesController.getBrands);
router.get('/api/refs-get/:brand', /*[verificaToken],*/ quotesController.getRef);


module.exports = router;