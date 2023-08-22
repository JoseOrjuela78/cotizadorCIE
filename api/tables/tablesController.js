const logger = require('../common/logger');
const mssql = require('mssql');
const operations = require('./tablesOperations');

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



//herramientas
module.exports.inserttablas = (request, response) => {

    const table = request.params.table;
    const user = request.usuario;
    const req = new mssql.Request();
    const bd = request.body;
    const arr = JSON.parse(bd.data);

    logger.info(`${new Date().toString()} Entry inserttablas table:${table} - user: ${user}- body: ${bd}`);

    if (arr.length > 1000) {

        logger.error(`${new Date().toString()} Error inserttablas - carga superior a mil rows`);

        response.status(201).json({
            message: 'carga superior a mil rows'
        });
    } else if (arr.length < 0) {

        logger.error(`${new Date().toString()} Error inserttablas - carga sin datos`);

        response.status(500).json({
            message: 'carga sin datos'
        });


    } else {

        operations.truncateTables(table).then((result) => {

            if (table == "Listadetalle") {

                logger.info(`${new Date().toString()} Entry inserttablas Listadetalle`);

                operations.listaDetalle().then((result) => {

                    logger.info(`${new Date().toString()} Result Listadetalle - carga ${table} realizada`);

                    response.status(200).json({
                        message: `carga ${table} realizada`
                    });

                })
                return;


            } else if (table == "Monedas") {
                logger.info(`${new Date().toString()} Entry inserttablas Monedas`);
                arr.forEach(element => {

                    operations.monedas(element, user).then((result) => {

                        logger.info(`${new Date().toString()} Result Moneda ${element} - cargada`);

                    })
                });

                logger.info(`${new Date().toString()} Result Monedas - carga ${table} realizada`);

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Parametros") {
                logger.info(`${new Date().toString()} Entry inserttablas Parametros`);
                arr.forEach(element => {

                    operations.parametros(element, user).then((result) => {

                        logger.info(`${new Date().toString()} Result Parametro ${element} - cargada`);

                    })

                });

                logger.info(`${new Date().toString()} Result Parametros - carga ${table} realizada`);

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Proveedores") {
                logger.info(`${new Date().toString()} Entry inserttablas Proveedores`);
                arr.forEach(element => {

                    operations.proveedores(element, user).then((element) => {

                        logger.info(`${new Date().toString()} Result Proveedor ${element} - cargada`);

                    })

                });

                logger.info(`${new Date().toString()} Result Proveedores - carga ${table} realizada`);

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "RangosUSD") {
                logger.info(`${new Date().toString()} Entry inserttablas RangosUSD`);
                arr.forEach(element => {

                    operations.rangosUSD(element, user).then((result) => {

                        logger.info(`${new Date().toString()} Result RangosUsd ${element} - cargada`);

                    })

                });

                logger.info(`${new Date().toString()} Result RangosUSD - carga ${table} realizada`);

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;

            } else if (table == "Tarifas") {
                logger.info(`${new Date().toString()} Entry inserttablas Tarifas`);

                operations.tarifas().then((result) => {

                    logger.info(`${new Date().toString()} Result Tarifas - carga ${table} realizada`);

                    response.status(200).json({
                        message: `carga ${table} realizada`
                    });

                })


                return;
            } else if (table == "Trm") {
                logger.info(`${new Date().toString()} Entry inserttablas Trm`);
                arr.forEach(element => {

                    operations.trm(element, user).then((result) => {

                        logger.info(`${new Date().toString()} Result trm ${element} - cargada`);
                    })

                });
                logger.info(`${new Date().toString()} Result Trm - carga ${table} realizada`);
                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Usuarios") {
                logger.info(`${new Date().toString()} Entry inserttablas Usuarios`);
                arr.forEach(element => {

                    operations.usuarios(element).then((result) => {
                        logger.info(`${new Date().toString()} Result usuarios ${element} - cargada`);

                    })
                });
                logger.info(`${new Date().toString()} Result Usuarios - carga ${table} realizada`);
                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Vartarifas") {
                logger.info(`${new Date().toString()} Entry inserttablas Vartarifas`);
                arr.forEach(element => {
                    operations.varTarifas(element, user).then((result) => {

                        logger.info(`${new Date().toString()} Result Vartarifas ${element} - cargada`);

                    })

                });

                logger.info(`${new Date().toString()} Result Vartarifas - carga ${table} realizada`);

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Zonas") {
                logger.info(`${new Date().toString()} Entry inserttablas Zonas`);
                arr.forEach(element => {

                    operations.zonas(element, user).then((result) => {

                        logger.info(`${new Date().toString()} Result Zonas ${element} - cargada`);

                    })

                });
                logger.info(`${new Date().toString()} Result Zonas - carga ${table} realizada`);
                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "DescuentosVolumen") {
                logger.info(`${new Date().toString()} Entry inserttablas DescuentosVolumen`);

                operations.descuentosVolumen().then((result) => {

                    logger.info(`${new Date().toString()} Result DescuentosVolumen - carga ${table} realizada`);

                    response.status(200).json({
                        message: `carga ${table} realizada`
                    });


                })

                return;
            } else {
                logger.error(`${new Date().toString()} Error inserttablas  tabla no existe`);
                response.status(500).json({
                    message: 'table no existe'
                });
            };


        });

    }
};



module.exports.updateMoneda = (request, response) => {

    const user = request.usuario;
    const req = new mssql.Request();
    const idMoneda = request.params.id;
    const bd = request.body;

    logger.info(`${new Date().toString()} Entry updateMoneda estado:${estado}`);

    operations.updateMoneda(idMoneda, bd, user).then((result) => {

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

        logger.info(`${new Date().toString()} Result updateMoneda - code: ${code} - msg: ${msg}`);

        response.status(code).json({
            msg
        });


    })



    const sql = `EXEC PR_UPDATE_MONEDA '${idMoneda}','${bd.moneda}',${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error updateMoneda - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

        logger.info(`${new Date().toString()} Result updateMoneda - code: ${code} - msg: ${msg}`);

        response.status(code).json({
            msg
        });

    });



};

module.exports.updateParametro = (request, response) => {

    const user = request.usuario;
    const req = new mssql.Request();
    const idParametro = request.params.id;
    const bd = request.body;

    logger.info(`${new Date().toString()} Entry updateParametro idParametro:${idParametro}- body: ${bd}`);

    const sql = `EXEC PR_UPDATE_PARAMETRO ${idParametro},'${bd.descripcion}','${bd.valor}',${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error updateParametro - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

        logger.info(`${new Date().toString()} Result updateParametro - code: ${code} - msg: ${msg}`);

        response.status(code).json({
            msg
        });

    });

};

module.exports.updateProveedor = (request, response) => {

    const user = request.usuario;
    const req = new mssql.Request();
    const idProveedor = request.params.id;
    const bd = request.body;

    logger.info(`${new Date().toString()} Entry updateProveedor idProveedor:${idProveedor} - body: ${bd}`);

    const sql = `EXEC PR_UPDATE_PROVEEDORES '${idProveedor}','${bd.proveedor}',${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error updateProveedor - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

        logger.info(`${new Date().toString()} Result updateProveedor - code: ${code} - msg: ${msg}`);

        response.status(code).json({
            msg
        });

    });

};

module.exports.updateRango = (request, response) => {

    const user = request.usuario;
    const req = new mssql.Request();
    const idRango = request.params.id;
    const bd = request.body;

    logger.info(`${new Date().toString()} Entry updateRango idRango:${idRango} - body: ${bd}`);

    const sql = `EXEC PR_UPDATE_RANGO ${idRango},${bd.rango_min},${bd.rango_max},${bd.mark_up},${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error updateRango - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

        logger.info(`${new Date().toString()} Result updateRango - code: ${code} - msg: ${msg}`);
        response.status(code).json({
            msg
        });

    });

};

module.exports.updateTarifa = (request, response) => {

    const user = request.usuario;
    const req = new mssql.Request();
    const idTarifa = request.params.id;
    const bd = request.body;

    logger.info(`${new Date().toString()} Entry updateTarifa idTarifa: ${idTarifa} - body: ${bd}`);

    const sql = `EXEC PR_UPDATE_TARIFA ${idTarifa},${bd.id_zona},${bd.peso_min},${bd.peso_max},${bd.tarifa},${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error updateTarifa - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

        logger.info(`${new Date().toString()} Result updateTarifa - code: ${code} - msg: ${msg}`);

        response.status(code).json({
            msg
        });

    });

};

module.exports.updateTrm = (request, response) => {

    const user = request.usuario;
    const req = new mssql.Request();
    const idTrm = request.params.id;
    const bd = request.body;

    logger.info(`${new Date().toString()} Entry updateTrm idTrm: ${idTrm} - body: ${bd}`);

    const sql = `EXEC PR_UPDATE_TRM ${idTrm},${bd.id_moneda},${bd.valor},${bd.tasaUsd},${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error updateTrm - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

        logger.info(`${new Date().toString()} Result updateTrm - code: ${code} - msg: ${msg}`);

        response.status(code).json({
            msg
        });

    });

};

module.exports.updateVartarifa = (request, response) => {

    const user = request.usuario;
    const req = new mssql.Request();
    const idVartarifa = request.params.id;
    const bd = request.body;

    logger.info(`${new Date().toString()} Entry updateVartarifa idVartarifa: ${idVartarifa} - body: ${bd}`);

    const sql = `EXEC PR_UPDATE_VARTARIFA ${idVartarifa},${bd.id_zona},${bd.peso_min},${bd.peso_max},${bd.tarifa},${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error updateVartarifa - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

        logger.info(`${new Date().toString()} Result updateVartarifa - code: ${code} - msg: ${msg}`);

        response.status(code).json({
            msg
        });

    });

};

module.exports.updateZonas = (request, response) => {

    const user = request.usuario;
    const req = new mssql.Request();
    const idZona = request.params.id;
    const bd = request.body;
    logger.info(`${new Date().toString()} Entry updateZonas idZona: ${idZona} - body: ${bd}`);
    const sql = `EXEC PR_UPDATE_ZONAS ${idZona},'${bd.zona}','${bd.transportadora}',${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error updateZonas - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

        logger.info(`${new Date().toString()} Result updateZonas - code: ${code} - msg: ${msg}`);

        response.status(code).json({
            msg
        });

    });

};