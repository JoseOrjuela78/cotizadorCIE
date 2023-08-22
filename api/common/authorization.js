const jwt = require('jsonwebtoken'); // sql

//=========================
//VERIFICA TOKEN
//=========================

const verificaToken = (request, response, next) => {
    let token = request.get('token');
    jwt.verify(token, 'C13C0L0M814_C07', (err, decoded) => {
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

module.exports = {
    verificaToken
};