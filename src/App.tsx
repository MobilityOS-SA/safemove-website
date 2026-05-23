import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Planet42 from './pages/Planet42'
import About from './pages/About'
import HowItWorks from './pages/HowItWorks'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Legal from './pages/Legal'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// Pages that don't use the standard Navbar/Footer layout
const BARE_ROUTES = ['/login']

function Layout() {
  const { pathname } = useLocation()
  const isBare = BARE_ROUTES.some(r => pathname.startsWith(r))

  if (isBare) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    )
  }

  return (
    <>
      <Navbar />
      <main className="pt-[2.5rem]"> {/* offset for Planet42 alert bar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planet42" element={<Planet42 />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Legal />} />
          <Route path="/terms" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="text-center">
        <div className="font-display font-bold text-navy text-8xl mb-4">404</div>
        <h2 className="font-semibold text-navy text-xl mb-3">Page Not Found</h2>
        <p className="text-mist text-sm mb-8">The page you are looking for does not exist.</p>
        <a href="/" className="btn-primary text-sm px-6 py-3">
          Back to Home
        </a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  )
}
