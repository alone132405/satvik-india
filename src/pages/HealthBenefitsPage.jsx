import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

function HealthBenefitsPage() {
    const benefits = [
        {
            icon: '⚖️',
            title: 'Weight Management',
            description: 'Naturally low in fat and calories, makhana helps you feel full longer without adding excess calories to your diet.'
        },
        {
            icon: '🌾',
            title: 'Gluten Free & Easy to Digest',
            description: 'Perfect for those with gluten sensitivities. Makhana is gentle on the stomach and easy to digest.'
        },
        {
            icon: '🏃',
            title: 'High Energy Food',
            description: 'Rich in carbohydrates and protein, providing sustained energy throughout the day.'
        },
        {
            icon: '💪',
            title: 'Protein Rich',
            description: 'Contains approximately 9g of protein per 100g, making it an excellent plant-based protein source.'
        },
        {
            icon: '🩺',
            title: 'Suitable for Diabetics',
            description: 'Low glycemic index makes it suitable for diabetics when consumed in moderation as part of a balanced diet.'
        },
        {
            icon: '❤️',
            title: 'Heart Healthy',
            description: 'Zero cholesterol and extremely low in saturated fat, supporting cardiovascular health.'
        },
        {
            icon: '🦴',
            title: 'Bone Health',
            description: 'Good source of calcium and magnesium, essential minerals for maintaining strong bones.'
        },
        {
            icon: '✨',
            title: 'Clean Nutrition',
            description: 'No preservatives, no added sugar, no artificial ingredients. Just pure, natural goodness.'
        }
    ]

    const nutritionHighlights = [
        { label: 'Calories', value: '364 kcal', subtext: 'per 100g' },
        { label: 'Protein', value: '9g', subtext: 'per 100g' },
        { label: 'Fat', value: '0.5g', subtext: 'per 100g' },
        { label: 'Fiber', value: 'High', subtext: 'easy digestion' }
    ]

    return (
        <div className="health-benefits-page">
            {/* Hero */}
            <section className="health-hero">
                <div className="container">
                    <AnimatedSection>
                        <h1>Why Raw Makhana is <span className="text-gradient">Good for You</span></h1>
                        <p>Discover the natural health benefits of India's original superfood</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Nutrition Highlights */}
            <section className="section">
                <div className="container">
                    <div className="badges-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {nutritionHighlights.map((item, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <motion.div
                                    className="trust-badge"
                                    style={{ padding: 'var(--space-xl)' }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <span style={{
                                        fontSize: '2rem',
                                        fontWeight: '700',
                                        color: 'var(--primary)',
                                        fontFamily: 'var(--font-heading)'
                                    }}>
                                        {item.value}
                                    </span>
                                    <span style={{ fontWeight: '600' }}>{item.label}</span>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.subtext}</span>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="benefits-section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <h2>Health <span className="text-gradient">Benefits</span></h2>
                            <p>Science-backed nutritional advantages of makhana</p>
                        </div>
                    </AnimatedSection>

                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <AnimatedSection key={index} delay={index * 0.05}>
                                <motion.div
                                    className="benefit-card"
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="benefit-icon">{benefit.icon}</div>
                                    <div className="benefit-content">
                                        <h3>{benefit.title}</h3>
                                        <p>{benefit.description}</p>
                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection delay={0.3}>
                        <div className="disclaimer">
                            <p>
                                <strong>Disclaimer:</strong> The health benefits mentioned are based on nutritional properties
                                of makhana. These are not medical claims. Please consult a healthcare professional for
                                specific dietary advice.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Ayurveda Section */}
            <section className="section">
                <div className="container">
                    <div className="about-hero-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-3xl)' }}>
                        <AnimatedSection direction="left">
                            <div className="about-image" style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop"
                                    alt="Ayurveda and Wellness"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="right" delay={0.2}>
                            <div className="about-text">
                                <h2>Ancient Wisdom, <span className="text-gradient">Modern Science</span></h2>
                                <p>
                                    Makhana has been revered in Ayurveda for centuries. Known as "Sattvic" food,
                                    it is considered pure and is traditionally consumed during religious fasting.
                                </p>
                                <p>
                                    Modern research confirms what ancient wisdom knew – makhana is indeed a
                                    nutritional powerhouse. Its unique combination of low fat, high protein,
                                    and essential minerals makes it one of nature's most complete superfoods.
                                </p>
                                <p>
                                    <strong>Key Ayurvedic Properties:</strong>
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--space-md)' }}>
                                    <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                        <span>🌿</span> Balances Vata and Pitta doshas
                                    </li>
                                    <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                        <span>🌿</span> Strengthens kidney and heart
                                    </li>
                                    <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                        <span>🌿</span> Promotes restful sleep
                                    </li>
                                    <li style={{ marginBottom: 'var(--space-sm)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                        <span>🌿</span> Enhances vitality and stamina
                                    </li>
                                </ul>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HealthBenefitsPage
