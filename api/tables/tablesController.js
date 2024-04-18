const logger = require('../common/logger');
const mssql = require('mssql');
const operations = require('./tablesOperations');



module.exports.uploadTable = (request, response) => {

    const table = request.params.table;
    const user = request.usuario;

    operations.uploadTables(table, parseInt(user.id_usuario)).then((result) => {


        const code = parseInt(result.recordsets[0][0].COD);
        const message = result.recordsets[1][0].MSG;
        const total_rows = result.recordsets[2][0].Total_rows;

        response.status(200).json({
            code,
            message,
            total_rows
        });

    })

};


module.exports.generateTable = (request, response) => {

    const table = request.params.table;
    logger.info(`${new Date().toString()} Entry generateTable table:${table}`);

    operations.generateTable(table).then((result) => {

        const message = `GET TABLA ${table}`
        const data = JSON.stringify(result.recordset);
        logger.info(`${new Date().toString()} Result generateTable - data: ${data}`);

        response.status(200).json({
            message,
            data
        });

    })

};