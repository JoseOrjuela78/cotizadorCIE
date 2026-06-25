const databaseFuncs = require('../common/database');
const operations = {};
const utils = require('../common/utils');

operations.reportStock = async (body) => {

    const sql = `EXECUTE sp_Obtener_Reporte_Medellin ${body.ordenarPor},${body.dirOrden},${body.pageNumer},${body.pageSize},${body.marca},${body.referencia},${body.descripcion},${null},${null},${body.almacen},${body.fechaEI},${body.fechaEF},${body.fechaSI},${body.fechaSF},${body.operacion}`;
    console.log(sql);
    return databaseFuncs.executeQuery(sql, 'reportStock', 'EMP001_GREP').then(result => {
        return result
    });
};

operations.reportStockCIE = async (body) => {

    const sql = `EXECUTE sp_Obtener_Reporte_Stock ${body.ordenarPor},${body.dirOrden},${body.pageNumer},${body.pageSize},${body.marca},${body.referencia},${body.descripcion},${null},${null},${body.almacen},${body.fechaEI},${body.fechaEF},${body.fechaSI},${body.fechaSF},${body.operacion}`;
    console.log(sql);
    return databaseFuncs.executeQuery(sql, 'reportStock', 'EMP001_GREP').then(result => {
        return result
    });
};

operations.createCsv = async (datos) => {

  const csv = await utils.createCSV(datos);
    return {
        code:200,
        csv
    };
};

operations.getBodegas = async (bd) => {
    try {

        const result = await databaseFuncs.executeStoredProcedure(
            'PR_GET_BODEGAS',
            {
                BOD: { type: sql.VarChar, value: bd.bodega }
            },
            {
                STATUS_CODE: sql.Int,
                STATUS_DESC: sql.VarChar(500)
            },
            'EMP001_GREP'
        );

        const bodegas = result.recordset[0];
        return {
            status_code: result.output.STATUS_CODE,
            status_desc: result.output.STATUS_DESC,
            bodegas
        };

    } catch (error) {
        return {
            status_code: error.code,
            status_desc: error.message,
        };

    }
}

module.exports = operations;