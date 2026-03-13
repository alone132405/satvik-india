const express = require('express');
const router = express.Router();
const { auth, admin } = require('../middleware/auth');
const {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProductsAdmin
} = require('../controllers/productController');

// Public routes
router.get('/', getAllProducts);
router.get('/:id', getProduct);

// Admin routes
router.get('/admin/all', auth, admin, getAllProductsAdmin);
router.post('/', auth, admin, createProduct);
router.put('/:id', auth, admin, updateProduct);
router.delete('/:id', auth, admin, deleteProduct);

module.exports = router;
