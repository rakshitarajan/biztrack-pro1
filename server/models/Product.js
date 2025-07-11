const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    sku: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
    },
    quantity: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Product', productSchema);
