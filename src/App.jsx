import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import DemoPage from './pages/DemoPage'
import HomePage from './pages/HomePage'
import ProductListingPage from './pages/ProductListingPage'
import NewsletterSection from './components/NewsletterSection'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <NewsletterSection />
      <Footer />
    </div>
  )
}

export default App
