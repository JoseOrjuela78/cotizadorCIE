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


module.exports = operations;