
const logger = require('../common/logger');
const operations = require('./reports.Operations');

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

module.exports.reportCSV = (request, response) => { 
    const body = request.body;

    logger.info(`${new Date().toString()}${request.method}-${request.path}-generar csv`);
           
    operations.createCsv(body).then((result) => {
    
        const code = result.code;
        const message = `reporte csv generado`;
        const datos = result.csv;
        
        response.status(code).json({
            message,
            datos
        });

    });
};