const jwt = require('jsonwebtoken'); // sql
const utils = require('../common/utils');
const databaseFuncs = require('../common/database');
const sql = require('mssql');

//=========================
//VERIFICA TOKEN
//=========================

const verificaToken = (request, response, next) => {
    
    const authHeader = request.headers['authorization'];

    // Verificamos que exista y tenga el formato correcto
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return response.status(422).json({ error: 'Token no proporcionado o inválido' });
    };

    // Extraemos el token
    const token = authHeader.split(' ')[1];

    jwt.verify(token,process.env.JWT_KEY, async (err, decoded) => {
        if (err) {
            return response.status(401).json({
                ok: false,
                err
            });
        }
        request.usuario = decoded.usuario;
        
        const status = await verificaPermits(request);
        if (!status) { return response.status(422).json({ error: 'privilegios insufientes' });};
        
        next();
    });
};

const verificaPermits = async(request) => {
        try {
          
            const result = await databaseFuncs.executeStoredProcedure(
            'PR_GET_PATH_PERMITIDO',
                {
                    ID_ROL: { type: sql.Int, value: request.usuario.ID_ROL}
                },
                {
                    STATUS_CODE: sql.Int,
                    STATUS_DESC: sql.VarChar(500)
                },
                'MOD_SEGURIDAD'
            );
            
            const dbPaths = result.recordsets[0];

            if(dbPaths.length <= 0){return false;};
          
            for (let per of dbPaths) {
                if (request.method === per.method && utils.pathToRegex(per.path, request.path)) {
                    return true;
                };
            };

            return false;
          
        } catch (error) {
            
            return false;

        }
};


module.exports = {
    verificaToken
};