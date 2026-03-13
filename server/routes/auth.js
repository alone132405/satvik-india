const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const {
    register,
    login,
    logout,
    getProfile,
    updateProfile,
    changePassword
} = require('../controllers/authController');

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

// Protected routes
router.get('/profile', auth, getProfile);
router.put('/profile', auth, updateProfile);
router.put('/change-password', auth, changePassword);

// Check auth status
router.get('/check', auth, (req, res) => {
    res.json({ success: true, user: req.user });
});

module.exports = router;
