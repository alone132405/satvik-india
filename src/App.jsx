import { useState, useEffect, createContext, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductPage from './pages/ProductPage'
import ProductDetailPage from './pages/ProductDetailPage'
import HealthBenefitsPage from './pages/HealthBenefitsPage'
import FAQPage from './pages/FAQPage'
import ContactPage from './pages/ContactPage'
import './App.css'

// Theme Context
export const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('satvik-theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('satvik-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// Page Transition Wrapper
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <HomePage />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <AboutPage />
          </motion.div>
        } />
        <Route path="/products" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <ProductPage />
          </motion.div>
        } />
        <Route path="/product/:size" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <ProductDetailPage />
          </motion.div>
        } />
        <Route path="/health-benefits" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <HealthBenefitsPage />
          </motion.div>
        } />
        <Route path="/faq" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <FAQPage />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <ContactPage />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Header />
          <main className="main-content">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
