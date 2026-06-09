const databaseFuncs = require('../common/database');
const sql = require('mssql');
const operations = {};


operations.loginR = async (bd) => {
    try {
      
        const result = await databaseFuncs.executeStoredProcedure(
        'PR_LOGIN',
            {
                email: { type: sql.VarChar, value: bd.email }
            },
            {
                pass: sql.VarChar(100),
                status_code: sql.Int,
                status_desc: sql.VarChar(500)
            },
            'MOD_SEGURIDAD'
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
            'SP_CREAR_USUARIO',
            {
                
                TIPO_PERSONA: { type: sql.Int, value: bd.tipo_persona },
                TIPO_IDENTIFICACION: { type: sql.Int, value: bd.tipo_identificacion},
                IDENTIFICACION: { type: sql.VarChar, value: bd.identificacion },
                RAZON_SOCIAL: { type: sql.VarChar, value: bd.razon_social },
                NOMBRE1: { type: sql.VarChar, value: bd.nombre1 },
                NOMBRE2: { type: sql.VarChar, value: bd.nombre2 },
                APELLIDO1: { type: sql.VarChar, value: bd.apellido1 },
                APELLIDO2: { type: sql.VarChar, value: bd.apellido2 },
                EMAIL: { type: sql.VarChar, value: bd.email },
                GENERO: { type: sql.Int, value: bd.genero },
                CIUDAD: { type: sql.Int, value: bd.ciudad },	
                TELEFONO: { type: sql.VarChar, value: bd.telefono },
                ID_ROL: { type: sql.Int, value: bd.id_rol },
                PASS: { type: sql.VarChar, value: bd.pass },
                ID_USUARIO: { type: sql.Int, value: bd.id_usuario }
            },
            {
                CODIGO: sql.Int,
                STATUS_CODE: sql.Int,
                STATUS_DESC: sql.VarChar(500)
            },
            'MOD_SEGURIDAD'
        );
         
        return {
            codigo: result.output.CODIGO,
            status_code: result.output.STATUS_CODE,
            status_desc: result.output.STATUS_DESC
        };
            
    } catch (error) {
        return {
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
};

operations.getListaDetalle = async (codigoLista) => {
    try {
        const result = await databaseFuncs.executeStoredProcedure(
            'SP_GET_LISTA_DETALLE',
            {
                CODIGO_LISTA: { type: sql.Int, value: codigoLista }
            },
            {
                status_code: sql.Int,
                status_desc: sql.VarChar(500)
            },
            'MOD_SEGURIDAD'
        );
       
        const lista = result.recordset;
        return {
            status_code: result.output.status_code,
            status_desc: result.output.status_desc,
            lista
        };
        
    } catch (error) {
        return {
            user: null,
            status_code: error.code || 500,
            status_desc: error.message
        };
    };
};

operations.getListaMenus = async () => {
    try {
        const result = await databaseFuncs.executeStoredProcedure(
            'SP_GET_LISTA_MENUS',
            {},
            {
                status_code: sql.Int,
                status_desc: sql.VarChar(500)
            },
            'MOD_SEGURIDAD'
        );

        const lista = result.recordset;
        return {
            status_code: result.output.status_code,
            status_desc: result.output.status_desc,
            lista
        };

    } catch (error) {
        return {
            user: null,
            status_code: error.code || 500,
            status_desc: error.message
        };
    };
};

operations.getPermisosRol = async (idRol) => {
    try {
        const result = await databaseFuncs.executeStoredProcedure(
            'SP_GET_PERMISOS_ROL',
            {
                id_rol: { type: sql.Int, value: idRol }
            },
            {
                status_code: sql.Int,
                status_desc: sql.VarChar(500)
            },
            'MOD_SEGURIDAD'
        );

        const lista = result.recordset;
        return {
            status_code: result.output.status_code,
            status_desc: result.output.status_desc,
            lista
        };

    } catch (error) {
        return {
            user: null,
            status_code: error.code || 500,
            status_desc: error.message
        };
    };
};

operations.getListaCiudades = async (bd) => {
    try {
        const result = await databaseFuncs.executeStoredProcedure(
            'SP_GET_LISTA_CIUDADES',
            {
                codigo_pais: { type: sql.VarChar, value: bd.codigo_pais }
            },
            {
                status_code: sql.Int,
                status_desc: sql.VarChar(500)
            },
            'MOD_SEGURIDAD'
        );

        const lista = result.recordset;
        return {
            status_code: result.output.status_code,
            status_desc: result.output.status_desc,
            lista
        };

    } catch (error) {
        return {
            status_code: error.code || 500,
            status_desc: error.message
        };
    };
};

operations.getRoles = async () => {
    try {
        const result = await databaseFuncs.executeStoredProcedure(
            'SP_GET_ROLES',
            {},
            {
                status_code: sql.Int,
                status_desc: sql.VarChar(500)
            },
            'MOD_SEGURIDAD'
        );

        const lista = result.recordset;
        return {
            status_code: result.output.status_code,
            status_desc: result.output.status_desc,
            lista
        };

    } catch (error) {
        return {
            status_code: error.code || 500,
            status_desc: error.message
        };
    };
};



module.exports = operations;