const PDFDocument = require('pdfkit-table');
const path = require('path');

module.exports = async function buildPdf(dataCalback, endCallback) {


    const bd = {
        "data": global.quoteDta,
        "detail": global.quoteDetail,
        "total": global.quoteTotal
    };

    const { data, detail, total } = bd;

    const dtBody = JSON.parse(data);

    const idCot = (dtBody.id_cotizacion).toString();
    const customer = dtBody.cliente.toUpperCase();
    const fecha = (dtBody.fecha_update).toString();
    const seller = dtBody.vendedor.toUpperCase();

    const arr = JSON.parse(detail);

    const rowsBody = [];
    arr.forEach((element, index) => {
        const id = (index + 1).toString();
        const descripcion = (element.descripcion).toUpperCase();
        const cantidad = (element.cantidad).toString();
        const precio = `$${(element.preciolistaCOP).toLocaleString()}`;
        const total = `$${(element.preciototal).toLocaleString()}`;

        rowsBody.push([id, descripcion, cantidad, "pcs.", precio, total]);
    });

    const totalBody = `$${(JSON.parse(total)[0].TOTAL).toLocaleString()}`;
    const Iva = `$${(JSON.parse(total)[0].TOTAL * 0.19).toLocaleString()}`;
    const totalIva = `$${(JSON.parse(total)[0].TOTAL * 1.19).toLocaleString()}`;

    const marginLeft = 50;

    const doc = new PDFDocument({ margin: 50, size: 'A4' });

    const tablePrin = {

        headers: ["item", "Artículo / Descripción", "Cant.", "Unidades", "Precio", "Total"],
        rows: rowsBody

    };

    let totaRows = tablePrin.rows.length;

    if (totaRows > 14) {
        console.log('cantidad no soportada');
        return
    };
    let addspace = 0;
    let marginY = 450;
    let marginYfirmas = 240;



    if (totaRows > 3) {

        addspace = (totaRows - 3);
        addspace = addspace < 0 ? 0 : (25 * addspace);


    }


    const tableSecun = {

        headers: ["", ""],
        rows: [
            ["Sub Total:", totalBody],
            ["Impuesto de ventas (19%):", Iva],
            ["Total:", totalIva],
        ],
    };


    doc.on("data", dataCalback);
    doc.on("end", endCallback);
    doc.image(path.join(__dirname, './img/logo.png'), marginLeft, 30, { width: 300 });
    doc.fontSize(12).font('Helvetica-Bold').text(`Señores: ${customer}`, marginLeft, 155);
    doc.fontSize(11).font('Helvetica-Bold').text(`Girada el: ${fecha}`, 350, 180);
    doc.fontSize(11).font('Helvetica-Bold').text(`Cotización # ${idCot}`, marginLeft, 180);

    doc.image(path.join(__dirname, './img/p1.png'), marginLeft, 200, { width: 500 });

    // or columnsSize
    await doc.table(tablePrin, {
        x: 0,
        y: 280,
        columnsSize: [30, 250, 30, 50, 50, 70],
    });

    if (totaRows > 14) {

        marginY + addspace;

    }
    await doc.table(tableSecun, {
        x: 360,
        y: (380 + addspace),
        columnsSize: [100, 70],
    })


    if (totaRows > 4) {
        doc.addPage();
        marginY = 0;
        marginYfirmas = 300;
    };

    doc.image(path.join(__dirname, './img/p2.png'), marginLeft, (marginY), { width: 500 });
    doc.fontSize(10).font('Helvetica-Bold').text(`Elaboro:   ____________________________________________  (${seller})`, marginLeft, (marginY + marginYfirmas));
    doc.fontSize(10).font('Helvetica-Bold').text(`Elaboro:   ____________________________________________  (${seller})`, marginLeft, (marginY + marginYfirmas + 40));
    doc.end();

};