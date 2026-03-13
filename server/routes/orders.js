const express = require('express');
const router = express.Router();
const { auth, admin } = require('../middleware/auth');
const {
    createOrder,
    getUserOrders,
    getOrder,
    getAllOrders,
    updateOrderStatus,
    cancelOrder
} = require('../controllers/orderController');

// User routes (require auth)
router.post('/', auth, createOrder);
router.get('/', auth, getUserOrders);
router.get('/:id', auth, getOrder);
router.put('/:id/cancel', auth, cancelOrder);

// Admin routes
router.get('/admin/all', auth, admin, getAllOrders);
router.put('/:id/status', auth, admin, updateOrderStatus);

module.exports = router;
