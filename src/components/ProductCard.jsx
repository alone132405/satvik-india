import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function ProductCard({ product, index = 0 }) {
    return (
        <motion.div
            className="product-card card-elevated"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
        >
            <div className="product-card-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-card-body">
                <h3>{product.name}</h3>
                <p className="size">{product.size}</p>
                <p>{product.description}</p>
                <div className="product-card-actions">
                    <Link to={`/product/${product.size}`} className="btn btn-primary">
                        View Details
                    </Link>
                    <button className="btn btn-secondary">
                        Buy Now
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default ProductCard
