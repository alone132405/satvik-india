import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const directions = {
        up: { y: 50, x: 0 },
        down: { y: -50, x: 0 },
        left: { y: 0, x: 50 },
        right: { y: 0, x: -50 },
        none: { y: 0, x: 0 }
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{
                opacity: 0,
                ...directions[direction]
            }}
            animate={isInView ? {
                opacity: 1,
                y: 0,
                x: 0
            } : {}}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.1, 0.25, 1]
            }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedSection
