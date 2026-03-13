const prisma = require('../config/db');

// Get user's addresses
const getAddresses = async (req, res) => {
    try {
        const addresses = await prisma.address.findMany({
            where: { userId: req.user.id },
            orderBy: { isDefault: 'desc' }
        });
        res.json({ success: true, addresses });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch addresses' });
    }
};

// Add new address
const addAddress = async (req, res) => {
    try {
        const { name, phone, addressLine1, addressLine2, city, state, pincode, isDefault } = req.body;

        // If this is default, remove default from other addresses
        if (isDefault) {
            await prisma.address.updateMany({
                where: { userId: req.user.id },
                data: { isDefault: false }
            });
        }

        const address = await prisma.address.create({
            data: {
                userId: req.user.id,
                name,
                phone,
                addressLine1,
                addressLine2,
                city,
                state,
                pincode,
                isDefault: isDefault || false
            }
        });

        res.status(201).json({ success: true, message: 'Address added', address });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to add address' });
    }
};

// Update address
const updateAddress = async (req, res) => {
    try {
        const { name, phone, addressLine1, addressLine2, city, state, pincode, isDefault } = req.body;

        // Check ownership
        const existingAddress = await prisma.address.findFirst({
            where: { id: req.params.id, userId: req.user.id }
        });

        if (!existingAddress) {
            return res.status(404).json({ success: false, message: 'Address not found' });
        }

        // If setting as default, remove default from others
        if (isDefault) {
            await prisma.address.updateMany({
                where: { userId: req.user.id },
                data: { isDefault: false }
            });
        }

        const address = await prisma.address.update({
            where: { id: req.params.id },
            data: { name, phone, addressLine1, addressLine2, city, state, pincode, isDefault }
        });

        res.json({ success: true, message: 'Address updated', address });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update address' });
    }
};

// Delete address
const deleteAddress = async (req, res) => {
    try {
        await prisma.address.delete({
            where: { id: req.params.id }
        });
        res.json({ success: true, message: 'Address deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete address' });
    }
};

// Set default address
const setDefaultAddress = async (req, res) => {
    try {
        // Remove default from all
        await prisma.address.updateMany({
            where: { userId: req.user.id },
            data: { isDefault: false }
        });

        // Set new default
        const address = await prisma.address.update({
            where: { id: req.params.id },
            data: { isDefault: true }
        });

        res.json({ success: true, message: 'Default address updated', address });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to set default address' });
    }
};

module.exports = {
    getAddresses,
    addAddress,
    updateAddress,
    deleteAddress,
    setDefaultAddress
};
