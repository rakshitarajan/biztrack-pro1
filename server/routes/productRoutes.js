const express = require('express');
const router = express.Router();

const {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

// CREATE product
router.post('/', createProduct);

// READ all products
router.get('/', getProducts);

// UPDATE product by ID
router.put('/:id', updateProduct);

// DELETE product by ID
router.delete('/:id', deleteProduct);

module.exports = router;
