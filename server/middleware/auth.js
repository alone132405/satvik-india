const jwt = require('jsonwebtoken');
const prisma = require('../config/db');

// Verify JWT token
const auth = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            return res.status(401).json({ success: false, message: 'Access denied. No token provided.' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: { id: true, email: true, name: true, role: true }
        });

        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid token.' });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: 'Invalid token.' });
    }
};

// Check if user is admin
const admin = (req, res, next) => {
    if (req.user.role !== 'ADMIN') {
        return res.status(403).json({ success: false, message: 'Access denied. Admin only.' });
    }
    next();
};

// Optional auth - doesn't fail if no token
const optionalAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.header('Authorization')?.replace('Bearer ', '');

        if (token) {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await prisma.user.findUnique({
                where: { id: decoded.userId },
                select: { id: true, email: true, name: true, role: true }
            });
            req.user = user;
        }
    } catch (error) {
        // Token invalid, but that's okay for optional auth
    }
    next();
};

module.exports = { auth, admin, optionalAuth };
