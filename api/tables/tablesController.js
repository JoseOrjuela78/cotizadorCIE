const mssql = require('mssql');

module.exports.generateTable = (request, response) => {

    const req = new mssql.Request();
    const table = request.params.table;
    const sql = `SELECT * FROM ${table} WHERE estado = 1`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const message = `GET TABLA ${table}`
        const data = JSON.stringify(result.recordset);

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

    if (arr.length > 10000) {

        response.status(201).json({
            message: 'carga superior a 10 mil rows'
        });
    } else if (arr.length <= 0) {

        response.status(500).json({
            message: 'carga sin datos'
        });


    } else {



        const sql = table == "Usuarios" ? 'SELECT * FROM  Usuarios;' : `TRUNCATE TABLE ${table};`;


        req.query(sql, (err, result) => {

            if (err) {
                return response.status(400).json({
                    ok: false,
                    err: err.originalError.info.message
                });
            };

            if (table == "Herramientas") {

                arr.forEach(element => {

                    const sql = `EXEC PR_INSERT_HERRAMIENTAS '${element.descripcion}',${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;

                    req.query(sql, (err, result) => {

                        if (err) {
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });

                });

                response.status(200).json({
                    message: `carga ${table} realizada`
                });

                return;
            } else if (table == "Listadetalle") {

                arr.forEach(element => {

                    const sql = `EXEC PR_INSERT_LISTADETALLE ${element.id_zp},${element.id_herramienta},'${element.part_number}',${element.costo},${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;

                    req.query(sql, (err, result) => {

                        if (err) {
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });

                });

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Monedas") {
                arr.forEach(element => {

                    const sql = `EXEC PR_INSERT_MONEDAS '${element.id_moneda}','${element.moneda}',${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;

                    req.query(sql, (err, result) => {

                        if (err) {
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });

                });

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Parametros") {
                arr.forEach(element => {

                    const sql = `EXEC PR_INSERT_PARAMETROS '${element.descripcion}','${element.valor}',${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;

                    req.query(sql, (err, result) => {

                        if (err) {
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });

                });

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Proveedores") {
                arr.forEach(element => {

                    const sql = `EXEC PR_INSERT_PROVEEDORES '${element.id_proveedor}','${element.proveedor}',${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;

                    req.query(sql, (err, result) => {

                        if (err) {
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });

                });

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "RangosUSD") {
                arr.forEach(element => {
                    const sql = `EXEC PR_CREAR_RANGOUSD ${element.rango_min},${element.rango_max},${element.mark_up},${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;
                    req.query(sql, (err, result) => {

                        if (err) {
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });


                });

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Tarifas") {
                arr.forEach(element => {
                    const sql = `EXEC PR_CREAR_TARIFAS ${element.id_zona},${element.peso_min},${element.peso_max},${element.tarifa},${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;
                    req.query(sql, (err, result) => {

                        if (err) {
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });


                });

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Trm") {
                arr.forEach(element => {
                    const sql = `EXEC PR_CREAR_TRM '${element.id_moneda}',${element.valor},${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;
                    req.query(sql, (err, result) => {

                        if (err) {
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });


                });

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Usuarios") {
                arr.forEach(element => {
                    const sql = `EXEC PR_CREAR_USUARIO '${element.identificacion}','${element.username}','${element.nombre}','${element.apellido}','${element.pass}',${element.rol},'@code OUTPUT', '@message OUTPUT';`;
                    req.query(sql, (err, result) => {

                        if (err) {
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });


                });

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Vartarifas") {
                arr.forEach(element => {
                    const sql = `EXEC PR_CREAR_VARTARIFAS ${element.id_zona},${element.peso_min},${element.peso_max},${element.tarifa},${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;
                    req.query(sql, (err, result) => {

                        if (err) {
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });


                });

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Zona_Moneda") {

                arr.forEach(element => {
                    const sql = `EXEC PR_CREAR_ZONAMONEDA '${element.id_moneda}',${element.id_zona},${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;
                    req.query(sql, (err, result) => {

                        if (err) {
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });


                });

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Zona_Proveedor") {
                arr.forEach(element => {
                    const sql = `EXEC PR_CREAR_ZONAPROVEEDOR ${element.id_zm},'${element.id_proveedor}',${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;
                    req.query(sql, (err, result) => {

                        if (err) {
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });


                });

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else if (table == "Zonas") {
                arr.forEach(element => {
                    const sql = `EXEC PR_CREAR_ZONA '${element.zona}','${element.transportadora}',${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;
                    req.query(sql, (err, result) => {

                        if (err) {
                            return response.status(400).json({
                                ok: false,
                                err: err.originalError.info.message
                            });
                        };


                    });


                });

                response.status(200).json({
                    message: `carga ${table} realizada`
                });
                return;
            } else {
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


    const sql = `EXEC PR_UPDATE_HERRAMIENTAS '${idherramienta}','${bd.descripcion}',${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

        response.status(code).json({
            msg
        });

    });




};

//Lista detalle

module.exports.getZonaProveedor = (request, response) => {

    const req = new mssql.Request();



    const sql = `SELECT zp.id_zp, zm.id_moneda AS Moneda, zm.id_zona AS Zona,p.id_proveedor AS abv,p.proveedor AS Proveedor FROM Zona_Proveedor zp INNER JOIN Zona_Moneda zm ON zp.id_zm = zm.id_zm INNER JOIN Proveedores p ON p.id_proveedor = zp.id_proveedor WHERE zp.estado = 1;`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };


        const code = 200
        const msg = 'Get zona proveedor'
        response.status(code).json({
            msg,
            data: result.recordset
        });

    });




};

module.exports.updateListaDet = (request, response) => {

    const user = request.usuario;
    const req = new mssql.Request();
    const idDetalle = request.params.id;
    const bd = request.body;

    const sql = `EXEC PR_UPDATE_LISTADET ${idDetalle},${bd.id_zp},${bd.id_herramienta},'${bd.part_number}',${bd.costo},${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

        response.status(code).json({
            msg
        });

    });

};

module.exports.updateListaDet = (request, response) => {

    const user = request.usuario;
    const req = new mssql.Request();
    const idDetalle = request.params.id;
    const bd = request.body;

    const sql = `EXEC PR_UPDATE_LISTADET ${idDetalle},${bd.id_zp},${bd.id_herramienta},'${bd.part_number}',${bd.costo},${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

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

    const sql = `EXEC PR_UPDATE_MONEDA '${idMoneda}','${bd.moneda}',${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

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

    const sql = `EXEC PR_UPDATE_PARAMETRO ${idParametro},'${bd.descripcion}','${bd.valor}',${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

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

    const sql = `EXEC PR_UPDATE_PROVEEDORES '${idProveedor}','${bd.proveedor}',${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

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

    const sql = `EXEC PR_UPDATE_RANGO ${idRango},${bd.rango_min},${bd.rango_max},${bd.mark_up},${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

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

    const sql = `EXEC PR_UPDATE_TARIFA ${idTarifa},${bd.id_zona},${bd.peso_min},${bd.peso_max},${bd.tarifa},${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

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

    const sql = `EXEC PR_UPDATE_TRM ${idTrm},${bd.id_moneda},${bd.valor},${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

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

    const sql = `EXEC PR_UPDATE_VARTARIFA ${idVartarifa},${bd.id_zona},${bd.peso_min},${bd.peso_max},${bd.tarifa},${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

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
    const sql = `EXEC PR_UPDATE_ZONAMONEDA ${idZm},'${bd.id_moneda}',${bd.id_zona},${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

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
    const sql = `EXEC PR_UPDATE_ZONAPROVEEDOR ${idZp},${bd.id_zm},'${bd.id_proveedor}',${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

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
    const sql = `EXEC PR_UPDATE_ZONAS ${idZona},'${bd.zona}','${bd.transportadora}',${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = result.recordsets[0][0].COD;
        const msg = result.recordsets[1][0].MSG;

        response.status(code).json({
            msg
        });

    });

};