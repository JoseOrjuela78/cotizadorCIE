const logger = require('../common/logger');
const mssql = require('mssql');

module.exports.generateTable = (request, response) => {

    const req = new mssql.Request();
    const table = request.params.table;
    logger.info(`${new Date().toString()} Entry generateTable table:${table}`);
    const sql = `SELECT * FROM ${table} WHERE estado = 1`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error generateTable - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const message = `GET TABLA ${table}`
        const data = JSON.stringify(result.recordset);
        logger.info(`${new Date().toString()} Result generateTable - data: ${data}`);

        response.status(200).json({
            message,
            data
        });



    });

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


        const sql = table == "Usuarios" ? 'SELECT * FROM  Usuarios;' : `TRUNCATE TABLE ${table};`;


        req.query(sql, (err, result) => {

            if (err) {
                logger.error(`${new Date().toString()} Error inserttablas - ${err}`);
                return response.status(400).json({
                    ok: false,
                    err: err.originalError.info.message
                });
            };

            if (table == "Herramientas") {

                logger.info(`${new Date().toString()} Entry inserttablas Herramientas`);

                arr.forEach(element => {

                    const sql = `EXEC PR_INSERT_HERRAMIENTAS '${element.descripcion}',${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;

                    req.query(sql, (err, result) => {

                        if (err) {
                            logger.error(`${new Date().toString()} Error inserttablas  Herramientas- ${err}`);
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });

                });

                logger.info(`${new Date().toString()} Result Herramientas - carga ${table} realizada`);

                response.status(200).json({
                    message: `carga ${table} realizada`
                });

                return;
            } else if (table == "Listadetalle") {

                logger.info(`${new Date().toString()} Entry inserttablas Listadetalle`);
                const sql = `EXEC PR_INSERT_LISTADETALLE '@code OUTPUT', '@message OUTPUT';`;

                req.query(sql, (err, result) => {

                    if (err) {
                        logger.error(`${new Date().toString()} Error inserttablas  Listadetalle- ${err}`);
                        return response.status(400).json({
                            ok: false,
                            err: err.originalError.info.message
                        });
                    };

                    logger.info(`${new Date().toString()} Result Listadetalle - carga ${table} realizada`);

                    response.status(200).json({
                        message: `carga ${table} realizada`
                    });
                    return;


                });




            } else if (table == "Monedas") {
                logger.info(`${new Date().toString()} Entry inserttablas Monedas`);
                arr.forEach(element => {

                    const sql = `EXEC PR_INSERT_MONEDAS '${element.id_moneda}','${element.moneda}',${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;

                    req.query(sql, (err, result) => {

                        if (err) {
                            logger.error(`${new Date().toString()} Error inserttablas  Monedas- ${err}`);
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });

                });

                logger.info(`${new Date().toString()} Result Monedas - carga ${table} realizada`);

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Parametros") {
                logger.info(`${new Date().toString()} Entry inserttablas Parametros`);
                arr.forEach(element => {

                    const sql = `EXEC PR_INSERT_PARAMETROS '${element.descripcion}','${element.valor}',${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;

                    req.query(sql, (err, result) => {

                        if (err) {
                            logger.error(`${new Date().toString()} Error inserttablas  Parametros- ${err}`);
                            return response.status(400).json({

                                ok: false,
                                err: err.originalError.info.message

                            });
                        };

                    });

                });

                logger.info(`${new Date().toString()} Result Parametros - carga ${table} realizada`);

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Proveedores") {
                logger.info(`${new Date().toString()} Entry inserttablas Proveedores`);
                arr.forEach(element => {

                    const sql = `EXEC PR_INSERT_PROVEEDORES '${element.id_proveedor}','${element.proveedor}',${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;

                    req.query(sql, (err, result) => {

                        if (err) {
                            logger.error(`${new Date().toString()} Error inserttablas  Proveedores- ${err}`);
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });

                });

                logger.info(`${new Date().toString()} Result Proveedores - carga ${table} realizada`);

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "RangosUSD") {
                logger.info(`${new Date().toString()} Entry inserttablas RangosUSD`);
                arr.forEach(element => {
                    const sql = `EXEC PR_CREAR_RANGOUSD ${element.rango_min},${element.rango_max},${element.mark_up},${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;
                    req.query(sql, (err, result) => {

                        if (err) {
                            logger.error(`${new Date().toString()} Error inserttablas  RangosUSD- ${err}`);
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });


                });

                logger.info(`${new Date().toString()} Result RangosUSD - carga ${table} realizada`);

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Tarifas") {
                logger.info(`${new Date().toString()} Entry inserttablas Tarifas`);

                const sql = `EXEC PR_CREAR_TARIFAS '@code OUTPUT', '@message OUTPUT';`;
                req.query(sql, (err, result) => {

                    if (err) {
                        logger.error(`${new Date().toString()} Error inserttablas  Tarifas- ${err}`);
                        return response.status(400).json({
                            ok: false,
                            err: err.originalError.info.message
                        });
                    };


                });
                logger.info(`${new Date().toString()} Result Tarifas - carga ${table} realizada`);

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Trm") {
                logger.info(`${new Date().toString()} Entry inserttablas Trm`);
                arr.forEach(element => {
                    const sql = `EXEC PR_CREAR_TRM '${element.id_moneda}',${element.valor},${element.tasaUsd},${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;
                    req.query(sql, (err, result) => {

                        if (err) {
                            logger.error(`${new Date().toString()} Error inserttablas  Trm- ${err}`);
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });


                });
                logger.info(`${new Date().toString()} Result Trm - carga ${table} realizada`);
                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Usuarios") {
                logger.info(`${new Date().toString()} Entry inserttablas Usuarios`);
                arr.forEach(element => {
                    const sql = `EXEC PR_CREAR_USUARIO '${element.identificacion}','${element.username}','${element.nombre}','${element.apellido}','${element.pass}',${element.rol},'@code OUTPUT', '@message OUTPUT';`;
                    req.query(sql, (err, result) => {

                        if (err) {
                            logger.error(`${new Date().toString()} Error inserttablas  Usuarios- ${err}`);
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });


                });
                logger.info(`${new Date().toString()} Result Usuarios - carga ${table} realizada`);
                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Vartarifas") {
                logger.info(`${new Date().toString()} Entry inserttablas Vartarifas`);
                arr.forEach(element => {
                    const sql = `EXEC PR_CREAR_VARTARIFAS ${element.id_zona},${element.peso_min},${element.peso_max},${element.tarifa},${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;
                    req.query(sql, (err, result) => {

                        if (err) {
                            logger.error(`${new Date().toString()} Error inserttablas  Vartarifas- ${err}`);
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });


                });
                logger.info(`${new Date().toString()} Result Vartarifas - carga ${table} realizada`);

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Zona_Moneda") {
                logger.info(`${new Date().toString()} Entry inserttablas Zona_Moneda`);

                arr.forEach(element => {
                    const sql = `EXEC PR_CREAR_ZONAMONEDA '${element.id_moneda}',${element.id_zona},${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;
                    req.query(sql, (err, result) => {

                        if (err) {
                            logger.error(`${new Date().toString()} Error inserttablas  Zona_Moneda- ${err}`);
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });


                });
                logger.info(`${new Date().toString()} Result Zona_Moneda - carga ${table} realizada`);
                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Zona_Proveedor") {
                logger.info(`${new Date().toString()} Entry inserttablas Zona_Proveedor`);
                arr.forEach(element => {
                    const sql = `EXEC PR_CREAR_ZONAPROVEEDOR ${element.id_zm},'${element.id_proveedor}',${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;
                    req.query(sql, (err, result) => {

                        if (err) {
                            logger.error(`${new Date().toString()} Error inserttablas  Zona_Proveedor- ${err}`);
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });


                });
                logger.info(`${new Date().toString()} Result Zona_Proveedor - carga ${table} realizada`);
                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Zonas") {
                logger.info(`${new Date().toString()} Entry inserttablas Zonas`);
                arr.forEach(element => {
                    const sql = `EXEC PR_CREAR_ZONA '${element.zona}','${element.transportadora}',${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;
                    req.query(sql, (err, result) => {

                        if (err) {
                            logger.error(`${new Date().toString()} Error inserttablas  Zonas- ${err}`);
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });


                });
                logger.info(`${new Date().toString()} Result Zonas - carga ${table} realizada`);
                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "DescuentosVolumen") {
                logger.info(`${new Date().toString()} Entry inserttablas DescuentosVolumen`);

                const sql = `EXEC PR_INSERT_DTOVOLUMEN '@code OUTPUT', '@message OUTPUT';`;
                req.query(sql, (err, result) => {

                    if (err) {
                        logger.error(`${new Date().toString()} Error inserttablas  DescuentosVolumen- ${err}`);
                        return response.status(400).json({
                            ok: false,
                            err: err.originalError.info.message
                        });
                    };


                });


                logger.info(`${new Date().toString()} Result DescuentosVolumen - carga ${table} realizada`);

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
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

module.exports.updateHerramientas = (request, response) => {

    const user = request.usuario;
    const req = new mssql.Request();
    const idherramienta = request.params.id;
    const bd = request.body;
    logger.info(`${new Date().toString()} Entry updateHerramientas idherramienta:${idherramienta} - body:${bd}`);

    const sql = `EXEC PR_UPDATE_HERRAMIENTAS '${idherramienta}','${bd.descripcion}',${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error updateHerramientas - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

        logger.info(`${new Date().toString()} Result updateHerramientas -code: ${code} - msg: ${msg}`);

        response.status(code).json({
            msg
        });

    });




};

//Lista detalle

module.exports.getZonaProveedor = (request, response) => {

    const req = new mssql.Request();

    logger.info(`${new Date().toString()} Entry getZonaProveedor`);

    const sql = `SELECT zp.id_zp, zm.id_moneda AS Moneda, zm.id_zona AS Zona,p.id_proveedor AS abv,p.proveedor AS Proveedor FROM Zona_Proveedor zp INNER JOIN Zona_Moneda zm ON zp.id_zm = zm.id_zm INNER JOIN Proveedores p ON p.id_proveedor = zp.id_proveedor WHERE zp.estado = 1;`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error getZonaProveedor - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };


        const code = 200
        const msg = 'Get zona proveedor'
        const data = result.recordset;

        logger.info(`${new Date().toString()} Result getZonaProveedor - data: ${data}`);
        response.status(code).json({
            msg,
            data
        });

    });




};

module.exports.updateListaDet = (request, response) => {

    const user = request.usuario;
    const req = new mssql.Request();
    const idDetalle = request.params.id;
    const bd = request.body;

    logger.info(`${new Date().toString()} Entry updateListaDet idDetalle:${idDetalle}- body: ${bd}`);

    const sql = `EXEC PR_UPDATE_LISTADET ${idDetalle},${bd.id_zp},${bd.id_herramienta},'${bd.part_number}',${bd.costo},${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error updateListaDet - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

        logger.info(`${new Date().toString()} Result updateListaDet - code: ${code} -msg: ${msg}`);

        response.status(code).json({
            msg
        });

    });

};

module.exports.updateMoneda = (request, response) => {

    const user = request.usuario;
    const req = new mssql.Request();
    const idMoneda = request.params.id;
    const bd = request.body;

    logger.info(`${new Date().toString()} Entry updateMoneda estado:${estado}`);

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

module.exports.updateZonaMoneda = (request, response) => {

    const user = request.usuario;
    const req = new mssql.Request();
    const idZm = request.params.id;
    const bd = request.body;

    logger.info(`${new Date().toString()} Entry updateZonaMoneda idZm: ${idZm} - body: ${bd}`);

    const sql = `EXEC PR_UPDATE_ZONAMONEDA ${idZm},'${bd.id_moneda}',${bd.id_zona},${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error updateZonaMoneda - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

        logger.info(`${new Date().toString()} Result updateZonaMoneda - code: ${code} - msg: ${msg}`);

        response.status(code).json({
            msg
        });

    });

};

module.exports.updateZonaProveedor = (request, response) => {

    const user = request.usuario;
    const req = new mssql.Request();
    const idZp = request.params.id;
    const bd = request.body;

    logger.info(`${new Date().toString()} Entry updateZonaProveedor idZp: ${idZp} - body: ${bd}`);

    const sql = `EXEC PR_UPDATE_ZONAPROVEEDOR ${idZp},${bd.id_zm},'${bd.id_proveedor}',${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error updateZonaProveedor - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

        logger.info(`${new Date().toString()} Result updateZonaProveedor - code: ${code} - msg: ${msg}`);

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