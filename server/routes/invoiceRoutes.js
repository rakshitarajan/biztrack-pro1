const express = require('express');
const router = express.Router();
const Invoice = require('../models/Invoice');
const generatePDF = require('../utils/generatePDF');

router.post('/generate', async (req, res) => {
  console.log("Received products:", req.body.products); // 👈 Add this line

  // Your existing code below...
});

// 🔁 GET all invoices
router.get('/', async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// 🧾 POST generate new invoice
router.post('/generate', async (req, res) => {
  const { products } = req.body;

  if (!products || !Array.isArray(products) || products.length === 0) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  try {
    const totalAmount = products.reduce((acc, p) => acc + p.quantity * p.price, 0);
    const invoiceFile = await generatePDF(products, totalAmount);
    const invoice = new Invoice({ products, totalAmount, invoiceFile });
    await invoice.save();

    res.json({ message: 'Invoice generated and saved!', invoice });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error generating invoice' });
  }
});

module.exports = router;
