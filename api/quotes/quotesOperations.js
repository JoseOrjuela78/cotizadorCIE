const databaseFuncs = require('../common/database');
const operations = {};

operations.createQuote = async(user, seller, bd) => {

    const sql = `EXEC PR_CREATE_COTIZACION '${bd.cliente}','${seller}',${user.id_usuario},'@id_cotizacion OUTPUT','@code OUTPUT', '@message OUTPUT';`;

    return databaseFuncs.executeQuery(sql, 'createQuote').then(result => {
        return result
    });
}

operations.createQuoteDetail = async(user, bd) => {

    const sql = `EXEC PR_CREATE_COTIZACION_DET ${bd.id_cotizacion},${bd.id_detalle},${bd.cantidad},${bd.largoCM},${bd.anchoCM},${bd.altoCM},${bd.peso_kg},${user.id_usuario},'@id_cotdetalle OUTPUT','@code OUTPUT', '@message OUTPUT';`;

    return databaseFuncs.executeQuery(sql, 'createQuoteDetail').then(result => {
        return result
    });

}

operations.updateQuoteDetail = async(bd) => {

    const sql = `EXEC PR_UPDATE_DETQUOTE ${bd.id_cotdetalle}, ${bd.cantidad},${bd.largoCM},${bd.anchoCM},${bd.altoCM},${bd.peso_kg},'@code OUTPUT', '@message OUTPUT';`;

    return databaseFuncs.executeQuery(sql, 'updateQuoteDetail').then(result => {
        return result
    });

}

operations.deleteQuoteDetail = async(id) => {

    const sql = `DELETE FROM Cotizacionesdetalle_v2 WHERE id_cotdetalle = ${id};`;

    return databaseFuncs.executeQuery(sql, 'deleteQuoteDetail').then(result => {
        return result
    });


}

operations.generateQuote = async(bd) => {

    const sql = `EXEC PR_COTIZAR ${bd.id_detalle}, ${bd.id_cotdetalle} ,'@code OUTPUT', '@message OUTPUT'`;

    return databaseFuncs.executeQuery(sql, 'generateQuote').then(result => {
        return result
    });
}

operations.getQuotes = async(idquote) => {

    const sql = `EXEC PR_DETQUOTE ${idquote} ,'@code OUTPUT', '@message OUTPUT';`;

    return databaseFuncs.executeQuery(sql, 'getQuotes').then(result => {
        return result
    });

}

operations.getRef = async(key) => {

    const sql = `
    SELECT
    TOP 10
    ld.id_detalle, 
    ld.part_number,
    ld.herramienta,
    p.proveedor
    FROM Listadetalle ld
    INNER JOIN Proveedores p
    ON p.id_proveedor = ld.proveedor
    WHERE ld.part_number LIKE '${key}%';
    `;

    return databaseFuncs.executeQuery(sql, 'getRef').then(result => {
        return result
    });
}

operations.closerQuote = async(bd) => {

    const sql = `EXEC PR_INSERT_TOTALES ${bd.id_cotizacion}, '@code OUTPUT', '@message OUTPUT';`;

    return databaseFuncs.executeQuery(sql, 'closerQuote').then(result => {
        return result
    });

}

operations.closeQuoteRows = async(bd) => {
    /*
        const sql = `EXEC PR_UPDATE_TOTALES ${bd.id_cotTotales},${bd.id_cotizacion},'@code OUTPUT', '@message OUTPUT'`;

        return databaseFuncs.executeQuery(sql, 'closeQuoteRows').then(result => {
            return result
        });
        */

    return null;

}

operations.getTotalDto = async(idquote) => {

    const sql = `SELECT proveedor, SUM(Tpreciototal) as 'Total', SUM( Cdescuento) as 'Total_Descuento' FROM CotizacionesTotales WHERE id_cotizacion =  ${idquote} GROUP BY proveedor;`;

    return databaseFuncs.executeQuery(sql, 'getTotalDto').then(result => {
        return result
    });


}

operations.Cpeso = async(bd) => {

    const sql = `EXEC PR_CPESO ${bd.id_detalle}, ${bd.cantidad}, ${bd.peso_kg},${bd.largoCM},${bd.anchoCM},${bd.altoCM},'@code OUTPUT', '@message OUTPUT'`;

    return databaseFuncs.executeQuery(sql, 'Cpeso').then(result => {
        return result
    });
}

operations.getSellers = async() => {

    const sql = `select DISTINCT (vendedor), id_usuario from Cotizaciones  ORDER BY vendedor;`;

    return databaseFuncs.executeQuery(sql, 'getSellers').then(result => {
        return result
    });

}

operations.getCustomers = async(idUsuario) => {

    const sql = `select DISTINCT (CLIENTE) from Cotizaciones WHERE id_usuario = ${idUsuario} ORDER BY CLIENTE;`;

    return databaseFuncs.executeQuery(sql, 'getCustomers').then(result => {
        return result
    });


}

operations.getidQuotes = async(cliente, idUsuario) => {

    const sql = `SELECT DISTINCT(c.id_cotizacion) as id_cotizacion FROM Cotizaciones c INNER JOIN Cotizacionesdetalle cd ON c.id_cotizacion = cd.id_cotizacion INNER JOIN CotizacionesTotales ct ON ct.id_cotizacion = c.id_cotizacion WHERE UPPER(c.cliente) = UPPER('${cliente}') AND c.id_usuario = ${idUsuario} ORDER BY c.id_cotizacion DESC;`;

    return databaseFuncs.executeQuery(sql, 'getidQuotes').then(result => {
        return result
    });
}

operations.getQuoteDetail = async(idquote) => {

    const sql = `EXEC PR_GET_QUOTE ${idquote},'@code OUTPUT', '@message OUTPUT'`;

    return databaseFuncs.executeQuery(sql, 'getQuoteDetail').then(result => {
        return result
    });

}

operations.getBrands = async() => {

    const sql = `SELECT * FROM Proveedores ORDER BY id_proveedor ASC;`;

    return databaseFuncs.executeQuery(sql, 'getBrands').then(result => {
        return result
    });

}


module.exports = operations;