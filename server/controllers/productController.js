const prisma = require('../config/db');

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            where: { isActive: true },
            orderBy: { createdAt: 'desc' }
        });
        res.json({ success: true, products });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch products' });
    }
};

// Get single product
const getProduct = async (req, res) => {
    try {
        const product = await prisma.product.findUnique({
            where: { id: req.params.id }
        });

        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        res.json({ success: true, product });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch product' });
    }
};

// Create product (Admin only)
const createProduct = async (req, res) => {
    try {
        const { name, description, price, size, stock, image } = req.body;

        const product = await prisma.product.create({
            data: { name, description, price: parseFloat(price), size, stock: parseInt(stock), image }
        });

        res.status(201).json({ success: true, message: 'Product created', product });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to create product' });
    }
};

// Update product (Admin only)
const updateProduct = async (req, res) => {
    try {
        const { name, description, price, size, stock, image, isActive } = req.body;

        const product = await prisma.product.update({
            where: { id: req.params.id },
            data: {
                name,
                description,
                price: price ? parseFloat(price) : undefined,
                size,
                stock: stock !== undefined ? parseInt(stock) : undefined,
                image,
                isActive
            }
        });

        res.json({ success: true, message: 'Product updated', product });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update product' });
    }
};

// Delete product (Admin only)
const deleteProduct = async (req, res) => {
    try {
        await prisma.product.delete({ where: { id: req.params.id } });
        res.json({ success: true, message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete product' });
    }
};

// Get all products including inactive (Admin only)
const getAllProductsAdmin = async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.json({ success: true, products });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch products' });
    }
};

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProductsAdmin
};
