const prisma = require('../config/db');

// Get user's cart
const getCart = async (req, res) => {
    try {
        const cartItems = await prisma.cartItem.findMany({
            where: { userId: req.user.id },
            include: {
                product: true
            }
        });

        const total = cartItems.reduce((sum, item) => {
            return sum + (item.product.price * item.quantity);
        }, 0);

        res.json({ success: true, cartItems, total });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch cart' });
    }
};

// Add item to cart
const addToCart = async (req, res) => {
    try {
        const { productId, quantity = 1 } = req.body;

        // Check if product exists
        const product = await prisma.product.findUnique({ where: { id: productId } });
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        // Check if item already in cart
        const existingItem = await prisma.cartItem.findUnique({
            where: {
                userId_productId: { userId: req.user.id, productId }
            }
        });

        let cartItem;
        if (existingItem) {
            // Update quantity
            cartItem = await prisma.cartItem.update({
                where: { id: existingItem.id },
                data: { quantity: existingItem.quantity + quantity },
                include: { product: true }
            });
        } else {
            // Create new cart item
            cartItem = await prisma.cartItem.create({
                data: {
                    userId: req.user.id,
                    productId,
                    quantity
                },
                include: { product: true }
            });
        }

        res.json({ success: true, message: 'Added to cart', cartItem });
    } catch (error) {
        console.error('Add to cart error:', error);
        res.status(500).json({ success: false, message: 'Failed to add to cart' });
    }
};

// Update cart item quantity
const updateCartItem = async (req, res) => {
    try {
        const { quantity } = req.body;

        if (quantity < 1) {
            return res.status(400).json({ success: false, message: 'Quantity must be at least 1' });
        }

        const cartItem = await prisma.cartItem.update({
            where: { id: req.params.id },
            data: { quantity },
            include: { product: true }
        });

        res.json({ success: true, message: 'Cart updated', cartItem });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update cart' });
    }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
    try {
        await prisma.cartItem.delete({
            where: { id: req.params.id }
        });

        res.json({ success: true, message: 'Removed from cart' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to remove from cart' });
    }
};

// Clear entire cart
const clearCart = async (req, res) => {
    try {
        await prisma.cartItem.deleteMany({
            where: { userId: req.user.id }
        });

        res.json({ success: true, message: 'Cart cleared' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to clear cart' });
    }
};

module.exports = {
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart
};
