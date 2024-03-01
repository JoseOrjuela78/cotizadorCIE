const logger = require('../common/logger');
const operations = require('./quotesOperations');


module.exports.createQuote = (request, response) => {
    const user = request.usuario;
    const bd = request.body;
    bd.cliente = String(bd.cliente).toLocaleUpperCase();
    const seller = user.nombre + " " + user.apellido;

    logger.info(`${new Date().toString()} Entry createQuote body : ${bd} seller : ${seller}`);


    operations.createQuote(user, seller, bd).then((result) => {

        const code = parseInt(result.recordsets[0][0].COD);
        const message = result.recordsets[1][0].MSG;
        const id_quote = result.recordsets[2][0].id_cotizacion;

        logger.info(`${new Date().toString()} Result createQuote - id_quote : ${id_quote}`);
        response.status(code).json({
            message,
            id_quote
        });


    })

};

module.exports.createQuoteDetail = (request, response) => {
    const user = request.usuario;
    const bd = request.body;
    logger.info(`${new Date().toString()} Entry createQuoteDetail body : ${bd}`);

    operations.createQuoteDetail(user, bd).then((result) => {

        const code = parseInt(result.recordsets[0][0].COD);
        const message = result.recordsets[1][0].MSG;
        const id_quote_detail = result.recordsets[2][0].id_cotdetalle;

        logger.info(`${new Date().toString()} Result createQuoteDetail - id_quote_detail: ${id_quote_detail}`);

        response.status(code).json({
            message,
            id_quote_detail
        });

    })

}

module.exports.updateQuoteDetail = (request, response) => {

    const bd = request.body;

    logger.info(`${new Date().toString()} Entry updateQuoteDetail body: ${bd}`);

    operations.updateQuoteDetail(bd).then((result) => {

        const code = parseInt(result.recordsets[0][0].COD);
        const message = result.recordsets[1][0].MSG;
        const data = JSON.stringify(result.recordsets[2][0]);

        logger.info(`${new Date().toString()} Result updateQuoteDetail - result: ${data}`);

        response.status(code).json({
            message,
            data
        });

    })

}

module.exports.deleteQuoteDetail = (request, response) => {

    const id = request.params.id;
    logger.info(`${new Date().toString()} Entry deleteQuoteDetail id: ${id}`);

    operations.deleteQuoteDetail(id).then((result) => {

        const code = 200;
        const message = "ID BORRADO";

        logger.info(`${new Date().toString()} Result deleteQuoteDetail - code: ${code}`);
        response.status(code).json({
            message
        });

    })

}

module.exports.generateQuote = (request, response) => {

    const bd = request.body;

    logger.info(`${new Date().toString()} Entry generateQuote body: ${bd}`);

    operations.generateQuote(bd).then((result) => {

        const code = parseInt(result.recordsets[0][0].COD);
        const message = result.recordsets[1][0].MSG;
        const quote_detail = result.recordsets[2][0];

        logger.info(`${new Date().toString()} Result generateQuote - quote_detail: ${quote_detail}`);

        response.status(code).json({
            message,
            quote_detail
        });


    })

}

module.exports.getQuotes = (request, response) => {

    const idquote = parseInt(request.params.idquote);

    logger.info(`${new Date().toString()} Entry getQuotes idquote: ${idquote}`);

    operations.getQuotes(idquote).then((result) => {

        const message = 'GET LISTA COTIZACIONES';
        const list = result.recordsets[0];
        const total = result.recordsets[1][0].TOTAL;

        logger.info(`${new Date().toString()} Result getQuotes - list: ${list}- total: ${total}`);

        response.status(200).json({
            message,
            list,
            total
        });

    });

};

module.exports.getRef = (request, response) => {

    const key = request.params.key;

    logger.info(`${new Date().toString()} Entry getRef key: ${key}`);

    operations.getRef(key).then((result) => {
        const message = 'GET LISTA REFERENCIAS';
        const list = result.recordsets[0];
        logger.info(`${new Date().toString()} Result getRef - ${list}`);
        response.status(200).json({
            message,
            list
        });
    })


};


module.exports.closerQuote = (request, response) => {

    const bd = request.body;
    logger.info(`${new Date().toString()} Entry closerQuote bdy: ${bd}`);

    operations.closerQuote(bd).then((result) => {

        const code = parseInt(result.recordsets[0][0].COD);
        const message = result.recordsets[1][0].MSG;
        const rows = JSON.stringify(result.recordsets[2]);
        const total = result.recordsets[3][0].TOTAL;

        logger.info(`${new Date().toString()} Result closerQuote - rows: ${rows} - total: ${total}`);

        response.status(code).json({
            message,
            rows,
            total
        });


    })

}

module.exports.closeQuoteRows = (request, response) => {

    const bd = request.body;
    logger.info(`${new Date().toString()} Entry closeQuoteRows body: ${bd}`);

    operations.closeQuoteRows(bd).then((result) => {

        if (result === null) {

            response.status(200).json({
                message: null,
                rows: null
            });

            return

        };
        const code = parseInt(result.recordsets[0][0].COD);
        const message = result.recordsets[1][0].MSG;
        const rows = JSON.stringify(result.recordsets[2]);

        logger.info(`${new Date().toString()} Result closeQuoteRows - rows: ${rows}`);

        response.status(code).json({
            message,
            rows
        });


    })

}

module.exports.getTotalDto = (request, response) => {

    const idquote = parseInt(request.params.idquote);
    logger.info(`${new Date().toString()} Entry getTotalDto idquote: ${idquote}`);

    operations.getTotalDto(idquote).then((result) => {
        console.log(result);

        const totalDto = result.recordset;
        const message = 'GET TOTAL CON DESCUENTO';

        logger.info(`${new Date().toString()} Result getTotalDto - totalDto ${totalDto}`);

        response.status(200).json({
            message,
            totalDto

        });


    })


};

module.exports.Cpeso = (request, response) => {

    const bd = request.body;
    logger.info(`${new Date().toString()} Entry Cpeso body: ${bd}`);

    operations.Cpeso(bd).then((result) => {

        const code = parseInt(result.recordsets[0][0].COD);
        const message = result.recordsets[1][0].MSG;

        logger.info(`${new Date().toString()} Result Cpeso - code :${code}- message: ${message}`);

        response.status(code).json({
            code,
            message
        });

    })

};

module.exports.getSellers = (request, response) => {

    logger.info(`${new Date().toString()} Entry getSellers`);

    operations.getSellers().then((result) => {

        const message = 'GET LISTA VENDEDORES';
        const list = result.recordsets[0];

        logger.info(`${new Date().toString()} Result getSellers - list: ${list}`);

        response.status(200).json({
            message,
            list
        });

    })

};

module.exports.getCustomers = (request, response) => {
    const idUsuario = request.params.id;
    logger.info(`${new Date().toString()} Entry getCustomers idUsuario: ${idUsuario}`);

    operations.getCustomers(idUsuario).then((result) => {

        const message = 'GET LISTA CLIENTES';
        const list = result.recordsets[0];

        logger.info(`${new Date().toString()} Result getCustomers - ${list}`);

        response.status(200).json({
            message,
            list
        });

    })

};

module.exports.getidQuotes = (request, response) => {

    const cliente = request.params.cl;
    const idUsuario = parseInt(request.params.id);

    logger.info(`${new Date().toString()} Entry getidQuotes cliente: ${cliente}- idUsuario:${idUsuario}`);

    operations.getidQuotes(cliente, idUsuario).then((result) => {

        const message = `GET TABLA Cotizaciones`
        const data = JSON.stringify(result.recordset);

        logger.info(`${new Date().toString()} Result getidQuotes - data:${data}`);

        response.status(200).json({
            message,
            data

        });

    })

};

module.exports.getQuoteDetail = (request, response) => {
    const idquote = parseInt(request.params.idquote);
    logger.info(`${new Date().toString()} Entry getQuoteDetail idquote:${idquote}`);

    operations.getQuoteDetail(idquote).then((result) => {

        const codeIde = result.recordsets[0][0].COD || '0';

        if (codeIde == '404') {

            const message = result.recordsets[1][0].MSG;
            logger.info(`${new Date().toString()} getQuoteDetail - message: ${message} - codeIde: ${codeIde}`);

            response.status(200).json({
                message
            });

        } else {

            global.quoteDta = JSON.stringify(result.recordset[0]);
            global.quoteDetail = JSON.stringify(result.recordsets[1]);
            global.quoteTotalZona = JSON.stringify(result.recordsets[2]);
            global.quoteTotal = JSON.stringify(result.recordsets[3]);
            global.quoteTotalDto = JSON.stringify(result.recordsets[4]);
            global.userData = JSON.stringify(result.recordsets[5][0]);
            const code = parseInt(result.recordsets[6][0].COD);
            const message = result.recordsets[7][0].MSG;

            logger.info(`${new Date().toString()} Result getQuoteDetail - quoteDta: ${quoteDta} - quoteDetail: ${quoteDetail}- quoteTotalZona: ${quoteTotalZona}- quoteTotal: ${quoteTotal}- quoteTotalDto: ${quoteTotalDto}`);

            response.status(code).json({
                message,
                quoteDta,
                quoteDetail,
                quoteTotalZona,
                quoteTotal,
                quoteTotalDto
            });

        };


    })

};

module.exports.getBrands = (request, response) => {
    const key = request.params.key;

    logger.info(`${new Date().toString()} Entry getBrands key:${key}`);

    operations.getBrands().then((result) => {

        const message = 'GET LISTA MARCAS';
        const list = result.recordsets[0];

        logger.info(`${new Date().toString()} Result getBrands - ${list}`);

        response.status(200).json({
            message,
            list
        });

    })

};




module.exports.rescue = (request, response) => {
    const status = parseInt(request.params.status);
    console.log({ status });
    if (status == null || status == undefined) {
        global.rescue = 0;
    } else {
        global.rescue = status;
    };

    response.status(200).json({
        message: `status : ${global.rescue} activada`
    });

};