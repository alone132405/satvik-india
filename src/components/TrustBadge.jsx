import { motion } from 'framer-motion'

function TrustBadge({ icon, label, index = 0 }) {
    return (
        <motion.div
            className="trust-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="trust-badge-icon">{icon}</div>
            <span>{label}</span>
        </motion.div>
    )
}

export default TrustBadge
