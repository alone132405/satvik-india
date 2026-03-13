const prisma = require('../config/db');

// Create new order
const createOrder = async (req, res) => {
    try {
        const { addressId, notes } = req.body;

        // Get user's cart items
        const cartItems = await prisma.cartItem.findMany({
            where: { userId: req.user.id },
            include: { product: true }
        });

        if (cartItems.length === 0) {
            return res.status(400).json({ success: false, message: 'Cart is empty' });
        }

        // Check if address exists
        const address = await prisma.address.findFirst({
            where: { id: addressId, userId: req.user.id }
        });

        if (!address) {
            return res.status(400).json({ success: false, message: 'Invalid address' });
        }

        // Calculate total
        const totalAmount = cartItems.reduce((sum, item) => {
            return sum + (item.product.price * item.quantity);
        }, 0);

        // Create order with items
        const order = await prisma.order.create({
            data: {
                userId: req.user.id,
                addressId,
                totalAmount,
                notes,
                items: {
                    create: cartItems.map(item => ({
                        productId: item.productId,
                        quantity: item.quantity,
                        price: item.product.price
                    }))
                }
            },
            include: {
                items: { include: { product: true } },
                address: true
            }
        });

        // Clear user's cart
        await prisma.cartItem.deleteMany({
            where: { userId: req.user.id }
        });

        res.status(201).json({
            success: true,
            message: 'Order placed successfully',
            order
        });
    } catch (error) {
        console.error('Create order error:', error);
        res.status(500).json({ success: false, message: 'Failed to create order' });
    }
};

// Get user's orders
const getUserOrders = async (req, res) => {
    try {
        const orders = await prisma.order.findMany({
            where: { userId: req.user.id },
            include: {
                items: { include: { product: true } },
                address: true
            },
            orderBy: { createdAt: 'desc' }
        });

        res.json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch orders' });
    }
};

// Get single order
const getOrder = async (req, res) => {
    try {
        const order = await prisma.order.findFirst({
            where: {
                id: req.params.id,
                userId: req.user.id
            },
            include: {
                items: { include: { product: true } },
                address: true
            }
        });

        if (!order) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        res.json({ success: true, order });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch order' });
    }
};

// Get all orders (Admin only)
const getAllOrders = async (req, res) => {
    try {
        const { status } = req.query;

        const orders = await prisma.order.findMany({
            where: status ? { status } : undefined,
            include: {
                user: { select: { id: true, name: true, email: true, phone: true } },
                items: { include: { product: true } },
                address: true
            },
            orderBy: { createdAt: 'desc' }
        });

        res.json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch orders' });
    }
};

// Update order status (Admin only)
const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const validStatuses = ['PENDING', 'CONFIRMED', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED'];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ success: false, message: 'Invalid status' });
        }

        const order = await prisma.order.update({
            where: { id: req.params.id },
            data: { status },
            include: {
                items: { include: { product: true } },
                address: true
            }
        });

        res.json({ success: true, message: 'Order status updated', order });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update order' });
    }
};

// Cancel order
const cancelOrder = async (req, res) => {
    try {
        const order = await prisma.order.findFirst({
            where: { id: req.params.id, userId: req.user.id }
        });

        if (!order) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        if (!['PENDING', 'CONFIRMED'].includes(order.status)) {
            return res.status(400).json({ success: false, message: 'Order cannot be cancelled' });
        }

        const updatedOrder = await prisma.order.update({
            where: { id: req.params.id },
            data: { status: 'CANCELLED' }
        });

        res.json({ success: true, message: 'Order cancelled', order: updatedOrder });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to cancel order' });
    }
};

module.exports = {
    createOrder,
    getUserOrders,
    getOrder,
    getAllOrders,
    updateOrderStatus,
    cancelOrder
};
