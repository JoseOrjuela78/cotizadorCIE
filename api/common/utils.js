const { Parser } = require('json2csv');

const utils = {};
utils.createCSV = async (data) => { 
    
    const fields = Object.keys(data[0]);
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(data);
    return csv;
};

module.exports = utils;