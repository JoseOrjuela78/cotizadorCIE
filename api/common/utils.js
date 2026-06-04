const { Parser } = require('json2csv');

const utils = {};
utils.createCSV = async (data) => { 
    
    const fields = Object.keys(data[0]);
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(data);
    return csv;
};

utils.createRolSchema = async (idRol, acciones, menus) => {
    const rolSchema = [];
    if (idRol === '0')idRol = null;
    menus.forEach(Element => {

        const row = {
            idRol: idRol,
            titulo: Element.TITULO,
            idMenu: Element.ID_MENU,
            idAction: acciones.map(x => ({ codigo: x.CODIGO, valor: x.VALOR , status:false}))
        };

        rolSchema.push(row);

    });

    return rolSchema;
}

module.exports = utils;