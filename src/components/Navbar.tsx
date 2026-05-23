import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'
import { ASSETS, CUSTOMER_PORTAL_URL } from '@/lib/constants'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-card' : 'bg-transparent'
      }`}
    >
      {/* Planet42 alert bar */}
      <div className="bg-orange-drive text-white text-xs sm:text-sm font-semibold text-center py-2 px-4">
        <span>Planet42 customer? </span>
        <Link
          to="/planet42"
          className="underline underline-offset-2 hover:text-orange-100 transition-colors"
        >
          Find out what you need to do — click here →
        </Link>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={ASSETS.logoColour}
              alt="Safemove"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${
                  location.pathname === link.to ? 'text-teal' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/planet42"
              className="badge-orange text-xs font-bold px-3 py-1.5 rounded-full"
            >
              Planet42 Customers
            </Link>
            <a
              href={CUSTOMER_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-4 py-2"
            >
              My Account
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-brand text-navy hover:bg-teal-sky transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-card-hover">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-3 py-2.5 rounded-brand text-sm font-semibold transition-colors ${
                  location.pathname === link.to
                    ? 'bg-teal-sky text-teal'
                    : 'text-navy hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <Link
                to="/planet42"
                className="block w-full btn-urgent text-center text-sm py-2.5"
              >
                Planet42 Customers — Action Required
              </Link>
              <a
                href={CUSTOMER_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full btn-primary text-center text-sm py-2.5"
              >
                My Account
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
