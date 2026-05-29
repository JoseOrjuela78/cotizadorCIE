const logger = require('../common/logger');
const operations = require('./quotesOperations');
const AppError = require('../common/appError');


module.exports.createQuote = async (request, response) => {
    const user = request.usuario;
    const body = request.body;
    body.vendedor = user.nombre + " " + user.apellido;
    body.id_usuario = user.id_usuario;
    logger.info(`Entry createQuote with: ${JSON.stringify({ body, user })})}`);
    const attString = ['cliente','vendedor'];
    const attNumber = ['@id_usuario'];

    try { 
        for (let key in body) {
            const status = body[key] === null || body[key] === undefined;
            if (status) throw new AppError(`${key} no puede ser nulo`, 422);
            if (!status && typeof status === 'string' && body[key].trim() === '') throw new AppError(`${key} no puede estar vacío`, 422);
            if (!status && attString.includes(key) && typeof body[key] != 'string') throw new AppError(`${key} debe ser un string`, 422);
            if (!status && attNumber.includes(key) && typeof body[key] != 'number') throw new AppError(`${key} debe ser un numero`, 422);
        };

        body.cliente = body.cliente.toString().toLocaleUpperCase();
             
        const result = await operations.createQuoteR(body);

        if (result.status_code != 200) throw new AppError(result.status_desc, result.status_code);

        logger.info(`${JSON.stringify(result)}`);

        response.status(result.status_code).json({
            ok: true,
            msg: result.status_desc,
            id_quote: result.id_cotizacion
        });

    } catch (error) { 
        logger.error(`${error}`);
        response.status(error.statusCode).json({
            ok: false,
            msg: error.message
        });
    }

};

module.exports.createQuoteDetail = async(request, response) => {
    const user = request.usuario;
    const body = request.body;
    body.id_usuario = user.id_usuario;
    logger.info(`Entry createQuoteDetail with: ${JSON.stringify({ body, user })})}`);
    const attNumber = ['id_cotizacion', 'id_detalle','cantidad','largoCM','anchoCM','altoCM','peso_kg'];
    try { 
        for (let key in body) {
            const status = body[key] === null || body[key] === undefined;
            if (status) throw new AppError(`${key} no puede ser nulo`, 422);
            if (!status && typeof status === 'string' && body[key].trim() === '') throw new AppError(`${key} no puede estar vacío`, 422);
            if (!status && attNumber.includes(key) && typeof body[key] != 'number') throw new AppError(`${key} debe ser un numero`, 422);
        };

        const result = await operations.createQuoteDetailR(body);
        if (result.status_code != 200) throw new AppError(result.status_desc, result.status_code);
        logger.info(`${JSON.stringify(result)}`);

        response.status(result.status_code).json({
            ok: true,
            msg: result.status_desc,
            id_quote_detail: result.id_cotdetalle
        });

    } catch (error) {
        logger.error(`${error}`);
        response.status(error.statusCode).json({
            ok: false,
            msg: error.message
        });
    };
};

module.exports.updateQuoteDetail = async (request, response) => {

    const user = request.usuario;
    const body = request.body;
    body.id_usuario = user.id_usuario;
    logger.info(`Entry updateQuoteDetail with: ${JSON.stringify({ body, user })})}`);

    const attNumber = ['id_cotdetalle', 'cantidad', 'largoCM', 'anchoCM', 'altoCM', 'peso_kg', 'id_usuario'];
    try {
        for (let key in body) {
            const status = body[key] === null || body[key] === undefined;
            if (status) throw new AppError(`${key} no puede ser nulo`, 422);
            if (!status && typeof status === 'string' && body[key].trim() === '') throw new AppError(`${key} no puede estar vacío`, 422);
            if (!status && attNumber.includes(key) && typeof body[key] != 'number') throw new AppError(`${key} debe ser un numero`, 422);
        };

        const result = await operations.updateQuoteDetailR(body);
        if (result.status_code != 200) throw new AppError(result.status_desc, result.status_code);
        logger.info(`${JSON.stringify(result)}`);

        response.status(result.status_code).json({
            ok: true,
            msg: result.status_desc,
            data: result.data
        });

    } catch (error) {
        logger.error(`${error}`);
        response.status(error.statusCode).json({
            ok: false,
            msg: error.message
        });
    };
};

module.exports.deleteQuoteDetail = async(request, response) => {

    const id = parseInt(request.params.id);
    logger.info(`Entry deleteQuoteDetail id: ${id}`);

    try {

        const result = await operations.deleteQuoteDetail(id);
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
}

module.exports.generateQuote = async (request, response) => {

    const user = request.usuario;
    const body = request.body;
    body.id_usuario = user.id_usuario;
    logger.info(`Entry generateQuote with: ${JSON.stringify({ body, user })})}`);

    const attNumber = ['id_cotdetalle', 'id_detalle', 'id_usuario'];
    
    try {
        for (let key in body) {
            const status = body[key] === null || body[key] === undefined;
            if (status) throw new AppError(`${key} no puede ser nulo`, 422);
            if (!status && typeof status === 'string' && body[key].trim() === '') throw new AppError(`${key} no puede estar vacío`, 422);
            if (!status && attNumber.includes(key) && typeof body[key] != 'number') throw new AppError(`${key} debe ser un numero`, 422);
        };

        const result = await operations.generateQuoteR(body);
        if (result.status_code != 200) throw new AppError(result.status_desc, result.status_code);
        logger.info(`${JSON.stringify(result)}`);

        const quote_detail = result.quote_detail;

        response.status(result.status_code).json({
            ok: true,
            msg: result.status_desc,
            quote_detail
        });

    } catch (error) {
        logger.error(`${error}`);
        response.status(error.statusCode).json({
            ok: false,
            msg: error.message
        });
    };
}

module.exports.getQuotes = async (request, response) => {

    const idquote = parseInt(request.params.idquote);
    logger.info(`Entry getQuotes idquote: ${idquote}`);

    try {

        const result = await operations.getQuotesR(idquote);
        if (result.status_code != 200) {
            throw new AppError(result.status_desc, result.status_code);
        };
        
        logger.info(`${JSON.stringify(result)}`);
    
        const valor_total = result.valor_total;
        const data = result.data;
        
        response.status(result.status_code).json({
            ok: true,
            msg: result.status_desc,
            data,
            valor_total
        });


    } catch (error) {
        logger.error(`${error}`);
        response.status(error.statusCode).json({
            ok: false,
            msg: error.message
        });
    };
};

module.exports.getRef = async (request, response) => {

    const key = request.params.key;
    logger.info(`Entry getRef key: ${key}`);

    try { 

        const result = await operations.getRefr(key);
        if (result.status_code != 200) throw new AppError(result.status_desc, result.status_code);
        logger.info(`${JSON.stringify(result)}`);

        const TotalRegistros = result.TotalRegistros;
        const data = result.data;

        response.status(result.status_code).json({
            ok: true,
            msg: result.status_desc,
            TotalRegistros,
            data
        });

    } catch (error) {
        logger.error(`${error}`);
        response.status(error.statusCode).json({
            ok: false,
            msg: error.message
        });
    };
};

module.exports.closerQuote = async (request, response) => {

    const body = request.body;
    logger.info(`Entry closerQuote body: ${JSON.stringify(body)}`);
    const attNumber = ['id_cotizacion'];

    try {

        for (let key in body) {
            const status = body[key] === null || body[key] === undefined;
            if (status) throw new AppError(`${key} no puede ser nulo`, 422);
            if (!status && typeof status === 'string' && body[key].trim() === '') throw new AppError(`${key} no puede estar vacío`, 422);
            if (!status && attNumber.includes(key) && typeof body[key] != 'number') throw new AppError(`${key} debe ser un numero`, 422);
        };

        const result = await operations.closerQuoteR(body);
        if (result.status_code != 200) throw new AppError(result.status_desc, result.status_code);
        
        logger.info(`${JSON.stringify(result)}`);

        const rows = result.rows;
        const total = result.valor_total;

        response.status(result.status_code).json({
            ok: true,
            msg: result.status_desc,
            rows,
            total
        });

    } catch (error) {
        logger.error(`${error}`);
        response.status(error.statusCode).json({
            ok: false,
            msg: error.message
        });
    };
}

module.exports.getTotalDto = async(request, response) => {

    const idquote = parseInt(request.params.idquote);
    logger.info(`Entry getTotalDto idquote: ${idquote}`);

    try {

        const result = await operations.getTotalDtoR(idquote);
        if (result.status_code != 200) throw new AppError(result.status_desc, result.status_code);

        logger.info(`${JSON.stringify(result)}`);

        const totalDto = result.totalDto;
        const TotalRegistros = result.TotalRegistros;

        response.status(result.status_code).json({
            ok: true,
            msg: result.status_desc,
            TotalRegistros,
            totalDto
        });

    } catch (error) {
        logger.error(`${error}`);
        response.status(error.statusCode).json({
            ok: false,
            msg: error.message
        });
    };
};

module.exports.Cpeso = async (request, response) => {

    const body = request.body;
    logger.info(`Entry Cpeso body: ${JSON.stringify(body)}`);
    const attNumber = ['id_detalle', 'cantidad', 'peso_kg', 'largoCM', 'anchoCM', 'altoCM'];

    try {

        for (let key in body) {
            const status = body[key] === null || body[key] === undefined;
            if (status) throw new AppError(`${key} no puede ser nulo`, 422);
            if (!status && typeof status === 'string' && body[key].trim() === '') throw new AppError(`${key} no puede estar vacío`, 422);
            if (!status && attNumber.includes(key) && typeof body[key] != 'number') throw new AppError(`${key} debe ser un numero`, 422);
        };

        const result = await operations.CpesoR(body);
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

module.exports.getCustomers = (request, response) => {
    const idUsuario = request.params.id;
    logger.info(`${new Date().toString()} Entry getCustomers idUsuario: ${idUsuario}`);

    operations.getCustomers(idUsuario).then((result) => {

        const message = 'GET LISTA CLIENTES';
        const list = result.recordsets[0];

        logger.info(`${new Date().toString()} Result getCustomers - ${list}`);

        response.status(200).json({
            message,
            list
        });

    })

};

module.exports.getidQuotes = (request, response) => {

    const cliente = request.params.cl;
    const idUsuario = parseInt(request.params.id);

    logger.info(`${new Date().toString()} Entry getidQuotes cliente: ${cliente}- idUsuario:${idUsuario}`);

    operations.getidQuotes(cliente, idUsuario).then((result) => {

        const message = `GET TABLA Cotizaciones`
        const data = JSON.stringify(result.recordset);

        logger.info(`${new Date().toString()} Result getidQuotes - data:${data}`);

        response.status(200).json({
            message,
            data

        });

    })

};

module.exports.getQuoteDetail = (request, response) => {
    const idquote = parseInt(request.params.idquote);
    logger.info(`${new Date().toString()} Entry getQuoteDetail idquote:${idquote}`);

    operations.getQuoteDetail(idquote).then((result) => {

        const codeIde = result.recordsets[0][0].COD || '0';

        if (codeIde == '404') {

            const message = result.recordsets[1][0].MSG;
            logger.info(`${new Date().toString()} getQuoteDetail - message: ${message} - codeIde: ${codeIde}`);

            response.status(200).json({
                message
            });

        } else {

            global.quoteDta = JSON.stringify(result.recordset[0]);
            global.quoteDetail = JSON.stringify(result.recordsets[1]);
            global.quoteTotalZona = JSON.stringify(result.recordsets[2]);
            global.quoteTotal = JSON.stringify(result.recordsets[3]);
            global.quoteTotalDto = JSON.stringify(result.recordsets[4]);
            global.userData = JSON.stringify(result.recordsets[5][0]);
            const code = parseInt(result.recordsets[6][0].COD);
            const message = result.recordsets[7][0].MSG;

            logger.info(`${new Date().toString()} Result getQuoteDetail - quoteDta: ${quoteDta} - quoteDetail: ${quoteDetail}- quoteTotalZona: ${quoteTotalZona}- quoteTotal: ${quoteTotal}- quoteTotalDto: ${quoteTotalDto}`);

            response.status(code).json({
                message,
                quoteDta,
                quoteDetail,
                quoteTotalZona,
                quoteTotal,
                quoteTotalDto
            });

        };


    })

};

module.exports.getBrands = (request, response) => {
    const key = request.params.key;

    logger.info(`${new Date().toString()} Entry getBrands key:${key}`);

    operations.getBrands().then((result) => {

        const message = 'GET LISTA MARCAS';
        const list = result.recordsets[0];

        logger.info(`${new Date().toString()} Result getBrands - ${list}`);

        response.status(200).json({
            message,
            list
        });

    })

};




module.exports.rescue = (request, response) => {
    const status = parseInt(request.params.status);
    console.log({ status });
    if (status == null || status == undefined) {
        global.rescue = 0;
    } else {
        global.rescue = status;
    };

    response.status(200).json({
        message: `status : ${global.rescue} activada`
    });

};