const jwt = require('jsonwebtoken'); // sql
const utils = require('../common/utils');

//=========================
//VERIFICA TOKEN
//=========================

const verificaToken = (request, response, next) => {
    
    const authHeader = request.headers['authorization'];

    // Verificamos que exista y tenga el formato correcto
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return response.status(422).json({ error: 'Token no proporcionado o inválido' });
    };

    if (!verificaPermits(request)){
      return response.status(422).json({ error: 'privilegios insufientes' });
    };
    // Extraemos el token
    const token = authHeader.split(' ')[1];

    jwt.verify(token,process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            return response.status(401).json({
                ok: false,
                err
            });
        }
        request.usuario = decoded.usuario;
        next();
    });

};

const verificaPermits = (request)=> {

 const dbPaths = [
    {method:"DELETE", path: "/api/quote-delete/:id"},
    {method:"POST",path:"/api/usuarios"}
];

console.log(JSON.stringify(dbPaths));

for (let per of dbPaths){
     if(request.method === per.method && utils.pathToRegex(per.path, request.path)){
          console.log('path encontrado');
          return true;
     }
};

return false;

};


module.exports = {
    verificaToken
};