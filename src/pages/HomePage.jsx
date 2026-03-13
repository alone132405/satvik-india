import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import TrustBadge from '../components/TrustBadge'

function HomePage() {
    const features = [
        { icon: '🌱', title: '100% Natural & Unprocessed', description: 'Pure foxnuts with no additives or preservatives' },
        { icon: '💪', title: 'Trans Fat Free', description: 'Zero trans fat, saturated fat, and cholesterol' },
        { icon: '🕉️', title: 'Suitable for Fasting', description: 'Perfect for vrat and religious observances' },
        { icon: '🇮🇳', title: 'Proudly Made in India', description: 'Sourced from the finest ponds of Bihar' },
        { icon: '⭐', title: 'Premium Quality', description: 'Handpicked and hygienically packed foxnuts' },
        { icon: '🥗', title: 'Protein Rich', description: 'Excellent source of plant-based protein' }
    ]

    const trustBadges = [
        { icon: '🌿', label: 'Natural' },
        { icon: '💪', label: 'Protein Rich' },
        { icon: '🌾', label: 'Gluten Free' },
        { icon: '🛡️', label: 'Hygienically Packed' },
        { icon: '🚫', label: 'No Added Sugar' },
        { icon: '✨', label: 'No Preservatives' }
    ]

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg">
                    <div className="hero-bg-shape shape-1"></div>
                    <div className="hero-bg-shape shape-2"></div>
                </div>

                <div className="container hero-content">
                    <motion.div
                        className="hero-text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.span
                            className="hero-badge"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span>🌿</span> India's Original Superfood
                        </motion.span>

                        <h1 className="hero-title">
                            Satvik India<br />
                            <span className="highlight">Raw Makhana</span>
                        </h1>

                        <p className="hero-description">
                            Pure, traditionally harvested raw makhana sourced from the pristine ponds of Bihar.
                            Packed with modern hygiene standards to deliver superior crunch, authentic taste,
                            and protein-rich nutrition.
                        </p>

                        <div className="hero-buttons">
                            <Link to="/products" className="btn btn-primary btn-lg">
                                👉 Shop Now
                            </Link>
                            <Link to="/about" className="btn btn-secondary btn-lg">
                                👉 Know More
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="hero-image-container">
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [0, 2, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <img
                                    src="/makhana-product.jpg"
                                    alt="Raw Makhana - Foxnuts"
                                    className="hero-image"
                                    style={{ borderRadius: '20px' }}
                                />
                            </motion.div>

                            <motion.div
                                className="floating-element el-1"
                                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                🌿
                            </motion.div>

                            <motion.div
                                className="floating-element el-2"
                                animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            >
                                ⭐
                            </motion.div>

                            <motion.div
                                className="floating-element el-3"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                100% Natural
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="section features-section">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <h2>Why Choose <span className="text-gradient">Satvik India</span></h2>
                            <p>Experience the purity of nature with every crunch</p>
                        </div>
                    </AnimatedSection>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="feature-card card card-elevated">
                                    <div className="feature-icon">{feature.icon}</div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Highlight */}
            <section className="section product-highlight">
                <div className="container product-highlight-content">
                    <AnimatedSection direction="left">
                        <div className="product-image-wrapper">
                            <img
                                src="/makhana-product.jpg"
                                alt="Raw Makhana Product"
                            />
                        </div>
                    </AnimatedSection>

                    <AnimatedSection direction="right" delay={0.2}>
                        <div className="product-info">
                            <h2>Raw Makhana (Foxnuts)</h2>
                            <p>
                                A clean, wholesome superfood trusted by families across India for everyday
                                nutrition and fasting needs. Our makhana is carefully sourced from the
                                traditional ponds of Bihar, ensuring premium quality in every pack.
                            </p>
                            <div className="product-sizes">
                                <span className="size-badge">50g</span>
                                <span className="size-badge">100g</span>
                                <span className="size-badge">250g</span>
                            </div>
                            <Link to="/products" className="btn btn-primary">
                                👉 View Product
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="section trust-badges">
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <h2>Quality You Can <span className="text-gradient">Trust</span></h2>
                        </div>
                    </AnimatedSection>

                    <div className="badges-grid">
                        {trustBadges.map((badge, index) => (
                            <TrustBadge key={index} icon={badge.icon} label={badge.label} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <AnimatedSection>
                        <div className="cta-content">
                            <h2>Experience the purity of India's original superfood.</h2>
                            <p>Join thousands of families who trust Satvik India for their daily nutrition.</p>
                            <Link to="/products" className="btn btn-accent btn-lg">
                                👉 Buy Satvik India Raw Makhana Today
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}

export default HomePage
