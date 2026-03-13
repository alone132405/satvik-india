import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // In a real app, you would send this to a backend
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }

    const contactDetails = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
            title: 'Address',
            content: 'J-44, 4th Floor, Laxmi Nagar, Delhi – 110092'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            ),
            title: 'Phone',
            content: '+91 9560500960'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            ),
            title: 'Email',
            content: 'customercare@satvikindia.co.in'
        }
    ]

    return (
        <div className="contact-page">
            {/* Hero */}
            <section className="contact-hero">
                <div className="container">
                    <AnimatedSection>
                        <h1>Contact <span className="text-gradient">Us</span></h1>
                        <p>We'd love to hear from you. Get in touch with us!</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="container contact-content">
                    <AnimatedSection direction="left">
                        <div className="contact-info">
                            <h2>Get in <span className="text-gradient">Touch</span></h2>
                            <p>
                                Have questions about our products? Want to place a bulk order?
                                Or just want to say hello? We're here to help!
                            </p>

                            <div className="contact-details">
                                {contactDetails.map((detail, index) => (
                                    <motion.div
                                        key={index}
                                        className="contact-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="contact-item-icon">
                                            {detail.icon}
                                        </div>
                                        <div className="contact-item-content">
                                            <h4>{detail.title}</h4>
                                            <p>{detail.content}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div style={{ marginTop: 'var(--space-2xl)' }}>
                                <h3 style={{ marginBottom: 'var(--space-md)' }}>Packed & Marketed By</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    <strong>Satvik India</strong><br />
                                    J-44, 4th Floor, Laxmi Nagar<br />
                                    Delhi – 110092, India
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="right" delay={0.2}>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3 style={{ marginBottom: 'var(--space-xl)' }}>Send us a Message</h3>

                            {submitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{
                                        padding: 'var(--space-md)',
                                        background: 'rgba(45, 80, 22, 0.1)',
                                        borderRadius: 'var(--radius-md)',
                                        marginBottom: 'var(--space-lg)',
                                        color: 'var(--primary)',
                                        fontWeight: '500'
                                    }}
                                >
                                    ✓ Thank you for your message! We'll get back to you soon.
                                </motion.div>
                            )}

                            <div className="form-group">
                                <label htmlFor="name">Your Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject *</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="What is this regarding?"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Write your message here..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="btn btn-primary btn-lg"
                                style={{ width: '100%' }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}

export default ContactPage
