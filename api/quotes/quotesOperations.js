const databaseFuncs = require('../common/database');
const sql = require('mssql');
const operations = {};

operations.createQuoteR = async (bd) => { 
    try { 

        const result = await databaseFuncs.executeStoredProcedure(
                    'PR_CREATE_COTIZACION_R',
                    {
                        cliente: { type: sql.VarChar, value: bd.cliente },
                        vendedor: { type: sql.VarChar, value: bd.vendedor },
                        id_usuario: { type: sql.Int, value: bd.id_usuario }
                    },
                    {
                        id_cotizacion: sql.Int,
                        status_code: sql.Int,
                        status_desc: sql.VarChar(500)
                    }
        );
        
        return {
            id_cotizacion: result.output.id_cotizacion,
            status_code: result.output.status_code,
            status_desc: result.output.status_desc
        };

    } catch (error) { 
        return {
            id_cotizacion: null,
            status_code: error.code,
            status_desc: error.message
        };
    }
};

operations.createQuoteDetailR = async (bd) => {
    try {
        const result = await databaseFuncs.executeStoredProcedure(
            'PR_CREATE_COTIZACION_DET_R',
            {
                id_cotizacion: { type: sql.Int, value: bd.id_cotizacion },
                id_detalle: { type: sql.Int, value: bd.id_detalle },
                cantidad: { type: sql.Float, value: bd.cantidad },
                largoCM: { type: sql.Float, value: bd.largoCM },
                anchoCM: { type: sql.Float, value: bd.anchoCM },
                altoCM: { type: sql.Float, value: bd.altoCM },
                peso_kg: { type: sql.Float, value: bd.peso_kg },
                id_usuario: { type: sql.Int, value: bd.id_usuario }
            },
            {
                id_cotdetalle: sql.Int,
                status_code: sql.Int,
                status_desc: sql.VarChar(500)
            }
        );

        return {
            id_cotdetalle: result.output.id_cotdetalle,
            status_code: result.output.status_code,
            status_desc: result.output.status_desc
        };

    } catch (error) {
        return {
            id_cotdetalle: null,
            status_code: error.code,
            status_desc: error.message
        };
    }
}

operations.updateQuoteDetailR = async (bd) => {

     try {
        const result = await databaseFuncs.executeStoredProcedure(
            'PR_UPDATE_DETQUOTE_R',
            {
                id_cotdetalle: { type: sql.Int, value: bd.id_cotdetalle },
                cantidad: { type: sql.Int, value: bd.cantidad },
                largoCM: { type: sql.Float, value: bd.largoCM },
                anchoCM: { type: sql.Float, value: bd.anchoCM },
                altoCM: { type: sql.Float, value: bd.altoCM },
                peso_kg: { type: sql.Float, value: bd.peso_kg },
                id_usuario: { type: sql.Int, value: bd.id_usuario }
            },
            {
                status_code: sql.Int,
                status_desc: sql.VarChar(500)
            }
        );
        
        const data = result.recordset[0];
        return {
            status_code: result.output.status_code,
            status_desc: result.output.status_desc,
            data
        };

    } catch (error) {
        return {
            status_code: error.code,
            status_desc: error.message
        };
    }

}

operations.deleteQuoteDetail = async(id) => {

    try {
        const result = await databaseFuncs.executeStoredProcedure(
            'PR_DELETE_DETQUOTE_R',
            {
                id_cotdetalle: { type: sql.Int, value: id }
            },
            {
                status_code: sql.Int,
                status_desc: sql.VarChar(500)
            }
        );

        return {
            status_code: result.output.status_code,
            status_desc: result.output.status_desc
        };

    } catch (error) {
        return {
            status_code: error.code,
            status_desc: error.message
        };
    }

}

operations.generateQuoteR = async (bd) => { 
    try {
        const result = await databaseFuncs.executeStoredProcedure(
            'PR_COTIZAR_R',
            {
                id_detalle: { type: sql.Int, value: bd.id_detalle },
                id_cotdetalle: { type: sql.Int, value: bd.id_cotdetalle }
            },
            {
                status_code: sql.Int,
                status_desc: sql.VarChar(500)
            }
        );
        const quote_detail = result.recordset[0];
        return {
            status_code: result.output.status_code,
            status_desc: result.output.status_desc,
            quote_detail
        };

    } catch (error) {
        return {
            status_code: error.code,
            status_desc: error.message
        };
    }

}

operations.getQuotesR = async (idquote) => { 

    try {
        const result = await databaseFuncs.executeStoredProcedure(
            'PR_DETQUOTE_R',
            {
                id_cotizacion: { type: sql.Int, value: idquote }
            },
            {
                valor_total: sql.Float,
                status_code: sql.Int,
                status_desc: sql.VarChar(500)
            }
        );
        const data = result.recordset[0];
        return {
            status_code: result.output.status_code,
            status_desc: result.output.status_desc,
            data,
            valor_total: result.output.valor_total
        };

    } catch (error) {
        return {
            status_code: error.code,
            status_desc: error.message
        };
    }


}

operations.getRefr = async (key) => { 
    try {
        const result = await databaseFuncs.executeStoredProcedure(
            'PR_GETREF_R',
            {
               part_number: { type: sql.VarChar(200), value: key }
            },
            {
                TotalRegistros: sql.Int,
                status_code: sql.Int,
                status_desc: sql.VarChar(500)
            }
        );
        const data = result.recordsets[0];
        return {
            status_code: result.output.status_code,
            status_desc: result.output.status_desc,
            TotalRegistros: result.output.TotalRegistros,
            data
        };

    } catch (error) {
        return {
            status_code: error.code,
            status_desc: error.message
        };
    }

};

operations.closerQuoteR = async (bd) => {

    try {
        const result = await databaseFuncs.executeStoredProcedure(
            'PR_INSERT_TOTALES_R',
            {
                id_cotizacion: { type: sql.Int, value: bd.id_cotizacion }
            },
            {
                valor_total: sql.Float,
                status_code: sql.Int,
                status_desc: sql.VarChar(500)
            }
        );
    
        const rows = result.recordsets[0];
        return {
            status_code: result.output.status_code,
            status_desc: result.output.status_desc,
            rows,
            valor_total: result.output.valor_total
        };

    } catch (error) {
        return {
            status_code: error.code,
            status_desc: error.message
        };
    }

}
 
operations.getTotalDtoR = async (idquote) => { 
    try {
        const result = await databaseFuncs.executeStoredProcedure(
            'PR_GET_TOTAL_DTO_R',
            {
                id_cotizacion: { type: sql.Int, value: idquote }
            },
            {
                TotalRegistros: sql.Int,
                status_code: sql.Int,
                status_desc: sql.VarChar(500)
            }
        );

        const totalDto = result.recordset[0];
        return {
            status_code: result.output.status_code,
            status_desc: result.output.status_desc,
            TotalRegistros: result.output.TotalRegistros,
            totalDto
        };

    } catch (error) {
        return {
            status_code: error.code,
            status_desc: error.message
        };
    }

}

operations.CpesoR = async (bd) => {

    try {
        const result = await databaseFuncs.executeStoredProcedure(
            'PR_CPESO_R',
            {
                id_detalle : { type: sql.Int, value: bd.id_detalle },
                cantidad: {type: sql.Int, value: bd.cantidad },
                peso_kg: { type: sql.Float, value: bd.peso_kg },
                largoCM: { type: sql.Float, value: bd.largoCM },
                anchoCM: { type: sql.Float, value: bd.anchoCM },
                altoCM: { type: sql.Float, value: bd.altoCM }   
            },
            {
                status_code: sql.Int,
                status_desc: sql.VarChar(500)
            }
        );

        return {
            status_code: result.output.status_code,
            status_desc: result.output.status_desc,
        };

    } catch (error) {
        return {
            status_code: error.code,
            status_desc: error.message
        };
    }
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