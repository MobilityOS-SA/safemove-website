import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Shield } from 'lucide-react'
import { ASSETS, CONTACT, CUSTOMER_PORTAL_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={ASSETS.logoLight} alt="Safemove" className="h-8 w-auto mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              South Africa's trusted vehicle subscription management partner. Transparent, reliable, and built around you.
            </p>
            <div className="flex items-center gap-2 text-teal text-sm font-semibold">
              <Shield className="w-4 h-4" />
              <span>Move with Confidence</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', to: '/' },
                { label: 'How It Works', to: '/how-it-works' },
                { label: 'About Us', to: '/about' },
                { label: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-teal text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Customers</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={CUSTOMER_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal text-sm transition-colors"
                >
                  My Account Portal
                </a>
              </li>
              <li>
                <Link to="/planet42" className="text-orange-drive hover:text-orange-300 text-sm font-semibold transition-colors">
                  Planet42 Customers
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-teal text-sm transition-colors">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="text-gray-400 hover:text-teal text-sm transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">{CONTACT.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">{CONTACT.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Safemove (Pty) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
