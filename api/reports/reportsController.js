
const logger = require('../common/logger');
const operations = require('./reports.Operations');
const AppError = require('../common/appError');

module.exports.reportStock =  (request, response) => {

    const body = request.body;

    const searchFilters = {
        "ordenarPor"    : `'${"Marca"}'`,
        "dirOrden"      : `'${"ASC"}'`,
        "pageNumer"     : 1,
        "pageSize"      : null,
        "almacen"       : null,
        "descripcion"   : null,
        "fechaEF"       : null,
        "fechaEI"       : null,
        "fechaSF"       : null,
        "fechaSI"       : null,
        "marca"         : null,
        "referencia"    : null,
        "operacion"     : 3
    };

    for (const key in searchFilters) {
        if (body[key]) {
            if (typeof body[key] === 'string')searchFilters[key] = `'${body[key]}'`;
            if (typeof body[key] === 'number')searchFilters[key] = body[key];
        };
    };

    logger.info(`${new Date().toString()}${request.method}-${request.path}-${JSON.stringify(searchFilters)}`);

    operations.reportStock(searchFilters).then((result) => {
        
        const code = 200;
        const message = `reporte de stock medellin obtenido exitosamente`;
        const TotalRegistros = result.recordset[0].TotalRegistros;
        const datos = result.recordsets[1];
        
        logger.info(`${new Date().toString()} Result reportStockMedellin - ${message}`);

        response.status(code).json({
            message,
            TotalRegistros,
            datos
        });


    })
    
};

module.exports.reportStockCIE = (request, response) => {

    const body = request.body;

    const searchFilters = {
        "ordenarPor": `'${"Annio"}'`,
        "dirOrden": `'${"ASC"}'`,
        "pageNumer": 1,
        "pageSize": null,
        "almacen": null,
        "descripcion": null,
        "annioI": null,
        "annioF": null,
        "mesI": null,
        "mesF": null,
        "marca": null,
        "referencia": null,
        "operacion": 3
    };

    for (const key in searchFilters) {
        if (body[key]) {
            if (typeof body[key] === 'string') searchFilters[key] = `'${body[key]}'`;
            if (typeof body[key] === 'number') searchFilters[key] = body[key];
        };
    };

    logger.info(`${new Date().toString()}${request.method}-${request.path}-${JSON.stringify(searchFilters)}`);

    operations.reportStockCIE(searchFilters).then((result) => {

        const code = 200;
        const message = `reporte de stock medellin obtenido exitosamente`;
        const TotalRegistros = result.recordset[0].TotalRegistros;
        const datos = result.recordsets[1];

        logger.info(`${new Date().toString()} Result reportStockMedellin - ${message}`);

        response.status(code).json({
            message,
            TotalRegistros,
            datos
        });


    })

};

module.exports.reportCSV = (request, response) => { 
    const body = request.body;

    logger.info(`${new Date().toString()}${request.method}-${request.path}-generar csv`);
           
    operations.createCsv(body).then((result) => {
    
        const code = result.code;
        const csv = result.csv; 
        const fecha = new Date();
        const codigo = fecha.toISOString().replace(/[-:.TZ]/g, '');
        const filename = `${codigo}.csv`;

        // Configurar headers para descarga
        response.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        response.setHeader('Content-Type', 'text/csv');
             
        response.status(code).send(csv);

    });
};

module.exports.getBodegas = async (request, response) => {

    const bodega = request.params.bod;
    logger.info(`Entry getBodegas with: ${JSON.stringify({ bodega })})}`);

    try {

        const result = await operations.getBodegas({ bodega });

        if (result.status_code != 200) throw new AppError(result.status_desc, result.status_code);

        logger.info(`${JSON.stringify(result)}`);

        response.status(result.status_code).json({
            ok: true,
            msg: result.status_desc,
            bodegas: result.bodegas
        });

    } catch (error) {
        logger.error(`${error}`);
        response.status(error.statusCode).json({
            ok: false,
            msg: error.message
        });
    };

};