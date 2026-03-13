import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

function ProductDetailPage() {
    const { size } = useParams()
    const [selectedSize, setSelectedSize] = useState(size || '100g')

    const sizes = ['50g', '100g', '250g']

    const benefits = [
        'Trans Fat Free',
        'Saturated Fat Free',
        'Cholesterol Free',
        'Low Fat',
        'Protein Rich',
        'Suitable for Fasting (Vrat Friendly)'
    ]

    const nutritionData = [
        { nutrient: 'Energy', value: '364.2 kcal' },
        { nutrient: 'Protein', value: '8.95 g' },
        { nutrient: 'Carbohydrates', value: '80.93 g' },
        { nutrient: 'Total Sugar', value: '<2.0 g' },
        { nutrient: 'Added Sugar', value: '0 g' },
        { nutrient: 'Total Fat', value: '0.52 g' },
        { nutrient: 'Saturated Fat', value: '0.101 g' },
        { nutrient: 'Trans Fat', value: '0 g' },
        { nutrient: 'Sodium', value: '1.24 mg' },
        { nutrient: 'Cholesterol', value: '0 mg' }
    ]

    const usageIdeas = [
        { icon: '🍳', text: 'Roast lightly in ghee or oil for healthy snacks' },
        { icon: '🍛', text: 'Use in curries & sabzi' },
        { icon: '🕉️', text: 'Perfect for vrat (fasting) recipes' },
        { icon: '🍮', text: 'Add to kheer or dry fruit mixes' }
    ]

    return (
        <div className="product-detail-page">
            {/* Product Detail Section */}
            <section className="product-detail">
                <div className="container product-detail-content">
                    <AnimatedSection direction="left">
                        <motion.div
                            className="product-detail-image"
                            whileHover={{ scale: 1.02 }}
                        >
                            <img
                                src="/makhana-product.jpg"
                                alt="Satvik India Raw Makhana"
                            />
                        </motion.div>
                    </AnimatedSection>

                    <AnimatedSection direction="right" delay={0.2}>
                        <div className="product-detail-info">
                            <h1>Satvik India Raw Makhana (Foxnuts)</h1>
                            <p className="tagline">India's Original Superfood</p>

                            <p className="description">
                                Satvik India Raw Makhana is a 100% natural, unroasted, and unprocessed superfood.
                                Rich in carbohydrates and protein, it is an excellent ingredient for home roasting,
                                curries, fasting meals, and healthy snacking.
                            </p>

                            <div className="size-selector">
                                <h4>Pack Size</h4>
                                <div className="size-options">
                                    {sizes.map(s => (
                                        <motion.button
                                            key={s}
                                            className={`size-option ${selectedSize === s ? 'active' : ''}`}
                                            onClick={() => setSelectedSize(s)}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {s}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>

                            <ul className="benefits-list">
                                {benefits.map((benefit, index) => (
                                    <li key={index}>{benefit}</li>
                                ))}
                            </ul>

                            <div className="product-detail-actions">
                                <button className="btn btn-primary btn-lg">
                                    🛒 Add to Cart
                                </button>
                                <button className="btn btn-accent btn-lg">
                                    ⚡ Buy Now
                                </button>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Nutrition Section */}
            <section className="nutrition-section">
                <div className="container">
                    <AnimatedSection>
                        <h2>Nutritional Information <span className="text-gradient">(Per 100g)</span></h2>
                        <p style={{ marginBottom: 'var(--space-xl)' }}>
                            <strong>Ingredients:</strong> Makhana (Foxnuts)
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                        <table className="nutrition-table">
                            <thead>
                                <tr>
                                    <th>Nutrient</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {nutritionData.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.nutrient}</td>
                                        <td>{item.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p style={{ marginTop: 'var(--space-md)', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                            *%RDA calculated based on a 2000 kcal diet as per ICMR 2020 guidelines.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Usage Section */}
            <section className="usage-section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <AnimatedSection>
                        <h2>How to Use <span className="text-gradient">Raw Makhana</span></h2>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                        <ul className="usage-list" style={{ maxWidth: '700px' }}>
                            {usageIdeas.map((idea, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <span>{idea.icon}</span>
                                    {idea.text}
                                </motion.li>
                            ))}
                        </ul>
                    </AnimatedSection>
                </div>
            </section>

            {/* Storage Section */}
            <section className="storage-section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-xl)' }}>
                        <AnimatedSection>
                            <div className="card card-elevated" style={{ padding: 'var(--space-xl)' }}>
                                <h3 style={{ marginBottom: 'var(--space-md)' }}>📦 Storage Instructions</h3>
                                <p>Store in a cool, dry & hygienic place. Keep away from direct sunlight.</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.1}>
                            <div className="card card-elevated" style={{ padding: 'var(--space-xl)' }}>
                                <h3 style={{ marginBottom: 'var(--space-md)' }}>⚠️ Allergen Information</h3>
                                <p>Processed in a makhana-only facility with no exposure to common allergens.</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="card card-elevated" style={{ padding: 'var(--space-xl)' }}>
                                <h3 style={{ marginBottom: 'var(--space-md)' }}>📅 Shelf Life</h3>
                                <p>Best Before: 12 Months from Packaging</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <AnimatedSection>
                        <div className="cta-content">
                            <h2>Ready to experience pure nutrition?</h2>
                            <p>Order your pack of Satvik India Raw Makhana today!</p>
                            <Link to="/products" className="btn btn-accent btn-lg">
                                👉 View All Products
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}

export default ProductDetailPage
