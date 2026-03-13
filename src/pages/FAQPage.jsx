import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: 'Is this roasted makhana?',
            answer: 'No, this is raw (unroasted) makhana. You can roast it at home with your preferred seasonings for the freshest, crispiest results. Raw makhana gives you the flexibility to prepare it exactly how you like.'
        },
        {
            question: 'Is it suitable for fasting?',
            answer: 'Yes, Satvik India Raw Makhana is 100% fasting friendly. It is considered a "Sattvic" food in Ayurveda and is traditionally consumed during religious fasts (vrat) across India.'
        },
        {
            question: 'Does it contain preservatives or added sugar?',
            answer: 'No. Our makhana is completely natural with zero additives. There are no preservatives, no added sugar, no artificial flavors, and no chemicals of any kind. Just pure, natural foxnuts.'
        },
        {
            question: 'Where is it sourced from?',
            answer: 'Our makhana is sourced from the traditional makhana ponds of Bihar, India. Bihar produces over 90% of the world\'s makhana, and our farmers follow time-honored harvesting practices to ensure premium quality.'
        },
        {
            question: 'How should I store the makhana?',
            answer: 'Store in a cool, dry, and hygienic place. Keep away from direct sunlight and moisture. Once opened, we recommend storing in an airtight container to maintain freshness and crunch.'
        },
        {
            question: 'What is the shelf life?',
            answer: 'Our raw makhana has a shelf life of 12 months from packaging when stored properly. The best before date is printed on each pack.'
        },
        {
            question: 'Is makhana good for weight loss?',
            answer: 'Makhana is naturally low in calories and fat while being high in protein and fiber, which helps you feel full longer. It can be a healthy snacking option as part of a balanced diet. However, we recommend consulting a nutritionist for personalized dietary advice.'
        },
        {
            question: 'Can diabetics eat makhana?',
            answer: 'Makhana has a low glycemic index, making it suitable for diabetics when consumed in moderation as part of a balanced diet. However, we always recommend consulting your healthcare provider for personalized advice.'
        },
        {
            question: 'How can I use raw makhana?',
            answer: 'There are many ways to enjoy raw makhana! You can roast it lightly in ghee or oil with spices for a healthy snack, add it to curries and sabzi, use it in kheer and puddings, or mix it with dry fruits for a nutritious trail mix.'
        },
        {
            question: 'Is it safe for children?',
            answer: 'Yes, makhana is safe for children and makes an excellent healthy snack option. Its mild taste and crunchy texture make it appealing to kids. For very young children, ensure they can chew it properly to avoid any choking hazard.'
        }
    ]

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="faq-page">
            {/* Hero */}
            <section className="faq-hero">
                <div className="container">
                    <AnimatedSection>
                        <h1>Frequently Asked <span className="text-gradient">Questions</span></h1>
                        <p>Everything you need to know about Satvik India Raw Makhana</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="container">
                    {faqs.map((faq, index) => (
                        <AnimatedSection key={index} delay={index * 0.05}>
                            <motion.div
                                className="faq-item"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <button
                                    className={`faq-question ${openIndex === index ? 'open' : ''}`}
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span>{faq.question}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div className="faq-answer">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* Contact CTA */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <AnimatedSection>
                        <h2>Still have questions?</h2>
                        <p style={{ marginBottom: 'var(--space-xl)' }}>
                            We're here to help! Reach out to us and we'll get back to you as soon as possible.
                        </p>
                        <a href="/contact" className="btn btn-primary btn-lg">
                            Contact Us
                        </a>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}

export default FAQPage
