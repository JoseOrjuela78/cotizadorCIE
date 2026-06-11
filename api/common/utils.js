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
            idAction: acciones.map(x => ({ codigo: x.CODIGO, valor: x.VALOR , status:0}))
        };

        rolSchema.push(row);

    });

    return rolSchema;
}

utils.pathToRegex= (path, pathPequest) => {

  if(path === pathPequest) return true;

  const regex = new RegExp( '^' + path.replace(/:\w+/g, '[^/]+') +'$');
  
  return regex.test(pathPequest);
}


module.exports = utils;