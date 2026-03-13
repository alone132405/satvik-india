import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

function AboutPage() {
    const values = [
        {
            icon: '🌿',
            title: 'Purity',
            description: 'We believe in delivering food in its purest form – no additives, no preservatives, just nature\'s goodness.'
        },
        {
            icon: '✨',
            title: 'Simplicity',
            description: 'Our products are simple yet powerful. We keep things natural because that\'s how food should be.'
        },
        {
            icon: '🤝',
            title: 'Honesty',
            description: 'We are transparent about our sourcing, processing, and quality standards. What you see is what you get.'
        }
    ]

    const timeline = [
        { year: 'Step 1', title: 'Traditional Harvesting', description: 'Makhana is carefully harvested from pristine ponds in Bihar' },
        { year: 'Step 2', title: 'Quality Selection', description: 'Each foxnut is handpicked to ensure only the best reach you' },
        { year: 'Step 3', title: 'Hygienic Processing', description: 'Modern hygiene standards ensure purity and safety' },
        { year: 'Step 4', title: 'Fresh Packaging', description: 'Packed fresh to preserve crunch and nutritional value' }
    ]

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container about-hero-content">
                    <AnimatedSection direction="left">
                        <div className="about-text">
                            <h1>About <span className="text-gradient">Satvik India</span></h1>
                            <p>
                                At Satvik India, we bring you pure, traditionally harvested Indian superfoods.
                                Our raw makhana is carefully sourced from the pristine ponds of Bihar, the
                                heartland of India's finest foxnuts.
                            </p>
                            <p>
                                By combining age-old harvesting practices with modern hygiene and quality
                                standards, we ensure that every pack delivers superior crunch, authentic
                                taste, and clean, natural nutrition.
                            </p>
                            <p>
                                <strong>Satvik India stands for purity, simplicity, and honesty in food</strong> —
                                just the way nature intended.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="right" delay={0.2}>
                        <div className="about-image">
                            <img
                                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=500&fit=crop"
                                alt="Bihar Makhana Ponds"
                            />
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Values Section */}
            <section className="section values-section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <h2>Our <span className="text-gradient">Values</span></h2>
                            <p>The principles that guide everything we do</p>
                        </div>
                    </AnimatedSection>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <AnimatedSection key={index} delay={index * 0.15}>
                                <div className="value-card">
                                    <div className="value-icon">{value.icon}</div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Section */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <h2>From <span className="text-gradient">Pond to Pack</span></h2>
                            <p>Our careful journey to bring you the finest makhana</p>
                        </div>
                    </AnimatedSection>

                    <div className="values-grid">
                        {timeline.map((step, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <motion.div
                                    className="value-card"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="value-icon" style={{
                                        background: 'var(--gradient-accent)',
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                        color: 'var(--text-inverse)'
                                    }}>
                                        {step.year}
                                    </div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bihar Section */}
            <section className="section">
                <div className="container">
                    <div className="about-hero-content">
                        <AnimatedSection direction="right">
                            <div className="about-image">
                                <img
                                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                                    alt="Traditional Makhana Harvesting"
                                />
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="left" delay={0.2}>
                            <div className="about-text">
                                <h2>The Heart of <span className="text-gradient">Bihar</span></h2>
                                <p>
                                    Bihar produces over 90% of the world's makhana. The pristine ponds and
                                    traditional knowledge passed down through generations make Bihar's foxnuts
                                    truly exceptional.
                                </p>
                                <p>
                                    Our farmers follow time-honored practices that have been perfected over
                                    centuries, ensuring that each foxnut retains its natural goodness and
                                    authentic taste.
                                </p>
                                <p>
                                    By sourcing directly from Bihar, we not only bring you the finest quality
                                    but also support the local farming communities who have nurtured this
                                    superfood for generations.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage
