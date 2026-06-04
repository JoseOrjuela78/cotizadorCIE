const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const logger = require('../common/logger');
const AppError = require('../common/appError');
const operations = require('./userOperations');
const utils = require('../common/utils');


module.exports.getUsersPag = async (request, response) => {

    const body = request.body;
    logger.info(`Entry getUsersPag with: ${JSON.stringify({ body })})}`);
    const attString = ['OrderColumn', 'OrderDirection', 'identificacion', 'username', 'nombres', 'FechaInicio','FechaFinal'];
    const attNumber = ['PageNumber', 'PageSize', 'rol', 'estado'];

    const searchFilters = {
                            OrderColumn: "id_usuario",
                            OrderDirection: "ASC",
                            PageNumber: null,
                            PageSize : null,
                            identificacion : null,
                            username : null,
                            nombres : null,
                            rol : null,
                            estado : null,
                            FechaInicio : null,
                            FechaFinal : null
    };

    try {
        
    for (let key in body) {
        const status = body[key] === null;
        if (!status && attString.includes(key) && typeof body[key] != 'string') throw new AppError(`${key} debe ser un string`, 422);
        if (!status && attNumber.includes(key) && typeof body[key] != 'number') throw new AppError(`${key} debe ser un numero`, 422);
        if (!status) searchFilters[key] = body[key];
    };
       
        const result = await operations.getUsersPag(searchFilters);
 
        if (result.status_code != 200) throw new AppError(result.status_desc, result.status_code);

        logger.info(`${JSON.stringify(result)}`);

        response.status(result.status_code).json({
            ok: true,
            msg: result.status_desc,
            totalRegistros: result.totalRegistros,
            users: result.users
        });

    } catch (error) {
        logger.error(`${error}`);
        response.status(error.statusCode).json({
            ok: false,
            msg: error.message
        });
    };

};

module.exports.postUser = async (request, response) => {
    
    try {
        const user = request.usuario;
        const bd = request.body;

        const salt = bcrypt.genSaltSync(10);
        bd.password = bcrypt.hashSync(bd.pass, salt);
        bd.nombre = String(bd.nombre).toLocaleUpperCase();
        bd.apellido = String(bd.apellido).toLocaleUpperCase();

        logger.info(`Entry postUser body: ${JSON.stringify(bd)}`);

        const result = await operations.postUserR(bd);
        
        if (result.status_code != 200) throw new AppError(result.status_desc, result.status_code);
        
        const userCreated = result.user;
        logger.info(`${JSON.stringify({ status_code: result.status_code, status_desc: result.status_desc, user: userCreated })}`);

        response.status(result.status_code).json({
            ok: true,
            msg: result.status_desc,
            user: userCreated
        });
        

    } catch (error) {
        logger.error(`${error}`);
        response.status(error.statusCode).json({
            ok: false,
            msg: error.message
        });
    
    }

};

module.exports.login = async (request, response) => {
   
    try {
        const bd = request.body;

        logger.info(`Entry login: ${JSON.stringify(bd)}`);

        const result = await operations.loginR(bd);

        if (result.status_code != 200) throw new AppError(result.status_desc, result.status_code);

        const pass = result.pass;

        if (!bcrypt.compareSync(bd.pass, pass)) throw new AppError(422, 'Credenciales incorrectas');


        const token = jwt.sign({ usuario: result.user }, process.env.JWT_KEY, { expiresIn: '8h' });
        const user = result.user;

        logger.info(`Login exitoso: ${JSON.stringify({
            ok: true,
            msg: result.status_desc,
            token,
            user
        })}`);

        response.status(result.status_code).json({
            ok: true,
            msg: result.status_desc,
            token,
            user
        });
        
    } catch (error) {
        logger.error(`${error}`);
        response.status(error.statusCode).json({
            ok: false,
            msg: error.message
        });
       
    }

};

module.exports.updateUser = async (request, response) => {

    try {

        const identificacion = request.params.id
        const bd = request.body;

        logger.info(`Entry updateUser body: ${JSON.stringify(bd)}`);

        if (typeof bd.pass == 'string' && bd.pass.trim() != '' ) {
            const salt = bcrypt.genSaltSync(10);
            bd.pass = bcrypt.hashSync(bd.pass, salt);
        };

        bd.nombre = String(bd.nombre).toLocaleUpperCase();
        bd.apellido = String(bd.apellido).toLocaleUpperCase();

        logger.info(`Entry body: ${ JSON.stringify(bd) }`);

        const result = await operations.updateUserR(identificacion, bd);

        if (result.status_code != 200) throw new AppError(result.status_desc, result.status_code);

        const user = result.user;
        logger.info(`${JSON.stringify({ status_code: result.status_code, status_desc: result.status_desc, user })}`);

        response.status(result.status_code).json({
            ok: true,
            msg: result.status_desc,
            user
        });

    } catch (error) {
        logger.error(`${error}`);
        response.status(error.statusCode).json({
            ok: false,
            msg: error.message
        });
    }

};

module.exports.getRolSchema = async (request, response) => {

    try {
        const idRol = request. params.idRol || '0';
        const codigo_lista = 4;//Lista de acciones
        
        logger.info(`Entry getRolMenus get lista : ${codigo_lista}`);

        const result1 = await operations.getListaDetalle(codigo_lista);
                  
        if (result1.status_code != 200) throw new AppError(result1.status_desc, result1.status_code);

        logger.info(`${JSON.stringify({ status_code: result1.status_code, status_desc: result1.status_desc, result1 })}`);

        const result2 = await operations.getListaMenus();

        if (result2.status_code != 200) throw new AppError(result2.status_desc, result2.status_code);

        logger.info(`${JSON.stringify({ status_code: result2.status_code, status_desc: result2.status_desc, result2 })}`);

        const rolSchema = await utils.createRolSchema(idRol, result1.lista, result2.lista);

        if (idRol != null && idRol != 0) {

            const result3 = await operations.getPermisosRol(parseInt(idRol));

            if (result3.status_code != 200) throw new AppError(result3.status_desc, result3.status_code);

            logger.info(`${JSON.stringify({ status_code: result3.status_code, status_desc: result3.status_desc, result3 })}`);

            for (let i of result3.lista) {
                const { ID_MENU, ID_ACCION } = i;
                for (let e in rolSchema) { 
                    if (rolSchema[e].idMenu === ID_MENU) { 
                        for (let i in rolSchema[e].idAction) { 
                            if (rolSchema[e].idAction[i].codigo === ID_ACCION) { 
                                rolSchema[e].idAction[i].status = true;
                            }; 
                        };
                    };
                    
                };
                
            };

          return  response.status(result3.status_code).json({
                                                            ok: true,
                                                            msg: result3.status_desc,
                                                            rolSchema
          });
            

        };
        
        
        response.status(result2.status_code).json({
            ok: true,
            msg: result2.status_desc,
            rolSchema
        });
   
    } catch (error) {
        logger.error(`${error}`);
        response.status(error.statusCode).json({
            ok: false,
            msg: error.message
        });
    }

};