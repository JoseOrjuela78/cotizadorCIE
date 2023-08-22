const databaseFuncs = require('../common/database');
const operations = {};

operations.login = async(bd) => {

    const sql = `EXEC PR_LOGIN '${bd.username}', '@pass OUTPUT','@code OUTPUT', '@message OUTPUT';`;;

    return databaseFuncs.executeQuery(sql, 'login').then(result => {
        return result
    });
}

operations.postUser = async(bd) => {

    const sql = `EXEC PR_CREAR_USUARIO '${bd.identificacion}','${bd.username}','${bd.nombre}','${bd.apellido}','${bd.password}',${bd.rol},'@code OUTPUT','@message OUTPUT'`;

    return databaseFuncs.executeQuery(sql, 'postUser').then(result => {
        return result
    });

}

operations.getUsers = async(estado) => {

    const sql = `SELECT * FROM USUARIOS WHERE ESTADO = ${estado}`;

    return databaseFuncs.executeQuery(sql, 'getUsers').then(result => {
        return result
    });
}

operations.getIdUsers = async(identificacion) => {

    const sql = `SELECT * FROM USUARIOS WHERE identificacion = ${identificacion}`;

    return databaseFuncs.executeQuery(sql, 'getIdUsers').then(result => {
        return result
    });

}

operations.updateUser = async(identificacion, bd) => {

    const sql = `PR_UPDATE_USUARIO '${identificacion}','${bd.nombre}','${bd.apellido}','${bd.pass}',${bd.rol},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;

    return databaseFuncs.executeQuery(sql, 'updateUser').then(result => {
        return result
    });

}

module.exports = operations;