const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mssql = require('mssql');
const logger = require('../common/logger');



module.exports.getUsers = (request, response) => {

    const req = new mssql.Request();
    const estado = parseInt(request.params.estado);

    logger.info(`${new Date().toString()} Entry getUsers estado:${estado}`);

    const sql = `SELECT * FROM USUARIOS WHERE ESTADO = ${estado}`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error getUsers - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        } else {

            const code = 200;
            const estados = estado == 1 ? 'ACTIVOS' : 'INACTIVOS';
            const message = `GET USUARIOS ${estados}`;
            const usuarios = result.recordsets;

            logger.info(`${new Date().toString()} Result getUsers - ${usuarios}`);

            response.status(code).json({
                message,
                usuarios
            });
        }
    });

};

module.exports.getIdUsers = (request, response) => {

    const req = new mssql.Request();
    const identificacion = parseInt(request.params.identificacion);

    logger.info(`${new Date().toString()} Entry getIdUsers ${identificacion}`);

    const sql = `SELECT * FROM USUARIOS WHERE identificacion = ${identificacion}`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error getIdUsers - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        } else {

            const code = 200;
            const message = `GET USUARIO`;
            const usuario = result.recordsets;

            logger.info(`${new Date().toString()} Result getIdUsers ${usuario}`);
            response.status(code).json({
                message,
                usuario
            });
        }
    });



};

module.exports.postUser = (request, response) => {

    const user = request.usuario;
    const req = new mssql.Request();
    const bd = request.body;
    const salt = bcrypt.genSaltSync(10);
    bd.password = bcrypt.hashSync(bd.password, salt);
    bd.nombre = String(bd.nombre).toLocaleUpperCase();
    bd.apellido = String(bd.apellido).toLocaleUpperCase();

    logger.info(`${new Date().toString()} Entry postUser body: ${bd}`);

    const sql = `EXEC PR_CREAR_USUARIO '${bd.identificacion}','${bd.username}','${bd.nombre}','${bd.apellido}','${bd.password}',${bd.rol},'@code OUTPUT','@message OUTPUT'`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error postUser - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        } else {

            const code = parseInt(result.recordsets[0][0].COD);
            const message = result.recordsets[1][0].MSG;
            logger.info(`${new Date().toString()} Result postUser code : ${code}`);
            response.status(code).json({
                message
            });
        }
    });

};

module.exports.login = (request, response) => {
    const req = new mssql.Request();
    const bd = request.body;

    logger.info(`${new Date().toString()} Entry login: ${bd}`);

    const sql = `EXEC PR_LOGIN '${bd.username}', '@pass OUTPUT','@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {

            logger.error(`${new Date().toString()} Error login - ${err}`);

            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = parseInt(result.recordsets[1][0].COD);
        const msg = result.recordsets[2][0].MSG;

        if (code == 500) {

            logger.error(`${new Date().toString()} Error login code: ${code} -msg ${msg}`);

            return response.json({
                ok: false,
                msg
            });

        };

        if (code == 200) {

            const pass = result.recordsets[0][0].PASS;
            if (!bcrypt.compareSync(bd.pass, pass)) {

                logger.error(`${new Date().toString()} Error login DATOS INCORRECTOS`);

                return response.json({
                    ok: false,
                    msg: 'DATOS INCORRECTOS'
                });

            };

            const token = jwt.sign({
                usuario: result.recordsets[3][0]
            }, process.env.JWT_KEY, { expiresIn: '8h' })


            const msg = result.recordsets[2][0].MSG;
            const user = JSON.stringify(result.recordsets[3][0]);

            logger.info(`${new Date().toString()} Result login user : ${user}`);

            response.status(code).json({
                ok: true,
                msg,
                token,
                user
            });

        };

    });


};

module.exports.updateUser = (request, response) => {

    const req = new mssql.Request();
    const identificacion = request.params.id
    const bd = request.body;

    logger.info(`${new Date().toString()} Entry updateUser body: ${bd}`);

    if (!bd.pass == '') {
        const salt = bcrypt.genSaltSync(10);
        bd.pass = bcrypt.hashSync(bd.pass, salt);
    }


    bd.nombre = String(bd.nombre).toLocaleUpperCase();
    bd.apellido = String(bd.apellido).toLocaleUpperCase();

    const sql = `PR_UPDATE_USUARIO '${identificacion}','${bd.nombre}','${bd.apellido}','${bd.pass}',${bd.rol},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            logger.error(`${new Date().toString()} Error updateUser - ${err}`);
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        } else {

            const code = parseInt(result.recordsets[0][0].COD);
            const msg = result.recordsets[1][0].MSG;

            logger.info(`${new Date().toString()} Result updateUser code : ${code}`);

            response.status(code).json({
                msg
            });
        }
    });


};