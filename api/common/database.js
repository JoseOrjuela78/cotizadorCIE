const sql = require('mssql');
const logger = require('./logger');
const databaseFuncs = {};

const sqlConfig = {
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE,
    server: process.env.SERVER,
    port: 49698,
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

databaseFuncs.executeStoredProcedure = async(spName, inputParams = {}, outputParams = {}, database = 'CotizadorV4') =>{
    try {
    // make sure that any items are correctly URL encoded in the connection string
    sqlConfig.database = database;
    const pool = await sql.connect(sqlConfig);
    const request = pool.request();

    // Entradas
    for (const [name, { type, value }] of Object.entries(inputParams)) {
        request.input(name, type, value);
    }

    // Salidas
    for (const [name, type] of Object.entries(outputParams)) {
        request.output(name, type);
    }

    const result = await request.execute(spName);
        await sql.close();    
        return result;
        
    } catch (err) {
        logger.error(`${new Date().toString()} Error executeStoredProcedure ${spName} - ${err}`);

    }
};

module.exports = databaseFuncs;