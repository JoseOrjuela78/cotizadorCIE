const databaseFuncs = require('../common/database');
const operations = {};


operations.uploadTables = async(table, usuario) => {


    const sql = `EXEC PR_CARGA_MASIVA '${table}',${usuario},'@Total_rows OUTPUT','@code OUTPUT', '@message OUTPUT';`;


    return databaseFuncs.executeQuery(sql, 'uploadTables').then(result => {
        return result
    });
}

/** eliminar */

operations.generateTable = async(table) => {

    const sql = `SELECT * FROM ${table} WHERE estado = 1`;

    return databaseFuncs.executeQuery(sql, 'generateTable').then(result => {
        return result
    });
}


module.exports = operations;