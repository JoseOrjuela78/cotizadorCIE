const mssql = require('mssql');
const logger = require('../common/logger');

module.exports.createQuote = (request, response) => {
    const user = request.usuario;
    const req = new mssql.Request();
    const bd = request.body;
    bd.cliente = String(bd.cliente).toLocaleUpperCase();
    const seller = user.nombre + " " + user.apellido;

    logger.info(`${new Date().toString()} Entry createQuote body : ${bd} seller : ${seller}`);

    const sql = `EXEC PR_CREATE_COTIZACION '${bd.cliente}','${seller}',${user.id_usuario},'@id_cotizacion OUTPUT','@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error createQuote - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = parseInt(result.recordsets[0][0].COD);
        const message = result.recordsets[1][0].MSG;
        const id_quote = result.recordsets[2][0].id_cotizacion;

        logger.info(`${new Date().toString()} Result createQuote - id_quote : ${id_quote}`);
        response.status(code).json({
            message,
            id_quote
        });



    });

};

module.exports.createQuoteDetail = (request, response) => {
    const user = request.usuario;
    const req = new mssql.Request();
    const bd = request.body;
    logger.info(`${new Date().toString()} Entry createQuoteDetail body : ${bd}`);

    const sql = `EXEC PR_CREATE_COTIZACION_DET ${bd.id_cotizacion},${bd.id_detalle},${bd.cantidad},${bd.largoCM},${bd.anchoCM},${bd.altoCM},${bd.peso_kg},${user.id_usuario},'@id_cotdetalle OUTPUT','@code OUTPUT', '@message OUTPUT';`;
    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error createQuoteDetail - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };


        const code = parseInt(result.recordsets[0][0].COD);
        const message = result.recordsets[1][0].MSG;
        const id_quote_detail = result.recordsets[2][0].id_cotdetalle;

        logger.info(`${new Date().toString()} Result createQuoteDetail - id_quote_detail: ${id_quote_detail}`);

        response.status(code).json({
            message,
            id_quote_detail
        });



    });


}

module.exports.updateQuoteDetail = (request, response) => {

    const req = new mssql.Request();
    const bd = request.body;

    logger.info(`${new Date().toString()} Entry updateQuoteDetail body: ${bd}`);

    const sql = `EXEC PR_UPDATE_DETQUOTE ${bd.id_cotdetalle}, ${bd.cantidad},${bd.largoCM},${bd.anchoCM},${bd.altoCM},${bd.peso_kg},'@code OUTPUT', '@message OUTPUT';`;
    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error updateQuoteDetail - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };



        const code = parseInt(result.recordsets[0][0].COD);
        const message = result.recordsets[1][0].MSG;
        const data = JSON.stringify(result.recordsets[2][0]);

        logger.info(`${new Date().toString()} Result updateQuoteDetail - result: ${data}`);

        response.status(code).json({
            message,
            data
        });

    });


}

module.exports.deleteQuoteDetail = (request, response) => {
    const req = new mssql.Request();
    const id = request.params.id;

    logger.info(`${new Date().toString()} Entry deleteQuoteDetail id: ${id}`);

    const sql = `DELETE FROM Cotizacionesdetalle WHERE id_cotdetalle = ${id};`;
    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error deleteQuoteDetail - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };


        const code = 200;
        const message = "ID BORRADO";

        logger.info(`${new Date().toString()} Result deleteQuoteDetail - code: ${code}`);
        response.status(code).json({
            message
        });



    });


}

module.exports.generateQuote = (request, response) => {

    const req = new mssql.Request();
    const bd = request.body;

    logger.info(`${new Date().toString()} Entry generateQuote body: ${bd}`);

    const sql = `EXEC PR_COTIZAR ${bd.id_detalle}, ${bd.id_cotdetalle} ,'@code OUTPUT', '@message OUTPUT'`;
    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error generateQuote - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = parseInt(result.recordsets[0][0].COD);
        const message = result.recordsets[1][0].MSG;
        const quote_detail = result.recordsets[2][0];

        logger.info(`${new Date().toString()} Result generateQuote - quote_detail: ${quote_detail}`);

        response.status(code).json({
            message,
            quote_detail
        });



    });

}

module.exports.getQuotes = (request, response) => {
    const req = new mssql.Request();
    const idquote = parseInt(request.params.idquote);

    logger.info(`${new Date().toString()} Entry getQuotes idquote: ${idquote}`);

    const sql = `EXEC PR_DETQUOTE ${idquote} ,'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error getQuotes - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };


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
    const req = new mssql.Request();
    const key = request.params.key;

    logger.info(`${new Date().toString()} Entry getRef key: ${key}`);

    const sql = `
    SELECT
    ld.id_detalle, 
    ld.part_number,
    ld.herramienta,
    p.proveedor
    FROM Listadetalle ld
    INNER JOIN Proveedores p
    ON p.id_proveedor = ld.proveedor
    WHERE ld.part_number LIKE '${key}%';
    `;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error getRef - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };


        const message = 'GET LISTA REFERENCIAS';
        const list = result.recordsets[0];

        logger.info(`${new Date().toString()} Result getRef - ${list}`);

        response.status(200).json({
            message,
            list
        });

    });

};

module.exports.closerQuote = (request, response) => {

    const req = new mssql.Request();
    const bd = request.body;
    logger.info(`${new Date().toString()} Entry closerQuote bdy: ${bd}`);
    const sql = `EXEC PR_INSERT_TOTALES ${bd.id_cotizacion}, '@code OUTPUT', '@message OUTPUT';`;
    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error closerQuote - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

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



    });


}

module.exports.closeQuoteRows = (request, response) => {

    const req = new mssql.Request();
    const bd = request.body;
    logger.info(`${new Date().toString()} Entry closeQuoteRows body: ${bd}`);
    const sql = `EXEC PR_UPDATE_TOTALES ${bd.id_cotTotales},${bd.id_cotizacion},'@code OUTPUT', '@message OUTPUT'`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error closeQuoteRows - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = parseInt(result.recordsets[0][0].COD);
        const message = result.recordsets[1][0].MSG;
        const rows = JSON.stringify(result.recordsets[2]);

        logger.info(`${new Date().toString()} Result closeQuoteRows - rows: ${rows}`);

        response.status(code).json({
            message,
            rows
        });



    });

}

module.exports.getTotalDto = (request, response) => {
    const req = new mssql.Request();
    const idquote = parseInt(request.params.idquote);
    logger.info(`${new Date().toString()} Entry getTotalDto idquote: ${idquote}`);

    const sql = `SELECT SUM(Cpreciototal) as 'TotalDto' FROM CotizacionesTotales WHERE id_cotizacion = ${idquote};`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error getTotalDto - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const totalDto = result.recordset[0].TotalDto;
        const message = 'GET TOTAL CON DESCUENTO';

        logger.info(`${new Date().toString()} Result getTotalDto - totalDto ${totalDto}`);

        response.status(200).json({
            message,
            totalDto

        });

    });

};

module.exports.Cpeso = (request, response) => {

    const req = new mssql.Request();
    const bd = request.body;
    logger.info(`${new Date().toString()} Entry Cpeso body: ${bd}`);

    const sql = `EXEC PR_CPESO ${bd.id_detalle}, ${bd.cantidad}, ${bd.peso_kg},${bd.largoCM},${bd.anchoCM},${bd.altoCM},'@code OUTPUT', '@message OUTPUT'`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error Cpeso - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };



        const code = parseInt(result.recordsets[0][0].COD);
        const message = result.recordsets[1][0].MSG;

        logger.info(`${new Date().toString()} Result Cpeso - code :${code}- message: ${message}`);

        response.status(code).json({
            code,
            message
        });



    });

};

module.exports.getSellers = (request, response) => {
    const req = new mssql.Request();
    logger.info(`${new Date().toString()} Entry getSellers`);

    const sql = `select DISTINCT (vendedor), id_usuario from Cotizaciones  ORDER BY vendedor;`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error getSellers - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };


        const message = 'GET LISTA VENDEDORES';
        const list = result.recordsets[0];

        logger.info(`${new Date().toString()} Result getSellers - list: ${list}`);


        response.status(200).json({
            message,
            list
        });

    });

};

module.exports.getCustomers = (request, response) => {
    const req = new mssql.Request();
    const idUsuario = request.params.id;
    logger.info(`${new Date().toString()} Entry getCustomers idUsuario: ${idUsuario}`);

    const sql = `select DISTINCT (CLIENTE) from Cotizaciones WHERE id_usuario = ${idUsuario} ORDER BY CLIENTE;`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error getCustomers - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };


        const message = 'GET LISTA CLIENTES';
        const list = result.recordsets[0];

        logger.info(`${new Date().toString()} Result getCustomers - ${list}`);


        response.status(200).json({
            message,
            list
        });

    });

};

module.exports.getidQuotes = (request, response) => {

    const req = new mssql.Request();
    const cliente = request.params.cl;
    const idUsuario = parseInt(request.params.id);

    logger.info(`${new Date().toString()} Entry getidQuotes cliente: ${cliente}- idUsuario:${idUsuario}`);

    const sql = `SELECT DISTINCT(c.id_cotizacion) as id_cotizacion FROM Cotizaciones c INNER JOIN Cotizacionesdetalle cd ON c.id_cotizacion = cd.id_cotizacion WHERE UPPER(c.cliente) = UPPER('${cliente}') AND c.id_usuario = ${idUsuario} ORDER BY c.id_cotizacion DESC;`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error getidQuotes - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const message = `GET TABLA Cotizaciones`
        const data = JSON.stringify(result.recordset);

        logger.info(`${new Date().toString()} Result getidQuotes - data:${data}`);

        response.status(200).json({
            message,
            data

        });

    });

};

module.exports.getQuoteDetail = (request, response) => {
    const req = new mssql.Request();
    const idquote = parseInt(request.params.idquote);
    logger.info(`${new Date().toString()} Entry getQuoteDetail idquote:${idquote}`);

    const sql = `EXEC PR_GET_QUOTE ${idquote},'@code OUTPUT', '@message OUTPUT'`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error getQuoteDetail - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const codeIde = result.recordsets[0][0].COD || '0';

        if (codeIde == '404') {

            const message = result.recordsets[1][0].MSG;
            logger.info(`${new Date().toString()} getQuoteDetail - message: ${message} - codeIde: ${codeIde}`);

            response.status(200).json({
                message
            });

        } else {
            const quoteDta = JSON.stringify(result.recordset[0]);
            const quoteDetail = JSON.stringify(result.recordsets[1]);
            const quoteTotalZona = JSON.stringify(result.recordsets[2]);
            const quoteTotal = JSON.stringify(result.recordsets[3]);
            const quoteTotalDto = JSON.stringify(result.recordsets[4]);
            const code = parseInt(result.recordsets[5][0].COD);
            const message = result.recordsets[6][0].MSG;

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

    });

};

module.exports.getBrands = (request, response) => {
    const req = new mssql.Request();
    const key = request.params.key;

    logger.info(`${new Date().toString()} Entry getBrands key:${key}`);

    const sql = `SELECT * FROM Proveedores ORDER BY id_proveedor ASC;`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error getBrands - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };


        const message = 'GET LISTA MARCAS';
        const list = result.recordsets[0];

        logger.info(`${new Date().toString()} Result getBrands - ${list}`);


        response.status(200).json({
            message,
            list
        });

    });

};