const { Router } = require('express');
const router = Router();
const quotesController = require('./quotesController');
const { verificaToken } = require('../common/authorization');

const buildPdf = require('../common/libs/pdfkit.js');

router.get('/api/quotes/pdf', (request, response) => {


    const stream = response.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=invoice.pdf"
    })

    buildPdf((data) => stream.write(data),
        () => stream.end()
    );


});

router.get('/api/rescue/:status', [verificaToken], quotesController.rescue);
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
router.get('/api/quotes/:cl/:id', [verificaToken], quotesController.getidQuotes);
router.get('/api/brands', [verificaToken], quotesController.getBrands);
router.get('/api/sellers', [verificaToken], quotesController.getSellers);
router.get('/api/customers/:id', [verificaToken], quotesController.getCustomers);




module.exports = router;