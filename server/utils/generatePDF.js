const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');


const generatePDF = (products, totalAmount) => {
  return new Promise((resolve, reject) => {
    const filename = `invoice-${Date.now()}.pdf`;
    const filepath = path.join(__dirname, '../invoices', filename);

    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(filepath));

    doc.fontSize(16).text('Invoice', { underline: true });
    doc.moveDown();

    products.forEach(p => {
      doc.text(`${p.name} - Qty: ${p.quantity} - ₹${p.price}`);
    });

    doc.moveDown();
    doc.fontSize(14).text(`Total: ₹${totalAmount}`);

    doc.end();
    doc.on('finish', () => resolve(filename));
    doc.on('error', reject);
  });
};

module.exports = generatePDF;
