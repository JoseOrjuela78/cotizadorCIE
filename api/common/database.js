const sql = require('mssql');
const logger = require('./logger');
const databaseFuncs = {};

const sqlConfig = {
    user: 'sa',
    password: '123456',
    database: 'CotizadorV3',
    server: '192.168.20.46',
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


databaseFuncs.executeQuery = async(sqlquery, func) => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(sqlConfig)
        const result = await sql.query(sqlquery);
        await sql.close();
        return result
    } catch (err) {
        logger.error(`${new Date().toString()} Error executeQuery connetion ${func} - ${err}`);
    }

}



module.exports = databaseFuncs;