const express = require('express');
const router = express.Router();
const { auth, admin } = require('../middleware/auth');
const {
    submitContact,
    getAllContacts,
    markAsRead,
    deleteContact
} = require('../controllers/contactController');

// Public route
router.post('/', submitContact);

// Admin routes
router.get('/', auth, admin, getAllContacts);
router.put('/:id/read', auth, admin, markAsRead);
router.delete('/:id', auth, admin, deleteContact);

module.exports = router;
