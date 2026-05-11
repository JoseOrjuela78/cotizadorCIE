const sql = require('mssql');
const logger = require('./logger');
const databaseFuncs = {};

const sqlConfig = {
    user: 'sa',
    password: '123456',
    database: 'CotizadorV4',
    server: '127.0.0.1',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false, // for azure
        trustServerCertificate: false, // change to true for local dev / self-signed certs
        enableArithAbort: false
    }
}


databaseFuncs.executeQuery = async(sqlquery, func, database = 'CotizadorV4') => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        sqlConfig.database = database;
        await sql.connect(sqlConfig)
        const result = await sql.query(sqlquery);
        await sql.close();
        return result
    } catch (err) {
        logger.error(`${new Date().toString()} Error executeQuery connetion ${func} - ${err}`);
    }

}



module.exports = databaseFuncs;