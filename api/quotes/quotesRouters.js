const { Router } = require('express');
const router = Router();
const quotesController = require('./quotesController');
const { verificaToken } = require('../common/authorization');


router.post('/api/quote', [verificaToken], quotesController.createQuote);
router.post('/api/quote-detail', [verificaToken], quotesController.createQuoteDetail);
router.put('/api/quote-detail', [verificaToken], quotesController.updateQuoteDetail);
router.delete('/api/quote-delete/:id', [verificaToken], quotesController.deleteQuoteDetail);
router.put('/api/quote-generate', [verificaToken], quotesController.generateQuote);
router.get('/api/quote-get/:idquote', [verificaToken], quotesController.getQuotes);
router.get('/api/refs-get/:key', [verificaToken], quotesController.getRef);
router.post('/api/quote-close', [verificaToken], quotesController.closerQuote);
router.put('/api/quote-close-row', [verificaToken], quotesController.closeQuoteRows);
router.put('/api/quote-cpeso', [verificaToken], quotesController.Cpeso);
router.get('/api/quote-totaldto/:idquote', [verificaToken], quotesController.getTotalDto);
router.get('/api/quote-detail/:idquote', [verificaToken], quotesController.getQuoteDetail);
router.get('/api/quotes', [verificaToken], quotesController.getidQuotes);
router.get('/api/brands', [verificaToken], quotesController.getBrands);


module.exports = router;