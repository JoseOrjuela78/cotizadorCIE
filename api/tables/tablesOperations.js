const databaseFuncs = require('../common/database');
const operations = {};


operations.generateTable = async(table) => {

    const sql = `SELECT * FROM ${table} WHERE estado = 1`;

    return databaseFuncs.executeQuery(sql, 'generateTable').then(result => {
        return result
    });
}

operations.truncateTables = async(table) => {

    const sql = table == "Usuarios" ? 'SELECT * FROM  Usuarios;' : `TRUNCATE TABLE ${table};`;

    return databaseFuncs.executeQuery(sql, 'truncateTables').then(result => {
        return result
    });


}

operations.listaDetalle = async() => {

    const sql = `EXEC PR_INSERT_LISTADETALLE '@code OUTPUT', '@message OUTPUT';`;

    return databaseFuncs.executeQuery(sql, 'listaDetalle').then(result => {
        return result
    });


}

operations.monedas = async(element, user) => {

    const sql = `EXEC PR_INSERT_MONEDAS '${element.id_moneda}','${element.moneda}',${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;

    return databaseFuncs.executeQuery(sql, 'monedas').then(result => {
        return result
    });
}

operations.parametros = async(element, user) => {

    const sql = `EXEC PR_INSERT_PARAMETROS '${element.descripcion}','${element.valor}',${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;

    return databaseFuncs.executeQuery(sql, 'parametros').then(result => {
        return result
    });
}

operations.proveedores = async(element, user) => {

    const sql = `EXEC PR_INSERT_PROVEEDORES '@code OUTPUT', '@message OUTPUT';`;

    return databaseFuncs.executeQuery(sql, 'proveedores').then(result => {

        return result
    });
}

operations.rangosUSD = async(element, user) => {

    const sql = `EXEC PR_CREAR_RANGOUSD ${element.rango_min},${element.rango_max},${element.mark_up},${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;

    return databaseFuncs.executeQuery(sql, 'rangosUSD').then(result => {
        return result
    });

}

operations.tarifas = async() => {

    const sql = `EXEC PR_CREAR_TARIFAS '@code OUTPUT', '@message OUTPUT';`;

    return databaseFuncs.executeQuery(sql, 'tarifas').then(result => {
        return result
    });

}

operations.trm = async(element, user) => {

    const sql = `EXEC PR_CREAR_TRM '${element.id_moneda}',${element.valor},${element.tasaUsd},${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;

    return databaseFuncs.executeQuery(sql, 'trm').then(result => {
        return result
    });

}

operations.usuarios = async(element) => {

    const sql = `EXEC PR_CREAR_USUARIO '${element.identificacion}','${element.username}','${element.nombre}','${element.apellido}','${element.pass}',${element.rol},'@code OUTPUT', '@message OUTPUT';`;

    return databaseFuncs.executeQuery(sql, 'usuarios').then(result => {
        return result
    });


}

operations.varTarifas = async(element, user) => {

    const sql = `EXEC PR_CREAR_VARTARIFAS ${element.id_zona},${element.peso_min},${element.peso_max},${element.tarifa},${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;

    return databaseFuncs.executeQuery(sql, 'usuarios').then(result => {
        return result
    });

}

operations.zonas = async(element, user) => {

    const sql = `EXEC PR_CREAR_ZONA '${element.zona}','${element.transportadora}',${user.id_usuario},'@code OUTPUT', '@message OUTPUT';`;

    return databaseFuncs.executeQuery(sql, 'zonas').then(result => {
        return result
    });

}

operations.descuentosVolumen = async() => {

    const sql = `EXEC PR_INSERT_DTOVOLUMEN '@code OUTPUT', '@message OUTPUT';`;

    return databaseFuncs.executeQuery(sql, 'descuentosVolumen').then(result => {
        return result
    });


}


operations.updateMoneda = async(idMoneda, bd, user) => {

    const sql = `EXEC PR_UPDATE_MONEDA '${idMoneda}','${bd.moneda}',${user.id_usuario},${bd.estado},'@code OUTPUT', '@message OUTPUT';`;
    return databaseFuncs.executeQuery(sql, 'updateMoneda').then(result => {
        return result
    });


}


module.exports = operations;