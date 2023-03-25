const mssql = require('mssql');

module.exports.createQuote = (request, response) => {
    const user = request.usuario;
    const req = new mssql.Request();
    const bd = request.body;
    bd.cliente = String(bd.cliente).toLocaleUpperCase();
    const seller = user.nombre + " " + user.apellido;

    const sql = `EXEC PR_CREATE_COTIZACION '${bd.cliente}','${seller}',${user.id_usuario},'@id_cotizacion OUTPUT','@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = parseInt(result.recordsets[0][0].COD);
        const message = result.recordsets[1][0].MSG;
        const id_quote = result.recordsets[2][0].id_cotizacion;


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
    const sql = `EXEC PR_CREATE_COTIZACION_DET ${bd.id_cotizacion},${bd.id_detalle},${bd.cantidad},${bd.largoCM},${bd.anchoCM},${bd.altoCM},${bd.peso_kg},${user.id_usuario},'@id_cotdetalle OUTPUT','@code OUTPUT', '@message OUTPUT';`;
    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };


        const code = parseInt(result.recordsets[0][0].COD);
        const message = result.recordsets[1][0].MSG;
        const id_quote_detail = result.recordsets[2][0].id_cotdetalle;

        response.status(code).json({
            message,
            id_quote_detail
        });



    });


}

module.exports.updateQuoteDetail = (request, response) => {

    const req = new mssql.Request();
    const bd = request.body;
    const sql = `EXEC PR_UPDATE_DETQUOTE ${bd.id_cotdetalle}, ${bd.cantidad},${bd.largoCM},${bd.anchoCM},${bd.altoCM},${bd.peso_kg},'@code OUTPUT', '@message OUTPUT';`;
    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };



        const code = parseInt(result.recordsets[0][0].COD);
        const message = result.recordsets[1][0].MSG;
        const data = JSON.stringify(result.recordsets[2][0]);

        response.status(code).json({
            message,
            data
        });



    });


}


module.exports.deleteQuoteDetail = (request, response) => {
    const req = new mssql.Request();
    const id = request.params.id;

    const sql = `DELETE FROM Cotizacionesdetalle WHERE id_cotdetalle = ${id};`;
    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };


        const code = 200;
        const message = "ID BORRADO";


        response.status(code).json({
            message
        });



    });


}

module.exports.generateQuote = (request, response) => {

    const req = new mssql.Request();
    const bd = request.body;
    const sql = `EXEC PR_COTIZAR ${bd.id_detalle}, ${bd.id_cotdetalle} ,'@code OUTPUT', '@message OUTPUT'`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = parseInt(result.recordsets[0][0].COD);
        const message = result.recordsets[1][0].MSG;
        const quote_detail = result.recordsets[2][0];

        response.status(code).json({
            message,
            quote_detail
        });



    });

}

module.exports.getQuotes = (request, response) => {
    const req = new mssql.Request();
    const idquote = parseInt(request.params.idquote);

    const sql = `EXEC PR_DETQUOTE ${idquote} ,'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };


        const message = 'GET LISTA COTIZACIONES';

        response.status(200).json({
            message,
            list: result.recordsets[0],
            total: result.recordsets[1][0].TOTAL
        });

    });

};

module.exports.getRef = (request, response) => {
    const req = new mssql.Request();
    const key = request.params.key;

    const sql = `
    SELECT
    ld.id_detalle, 
    ld.part_number,
    h.descripcion,
    p.proveedor
    FROM Listadetalle ld
    INNER JOIN Herramientas h
    ON ld.id_herramienta = h.id_herramienta
    INNER JOIN Zona_Proveedor zp
    ON ld.id_zp = zp.id_zp
    INNER JOIN Proveedores p
    ON zp.id_proveedor = p.id_proveedor
    WHERE part_number LIKE '${key}%';
    `;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };


        const message = 'GET LISTA REFERENCIAS';


        response.status(200).json({
            message,
            list: result.recordsets[0]
        });

    });

};

module.exports.closerQuote = (request, response) => {

    const req = new mssql.Request();
    const bd = request.body;

    const sql = `EXEC PR_INSERT_TOTALES ${bd.id_cotizacion}, '@code OUTPUT', '@message OUTPUT';`;
    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = parseInt(result.recordsets[0][0].COD);
        const message = result.recordsets[1][0].MSG;
        const rows = JSON.stringify(result.recordsets[2]);
        const total = result.recordsets[3][0].TOTAL;

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
    const sql = `EXEC PR_UPDATE_TOTALES ${bd.id_cotTotales},${bd.id_cotizacion},'@code OUTPUT', '@message OUTPUT'`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = parseInt(result.recordsets[0][0].COD);
        const message = result.recordsets[1][0].MSG;
        const rows = JSON.stringify(result.recordsets[2]);

        response.status(code).json({
            message,
            rows
        });



    });

}

module.exports.Cpeso = (request, response) => {

    const req = new mssql.Request();
    const bd = request.body;

    const sql = `EXEC PR_CPESO ${bd.cantidad}, ${bd.peso_kg},${bd.largoCM},${bd.anchoCM},${bd.altoCM},'@code OUTPUT', '@message OUTPUT'`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };



        const code = parseInt(result.recordsets[0][0].COD);
        const message = result.recordsets[1][0].MSG;

        response.status(code).json({
            code,
            message
        });



    });

}