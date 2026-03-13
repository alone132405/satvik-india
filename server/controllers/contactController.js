const prisma = require('../config/db');
const nodemailer = require('nodemailer');

// Create transporter for sending emails
const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
};

// Submit contact form
const submitContact = async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // Save to database
        const contact = await prisma.contact.create({
            data: { name, email, phone, subject, message }
        });

        // Try to send email notification (don't fail if email fails)
        try {
            if (process.env.SMTP_USER && process.env.ADMIN_EMAIL) {
                const transporter = createTransporter();
                await transporter.sendMail({
                    from: process.env.SMTP_USER,
                    to: process.env.ADMIN_EMAIL,
                    subject: `New Contact Form: ${subject}`,
                    html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `
                });
            }
        } catch (emailError) {
            console.error('Email notification failed:', emailError);
        }

        res.status(201).json({
            success: true,
            message: 'Thank you for contacting us! We will get back to you soon.'
        });
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ success: false, message: 'Failed to submit form' });
    }
};

// Get all contact submissions (Admin only)
const getAllContacts = async (req, res) => {
    try {
        const contacts = await prisma.contact.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.json({ success: true, contacts });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch contacts' });
    }
};

// Mark as read (Admin only)
const markAsRead = async (req, res) => {
    try {
        const contact = await prisma.contact.update({
            where: { id: req.params.id },
            data: { isRead: true }
        });
        res.json({ success: true, contact });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to update contact' });
    }
};

// Delete contact (Admin only)
const deleteContact = async (req, res) => {
    try {
        await prisma.contact.delete({ where: { id: req.params.id } });
        res.json({ success: true, message: 'Contact deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to delete contact' });
    }
};

module.exports = {
    submitContact,
    getAllContacts,
    markAsRead,
    deleteContact
};
