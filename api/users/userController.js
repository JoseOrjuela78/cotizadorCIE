const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mssql = require('mssql');



module.exports.getUsers = (request, response) => {

    const req = new mssql.Request();
    const estado = parseInt(request.params.estado);

    const sql = `SELECT * FROM USUARIOS WHERE ESTADO = ${estado}`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        } else {

            const code = 200;
            const estados = estado == 1 ? 'ACTIVOS' : 'INACTIVOS';
            const message = `GET USUARIOS ${estados}`;
            const usuarios = result.recordsets;


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

    const sql = `SELECT * FROM USUARIOS WHERE identificacion = ${identificacion}`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        } else {

            const code = 200;
            const message = `GET USUARIO`;
            const usuario = result.recordsets;


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

    const sql = `EXEC PR_CREAR_USUARIO '${bd.identificacion}','${bd.username}','${bd.nombre}','${bd.apellido}','${bd.password}',${bd.rol},'@code OUTPUT','@message OUTPUT'`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        } else {

            const code = parseInt(result.recordsets[0][0].COD);
            const message = result.recordsets[1][0].MSG;

            response.status(code).json({
                message
            });
        }
    });

};

module.exports.login = (request, response) => {
    const req = new mssql.Request();
    const bd = request.body;
    console.log(bd.username);

    const sql = `EXEC PR_LOGIN '${bd.username}', '@pass OUTPUT','@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        };

        const code = parseInt(result.recordsets[1][0].COD);

        if (code == 500) {
            return response.json({
                ok: false,
                msg: result.recordsets[2][0].MSG
            });

        };

        if (code == 200) {

            const pass = result.recordsets[0][0].PASS;
            if (!bcrypt.compareSync(bd.pass, pass)) {
                return response.json({
                    ok: false,
                    msg: 'DATOS INCORRECTOS'
                });

            };

            const token = jwt.sign({
                usuario: result.recordsets[3][0]
            }, process.env.JWT_KEY, { expiresIn: '8h' })

            const msg = result.recordsets[2][0].MSG;

            response.status(code).json({
                ok: true,
                msg,
                token
            });

        };

    });


};

module.exports.updateUser = (request, response) => {

    const req = new mssql.Request();
    const identificacion = request.params.id
    const bd = request.body;
    const salt = bcrypt.genSaltSync(10);
    bd.password = bcrypt.hashSync(bd.password, salt);
    bd.nombre = String(bd.nombre).toLocaleUpperCase();
    bd.apellido = String(bd.apellido).toLocaleUpperCase();

    const sql = `PR_UPDATE_USUARIO '${identificacion}','${bd.nombre}','${bd.apellido}','${bd.password}',${bd.rol},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    req.query(sql, (err, result) => {

        if (err) {
            return response.status(400).json({
                ok: false,
                err: err.originalError.info.message
            });
        } else {

            const code = parseInt(result.recordsets[0][0].COD);
            const message = result.recordsets[1][0].MSG;

            response.status(code).json({
                message
            });
        }
    });


};