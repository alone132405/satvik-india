import ProductCard from '../components/ProductCard'
import AnimatedSection from '../components/AnimatedSection'

function ProductPage() {
    const products = [
        {
            id: 1,
            name: 'Raw Makhana',
            size: '50g',
            description: 'Perfect for trying out or single servings. Ideal for on-the-go snacking.',
            image: '/makhana-product.jpg'
        },
        {
            id: 2,
            name: 'Raw Makhana',
            size: '100g',
            description: 'Our most popular size. Great for regular consumption and family sharing.',
            image: '/makhana-product.jpg'
        },
        {
            id: 3,
            name: 'Raw Makhana',
            size: '250g',
            description: 'Best value pack. Perfect for families and regular makhana enthusiasts.',
            image: '/makhana-product.jpg'
        }
    ]

    return (
        <div className="products-page">
            {/* Hero */}
            <section className="products-hero">
                <div className="container">
                    <AnimatedSection>
                        <h1>Our <span className="text-gradient">Products</span></h1>
                        <p>Premium quality raw makhana, available in convenient pack sizes</p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Products Grid */}
            <section className="container">
                <div className="products-grid">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </section>

            {/* Info Section */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <AnimatedSection>
                        <div className="section-header">
                            <h2>Why <span className="text-gradient">Raw Makhana?</span></h2>
                            <p>Unroasted foxnuts give you the flexibility to prepare them your way</p>
                        </div>
                    </AnimatedSection>

                    <div className="features-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <AnimatedSection delay={0.1}>
                            <div className="feature-card card card-elevated">
                                <div className="feature-icon">🍳</div>
                                <h3>Roast at Home</h3>
                                <p>Roast in ghee or oil with your favorite spices for the perfect crispy snack</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <div className="feature-card card card-elevated">
                                <div className="feature-icon">🍛</div>
                                <h3>Cook in Curries</h3>
                                <p>Add to gravies and sabzis for a nutritious boost to your meals</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.3}>
                            <div className="feature-card card card-elevated">
                                <div className="feature-icon">🕉️</div>
                                <h3>Perfect for Fasting</h3>
                                <p>Make kheer or dry roast for your vrat meals</p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductPage
