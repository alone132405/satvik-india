const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../config/db');

// Generate JWT token
const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '7d'
    });
};

// Register new user
const register = async (req, res) => {
    try {
        const { email, password, name, phone } = req.body;

        // Check if user exists
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Email already registered' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create user
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                phone
            },
            select: { id: true, email: true, name: true, role: true }
        });

        // Generate token
        const token = generateToken(user.id);

        // Set cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        res.status(201).json({
            success: true,
            message: 'Registration successful',
            user,
            token
        });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ success: false, message: 'Registration failed' });
    }
};

// Login user
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        // Generate token
        const token = generateToken(user.id);

        // Set cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.json({
            success: true,
            message: 'Login successful',
            user: { id: user.id, email: user.email, name: user.name, role: user.role },
            token
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ success: false, message: 'Login failed' });
    }
};

// Logout user
const logout = (req, res) => {
    res.cookie('token', '', { maxAge: 0 });
    res.json({ success: true, message: 'Logged out successfully' });
};

// Get current user profile
const getProfile = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: req.user.id },
            select: {
                id: true,
                email: true,
                name: true,
                phone: true,
                role: true,
                createdAt: true,
                addresses: true
            }
        });
        res.json({ success: true, user });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch profile' });
    }
};

// Update profile
const updateProfile = async (req, res) => {
    try {
        const { name, phone } = req.body;

        const user = await prisma.user.update({
            where: { id: req.user.id },
            data: { name, phone },
            select: { id: true, email: true, name: true, phone: true, role: true }
        });

        res.json({ success: true, message: 'Profile updated', user });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update profile' });
    }
};

// Change password
const changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;

        const user = await prisma.user.findUnique({ where: { id: req.user.id } });

        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Current password is incorrect' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 12);
        await prisma.user.update({
            where: { id: req.user.id },
            data: { password: hashedPassword }
        });

        res.json({ success: true, message: 'Password changed successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to change password' });
    }
};

module.exports = {
    register,
    login,
    logout,
    getProfile,
    updateProfile,
    changePassword
};
