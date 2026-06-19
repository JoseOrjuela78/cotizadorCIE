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
        const menus = result.recordsets[1];
        return {
            pass: result.output.pass,
            user,
            menus,
            status_code: result.output.status_code,
            status_desc: result.output.status_desc
        };
        
    } catch (error) {
        return {
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
                ORDERCOLUMN: { type: sql.VarChar, value: bd.ordercolumn },
                ORDERDIRECTION: { type: sql.VarChar, value: bd.orderdirection },
                PAGENUMBER: { type: sql.Int, value: bd.pagenumber },
                PAGESIZE: { type: sql.Int, value: bd.pagesize },
                IDENTIFICACION: { type: sql.VarChar, value: bd.identificacion },
                ID_USUARIO: { type: sql.Int, value: bd.id_usuario },
                TIPO_PERSONA: { type: sql.Int, value: bd.tipo_persona },
                TIPO_IDENTIFICACION: { type: sql.Int, value: bd.tipo_identificacion },
                RAZON_SOCIAL: { type: sql.VarChar, value: bd.razon_social },
                NOMBRE: { type: sql.VarChar, value: bd.nombre },
                EMAIL: { type: sql.VarChar, value: bd.email },
                GENERO: { type: sql.Int, value: bd.genero },
                CIUDAD: { type: sql.Int, value: bd.ciudad },
                TELEFONO: { type: sql.VarChar, value: bd.telefono },
                ID_ROL: { type: sql.Int, value: bd.id_rol },
                ESTADO: { type: sql.Int, value: bd.estado },
                FECHAINICIO: { type: sql.VarChar, value: bd.fechainicio },
                FECHAFINAL: { type: sql.VarChar, value: bd.fechafinal }
            },
            {
                TOTALREGISTROS: sql.Int,
                STATUS_CODE: sql.Int,
                STATUS_DESC: sql.VarChar(500)
            },
            'MOD_SEGURIDAD'
        );
      
        const users = result.recordset[0];
        return {
            status_code: result.output.STATUS_CODE,
            status_desc: result.output.STATUS_DESC,
            totalRegistros: result.output.TOTALREGISTROS,
            users
        };

    } catch (error) {
        return {
            status_code: error.code,
            status_desc: error.message,
        };

    }
}

operations.updateUserR = async (bd) => {

    try {
        const result = await databaseFuncs.executeStoredProcedure(
            'SP_ACTUALIZAR_USUARIO',
            {
                TIPO_PERSONA: { type: sql.Int, value: bd.tipo_persona },
                TIPO_IDENTIFICACION: { type: sql.Int, value: bd.tipo_identificacion },
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
                ID_USUARIO: { type: sql.Int, value: bd.id_usuario }
            },
            {
                STATUS_CODE: sql.Int,
                STATUS_DESC: sql.VarChar(500)
            },
            'MOD_SEGURIDAD'
        );
        const user = result.recordsets[0][0];
        return {
            user,
            status_code: result.output.STATUS_CODE,
            status_desc: result.output.STATUS_DESC
        };

    } catch (error) {
        return {
            user: null,
            status_code: error.code || 500,
            status_desc: error.message
        };
    }
};

operations.updatePass = async (bd) => {

    try {
        const result = await databaseFuncs.executeStoredProcedure(
            'SP_ACTUALIZAR_PASSWORD',
            {
                ID_USUARIO: { type: sql.Int, value: bd.id_usuario },
                PASS: { type: sql.VarChar, value: bd.pass },
                ID_USUARIO_EJECUTO: { type: sql.Int, value: bd.id_usuario_ejecuto }
            },
            {
                STATUS_CODE: sql.Int,
                STATUS_DESC: sql.VarChar(500)
            },
            'MOD_SEGURIDAD'
        );
        
        return {
            status_code: result.output.STATUS_CODE,
            status_desc: result.output.STATUS_DESC
        };

    } catch (error) {
        return {
            status_code: error.code || 500,
            status_desc: error.message
        };
    }
};

operations.updateStatusUserR = async (bd) => {

    try {
        const result = await databaseFuncs.executeStoredProcedure(
            'SP_ESTADO_USUARIO',
            {
                
                IDENTIFICACION: { type: sql.VarChar, value: bd.identificacion },
                ESTADO: { type: sql.Int, value: bd.estado },
                ID_USUARIO: { type: sql.Int, value: bd.id_usuario }
            },
            {
                STATUS_CODE: sql.Int,
                STATUS_DESC: sql.VarChar(500)
            },
            'MOD_SEGURIDAD'
        );
    
        return {
            status_code: result.output.STATUS_CODE,
            status_desc: result.output.STATUS_DESC
        };

    } catch (error) {
        return {
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
                STATUS_CODE: sql.Int,
                STATUS_DESC: sql.VarChar(500)
            },
            'MOD_SEGURIDAD'
        );

        const lista = result.recordset;
        return {
            status_code: result.output.STATUS_CODE,
            status_desc: result.output.STATUS_DESC,
            lista
        };

    } catch (error) {
        return {
            status_code: error.code || 500,
            status_desc: error.message
        };
    };
};

operations.createPermisosRol = async (permisos, idusuario) => {
    try {
        const result = await databaseFuncs.executeStoredProcedure(
            'SP_CREAR_PERMISOS',
            {
                PERMISOS: { type: sql.VarChar, value: permisos },
                ID_USUARIO: { type: sql.Int, value: idusuario }
            },
            {
                STATUS_CODE: sql.Int,
                STATUS_DESC: sql.VarChar(500)
            },
            'MOD_SEGURIDAD'
        );

        
        return {
            status_code: result.output.STATUS_CODE,
            status_desc: result.output.STATUS_DESC
        };

    } catch (error) {
        return {
            user: null,
            status_code: error.code || 500,
            status_desc: error.message
        };
    };
};

operations.createRol = async (bd) => {
    try {
        const result = await databaseFuncs.executeStoredProcedure(
            'SP_CREAR_ROL',
            {
                NOMBRE_ROL: { type: sql.VarChar, value: bd.nombre_rol },
                DESCRIPCION: { type: sql.VarChar, value: bd.descripcion },
                ID_USUARIO: { type: sql.Int, value: bd.id_usuario}
            },
            {
                CODIGO: sql.Int,
                STATUS_CODE: sql.Int,
                STATUS_DESC: sql.VarChar(500)
            },
            'MOD_SEGURIDAD'
        );


        return {
            status_code: result.output.STATUS_CODE,
            status_desc: result.output.STATUS_DESC,
            id_rol: result.output.CODIGO
        };

    } catch (error) {
        return {
            status_code: error.code || 500,
            status_desc: error.message
        };
    };
};

operations.updateStatusRol = async (bd) => {
    try {
        const result = await databaseFuncs.executeStoredProcedure(
            'SP_ESTADO_ROL',
            {
                ID_ROL: { type: sql.Int, value: bd.id_rol },
                ESTADO: { type: sql.Int, value: bd.estado },
                ID_USUARIO: { type: sql.Int, value: bd.id_usuario }
            },
            {
                STATUS_CODE: sql.Int,
                STATUS_DESC: sql.VarChar(500)
            },
            'MOD_SEGURIDAD'
        );


        return {
            status_code: result.output.STATUS_CODE,
            status_desc: result.output.STATUS_DESC
        };

    } catch (error) {
        return {
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

operations.getRoles = async (bd) => {
    try {
        const result = await databaseFuncs.executeStoredProcedure(
            'SP_GET_ROLES',
            {
                ORDERCOLUMN: { type: sql.VarChar, value: bd.ordercolumn },
                ORDERDIRECTION: { type: sql.VarChar, value: bd.orderdirection },
                PAGENUMBER: { type: sql.Int, value: bd.pagenumber },
                PAGESIZE: { type: sql.Int, value: bd.pagesize },
                ID_ROL: { type: sql.Int, value: bd.id_rol },
                NOMBRE_ROL: { type: sql.VarChar, value: bd.nombre_rol },
                DESCRIPCION: { type: sql.VarChar, value: bd.descripcion },
                ESTADO: { type: sql.Int, value: bd.estado },
                FECHAINICIO: { type: sql.VarChar, value: bd.fechainicio },
                FECHAFINAL: { type: sql.VarChar, value: bd.fechafinal }
            },
            {
                TOTALREGISTROS: sql.Int,
                STATUS_CODE: sql.Int,
                STATUS_DESC: sql.VarChar(500)
            },
            'MOD_SEGURIDAD'
        );

        const lista = result.recordsets[0];
        return {
            status_code: result.output.STATUS_CODE,
            status_desc: result.output.STATUS_DESC,
            totalRegistros: result.output.TOTALREGISTROS,
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