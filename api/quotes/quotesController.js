const mssql = require('mssql');

module.exports.createQuote = (request, response) => {
    // const user = request.usuario;
    const req = new mssql.Request();
    const bd = request.body;
    bd.cliente = String(bd.cliente).toLocaleUpperCase();
    // const seller = user.nombre + " " + user.apellido;
    const seller = 'Alfredo Orjuela'
    const user = { "id_usuario": 1 };

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
    //const user = request.usuario;
    const req = new mssql.Request();
    const bd = request.body;
    console.log(bd);
    const user = { "id_usuario": 1 };
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

    const sql = `SELECT * FROM Cotizacionesdetalle WHERE id_cotizacion = ${idquote};`;

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
            list: result.recordsets[0]
        });

    });

};

module.exports.getBrands = (request, response) => {
    const req = new mssql.Request();

    const sql = `SELECT * FROM Proveedores WHERE estado = 1;`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };


        const message = 'GET LISTA MARCAS';


        response.status(200).json({
            message,
            list: result.recordsets[0]
        });

    });

};

module.exports.getRef = (request, response) => {
    const req = new mssql.Request();
    const brand = request.params.brand;

    const sql = `
    SELECT ld.id_detalle, ld.part_number, h.descripcion  FROM Zona_Proveedor zp
    INNER JOIN Listadetalle ld
    ON zp.id_zm = ld.id_zp
    INNER JOIN Herramientas h
    ON H.id_herramienta = ld.id_herramienta
    WHERE zp.id_proveedor = '${brand}';
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