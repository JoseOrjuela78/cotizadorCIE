const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const logger = require('../common/logger');
const AppError = require('../common/appError');
const operations = require('./userOperations');
const utils = require('../common/utils');


module.exports.getUsersPag = async (request, response) => {

    const body = request.body;
    logger.info(`Entry getUsersPag with: ${JSON.stringify({ body })})}`);
    const attString = ['ordercolumn', 'orderdirection', 'identificacion', 'razon_social', 'nombre', 'email', 'telefono', 'fechainicio','fechafinal'];
    const attNumber = ['pagenumber', 'pagesize', 'id_usuario', 'tipo_persona', 'tipo_identificacion', 'genero', 'ciudad', 'id_rol','estado'];

    const searchFilters = {
        "ordercolumn": "ID_USUARIO",
        "orderdirection": "ASC",
        "pagenumber": null,
        "pagesize": null,
        "identificacion": null,
        "id_usuario": null,
        "tipo_persona": null,
        "tipo_identificacion": null,
        "razon_social": null,
        "nombre": null,
        "email": null,
        "genero": null,
        "ciudad": null,
        "telefono": null,
        "id_rol": null,
        "estado": null,
        "fechainicio": null,
        "fechafinal": null
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
        const user = request.usuario.ID_USUARIO;
        const bd = request.body;

        const salt = bcrypt.genSaltSync(10);
        bd.pass = bcrypt.hashSync(bd.pass, salt);
        bd.nombre1 = String(bd.nombre1).toLocaleUpperCase().trim();
        bd.nombre2 = String(bd.nombre2).toLocaleUpperCase().trim();
        bd.apellido1 = String(bd.apellido1).toLocaleUpperCase().trim();
        bd.apellido2 = String(bd.apellido2).toLocaleUpperCase().trim();
        bd.id_usuario = user.id_usuario;

        logger.info(`Entry postUser body: ${JSON.stringify(bd)}`);

     
        
        const result = await operations.postUserR(bd);
        
        if (result.status_code != 200) throw new AppError(result.status_desc, result.status_code);
        
        logger.info(`${JSON.stringify({ status_code: result.status_code, status_desc: result.status_desc, result })}`);

        const codigo = result.codigo;

        response.status(result.status_code).json({
            ok: true,
            msg: result.status_desc,
            codigo
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

        const bd = request.body;
        bd.id_usuario = request.usuario.ID_USUARIO;

        logger.info(`Entry updateUser body: ${JSON.stringify(bd)}`);

        const result = await operations.updateUserR(bd);

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

module.exports.updateStatusUser = async (request, response) => {

    try {
        const bd = request.body;
        bd.id_usuario = request.usuario.ID_USUARIO;

        logger.info(`Entry updateStatusUser body: ${JSON.stringify(bd)}`);

        const result = await operations.updateStatusUserR(bd);

        if (result.status_code != 200) throw new AppError(result.status_desc, result.status_code);

        logger.info(`${JSON.stringify({ status_code: result.status_code, status_desc: result.status_desc, result })}`);

        response.status(result.status_code).json({
            ok: true,
            msg: result.status_desc
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
        const idRol = request.params.idRol || '0';
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

            if (result3.status_code === 200) {

                logger.info(`${JSON.stringify({ status_code: result3.status_code, status_desc: result3.status_desc, result3 })}`);

                for (let i of result3.lista) {
                    const { ID_MENU, ID_ACCION, ESTADO } = i;
                    for (let e in rolSchema) {
                        if (rolSchema[e].idMenu === ID_MENU) {
                            for (let i in rolSchema[e].idAction) {
                                if (rolSchema[e].idAction[i].codigo === ID_ACCION && ESTADO == 1) {
                                    rolSchema[e].idAction[i].status = ESTADO;
                                };
                            };
                        };
                    
                    };
                
                };

                return response.status(result3.status_code).json({
                    ok: true,
                    msg: result3.status_desc,
                    rolSchema
                });
            
            };

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

module.exports.getLista = async (request, response) => {

    try {
        const idLista = request.params.idLista || '0';
     

        logger.info(`Entry getLista get lista : ${idLista}`);

        const result = await operations.getListaDetalle(idLista);

        if (result.status_code != 200) throw new AppError(result.status_desc, result.status_code);

        logger.info(`${JSON.stringify({ status_code: result.status_code, status_desc: result.status_desc, result})}`);

       
        return response.status(result.status_code).json({
                ok: true,
                msg: result.status_desc,
            lista: result.lista
            });


    } catch (error) {
        logger.error(`${error}`);
        response.status(error.statusCode).json({
            ok: false,
            msg: error.message
        });
    }

};

module.exports.getCiudades = async (request, response) => {

    try {
        const codigo_pais = request.params.codPais;
       
        logger.info(`Entry getCiudades get lista : ${JSON.stringify({ codigo_pais})}`);

        const result = await operations.getListaCiudades({ codigo_pais});

        if (result.status_code != 200) throw new AppError(result.status_desc, result.status_code);

        logger.info(`${JSON.stringify({ status_code: result.status_code, status_desc: result.status_desc, result })}`);

        return response.status(result.status_code).json({
            ok: true,
            msg: result.status_desc,
            lista: result.lista
        });


    } catch (error) {
        logger.error(`${error}`);
        response.status(error.statusCode).json({
            ok: false,
            msg: error.message
        });
    }

};

module.exports.getRolesPag = async (request, response) => {

    const body = request.body;
    body.estado = parseInt(body.estado);
    logger.info(`Entry getRolesPag with: ${JSON.stringify({ body })})}`);
    const attString = ['ordercolumn', 'orderdirection', 'nombre_rol', 'descripcion', 'fechainicio', 'fechafinal'];
    const attNumber = ['pagenumber', 'pagesize','id_rol', 'estado'];

    const searchFilters = {
        "ordercolumn": null,
        "orderdirection": null,
        "pagenumber": null,
        "pagesize": null,
        "id_rol": null,
        "nombre_rol": null,
        "descripcion": null,
        "estado": null,
        "fechainicio": null,
        "fechafinal": null
    };


    try {

        for (let key in body) {
            const status = body[key] === null;
            if (!status && attString.includes(key) && typeof body[key] != 'string') throw new AppError(`${key} debe ser un string`, 422);
            if (!status && attNumber.includes(key) && typeof body[key] != 'number') throw new AppError(`${key} debe ser un numero`, 422);
            if (!status) searchFilters[key] = body[key];
        };

        const result = await operations.getRoles(searchFilters);

        if (result.status_code != 200) throw new AppError(result.status_desc, result.status_code);

        logger.info(`${JSON.stringify(result)}`);

        response.status(result.status_code).json({
            ok: true,
            msg: result.status_desc,
            totalRegistros: result.totalRegistros,
            lista: result.lista
        });

    } catch (error) {
        logger.error(`${error}`);
        response.status(error.statusCode).json({
            ok: false,
            msg: error.message
        });
    };


};

module.exports.createPermisosRol = async (request, response) => {

    const idUsuario = request.usuario.ID_USUARIO;
    const body = request.body;

    logger.info(`Entry createPermisosRol with: ${JSON.stringify({ body, idUsuario })})}`);

    try {

        const permits = JSON.parse(body.permisos);

        const rows = [];
        const row = {
            ID_ROL: 0,
            ID_MENU: 0,
            ID_ACCION: 0,
            ESTADO: 0
        }

        for (let i of permits) {
            row.ID_ROL = Number(i.idRol)
            row.ID_MENU = i.idMenu
            for (let j of i.idAction) {
                row.ID_ACCION = j.codigo;
                row.ESTADO = j.status ? 1 : 0;
                rows.push({ ...row })
                continue;
            }
        };

        const permisos = JSON.stringify(rows);
         
        const result = await operations.createPermisosRol(permisos, idUsuario);

        if (result.status_code != 200) throw new AppError(result.status_desc, result.status_code);

        logger.info(`${JSON.stringify(result)}`);

        response.status(result.status_code).json({
            ok: true,
            msg: result.status_desc
        });
               

    } catch (error) {
        logger.error(`${error}`);
        response.status(error.statusCode).json({
            ok: false,
            msg: error.message
        });
    };


};

module.exports.createRol = async (request, response) => {

    const id_usuario = request.usuario.ID_USUARIO;
    const body = request.body;
    body.nombre_rol = String(body.nombre_rol).toLocaleUpperCase().trim();
    body.id_usuario = id_usuario;

    logger.info(`Entry createRol with: ${JSON.stringify({ body })})}`);

    try {
           
        const result = await operations.createRol(body);

        if (result.status_code != 200) throw new AppError(result.status_desc, result.status_code);

        logger.info(`${JSON.stringify(result)}`);

        response.status(result.status_code).json({
            ok: true,
            msg: result.status_desc,
            id_rol: result.id_rol
        });


    } catch (error) {
        logger.error(`${error}`);
        response.status(error.statusCode).json({
            ok: false,
            msg: error.message
        });
    };


};

module.exports.updateStatusRol = async (request, response) => {

    try {
        const bd = request.body;
        bd.id_usuario = request.usuario.ID_USUARIO;

        logger.info(`Entry updateStatusRol body: ${JSON.stringify(bd)}`);

        const result = await operations.updateStatusRol(bd);

        if (result.status_code != 200) throw new AppError(result.status_desc, result.status_code);

        logger.info(`${JSON.stringify({ status_code: result.status_code, status_desc: result.status_desc, result })}`);

        response.status(result.status_code).json({
            ok: true,
            msg: result.status_desc
        });

    } catch (error) {
        logger.error(`${error}`);
        response.status(error.statusCode).json({
            ok: false,
            msg: error.message
        });
    }

};