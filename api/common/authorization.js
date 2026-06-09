const jwt = require('jsonwebtoken'); // sql

//=========================
//VERIFICA TOKEN
//=========================

const verificaToken = (request, response, next) => {
    //let token = request.get('token');
    const authHeader = request.headers['authorization'];
    // Verificamos que exista y tenga el formato correcto
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return response.status(401).json({ error: 'Token no proporcionado o inválido' });
    };

    // Extraemos el token
    const token = authHeader.split(' ')[1];

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