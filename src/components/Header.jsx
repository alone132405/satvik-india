import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/products', label: 'Products' },
        { path: '/health-benefits', label: 'Health Benefits' },
        { path: '/faq', label: 'FAQ' },
        { path: '/contact', label: 'Contact' }
    ]

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <Link to="/" className="logo">
                    <span className="logo-icon">🌿</span>
                    <span>Satvik India</span>
                </Link>

                <nav className="nav">
                    <ul className="nav-links">
                        {navItems.map(item => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="nav-actions">
                        <ThemeToggle />
                        <button
                            className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </nav>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.nav
                        className="mobile-nav open"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <ul className="mobile-nav-links">
                            {navItems.map(item => (
                                <li key={item.path}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header
