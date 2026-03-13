import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            <span className="logo-icon">🌿</span>
                            <span>Satvik India</span>
                        </Link>
                        <p>
                            Pure, traditionally harvested Indian superfoods.
                            Our raw makhana is carefully sourced from the pristine ponds of Bihar.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/health-benefits">Health Benefits</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Products</h4>
                        <ul className="footer-links">
                            <li><Link to="/product/50g">Raw Makhana 50g</Link></li>
                            <li><Link to="/product/100g">Raw Makhana 100g</Link></li>
                            <li><Link to="/product/250g">Raw Makhana 250g</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <div className="footer-contact">
                            <div className="footer-contact-item">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span>J-44, 4th Floor, Laxmi Nagar, Delhi – 110092</span>
                            </div>
                            <div className="footer-contact-item">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <span>+91 9560500960</span>
                            </div>
                            <div className="footer-contact-item">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <span>customercare@satvikindia.co.in</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>FSSAI Lic. No.: XXXXXXXX | © {new Date().getFullYear()} Satvik India. All Rights Reserved</p>
                    <div className="footer-legal">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms & Conditions</Link>
                        <Link to="/shipping">Shipping & Refund Policy</Link>
                    </div>
                    <div className="made-in-india">
                        <span>Proudly Made in India</span>
                        <span>🇮🇳</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
