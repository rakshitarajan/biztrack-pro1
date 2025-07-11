const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number
});

const InvoiceSchema = new mongoose.Schema({
  products: [ProductSchema],
  totalAmount: Number,
  invoiceFile: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
