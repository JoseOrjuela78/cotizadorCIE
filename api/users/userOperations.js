const databaseFuncs = require('../common/database');
const sql = require('mssql');
const operations = {};


operations.loginR = async (bd) => {
    try {
      
        const result = await databaseFuncs.executeStoredProcedure(
        'PR_LOGIN_R',
            {
                username: { type: sql.VarChar, value: bd.username }
            },
            {
                pass: sql.VarChar(100),
                status_code: sql.Int,
                status_desc: sql.VarChar(500)
            }
        );
        const user = result.recordsets[0][0];
        return {
            pass: result.output.pass,
            user,
            status_code: result.output.status_code,
            status_desc: result.output.status_desc
        };
        
    } catch (error) {
        return {
            pass: null,
            user: null,
            status_code: error.code || 500,
            status_desc: error.message,
        };
    }
};

operations.postUserR = async (bd) => { 
    try {

        const result = await databaseFuncs.executeStoredProcedure(
            'PR_CREAR_USUARIO_R',
            {
                identificacion: { type: sql.VarChar, value: bd.identificacion },
                username: { type: sql.VarChar, value: bd.username },
                nombre: { type: sql.VarChar, value: bd.nombre },
                apellido: { type: sql.VarChar, value: bd.apellido },
                telefono: { type: sql.VarChar, value: bd.telefono },
                celular: { type: sql.VarChar, value: bd.celular },
                email: { type: sql.VarChar, value: bd.email },
                pass: { type: sql.VarChar, value: bd.pass },
                rol: { type: sql.Int, value: bd.rol }
            },
            {
                status_code: sql.Int,
                status_desc: sql.VarChar(500)
            }
        );
         
        const user =  result.recordsets[0][0];
        return {
            user,
            status_code: result.output.status_code,
            status_desc: result.output.status_desc
        };
            
    } catch (error) {
        return {
            user: null,
            status_code: error.code,
            status_desc: error.message
        };
        
    }
}

operations.getUsersPag = async (bd) => {
    try {

        const result = await databaseFuncs.executeStoredProcedure(
            'PR_GET_USUARIOS',
            {
                OrderColumn: { type: sql.VarChar, value: bd.OrderColumn },
                OrderDirection: { type: sql.VarChar, value: bd.OrderDirection },
                PageNumber: { type: sql.Int, value: bd.PageNumber },
                PageSize: { type: sql.Int, value: bd.PageSize },
                identificacion: { type: sql.VarChar, value: bd.identificacion },
                username: { type: sql.VarChar, value: bd.username },
                nombres: { type: sql.VarChar, value: bd.nombres },
                rol: { type: sql.Int, value: bd.rol },
                estado: { type: sql.Int, value: bd.estado },
                FechaInicio: { type: sql.VarChar, value: bd.FechaInicio },
                FechaFinal: { type: sql.VarChar, value: bd.FechaFinal }
            },
            {
                TotalRegistros: sql.Int,
                status_code: sql.Int,
                status_desc: sql.VarChar(500)
            }
        );
      
        const users = result.recordset;
        return {
            status_code: result.output.status_code,
            status_desc: result.output.status_desc,
            totalRegistros: result.output.TotalRegistros,
            users
        };

    } catch (error) {
        return {
            status_code: error.code,
            status_desc: error.message,
        };

    }
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

operations.updateUserR = async (identificacion, bd) => {
    try {
        const result = await databaseFuncs.executeStoredProcedure(
            'PR_UPDATE_USUARIO_R',
            {
              identificacion: { type: sql.VarChar, value: identificacion },
              nombre: { type: sql.VarChar, value: bd.nombre },
              apellido: { type: sql.VarChar, value: bd.apellido },
              telefono: { type: sql.VarChar, value: bd.telefono },
              celular: { type: sql.VarChar, value: bd.celular },
              email: { type: sql.VarChar, value: bd.email },
              pass: { type: sql.VarChar, value: bd.pass },
              rol: { type: sql.Int, value: bd.rol },
              estado: { type: sql.Bit, value: bd.estado }
            },
            {
                status_code: sql.Int,
                status_desc: sql.VarChar(500)
            }
        );
        const user = result.recordsets[0][0];
        return {
            user,
            status_code: result.output.status_code,
            status_desc: result.output.status_desc
        };

    } catch (error) {
        return {
            user: null,
            status_code: error.code || 500,
            status_desc: error.message
        };
    }
}

module.exports = operations;