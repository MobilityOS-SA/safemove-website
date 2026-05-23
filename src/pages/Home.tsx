import { Link } from 'react-router-dom'
import {
  Shield, CheckCircle, Car, CreditCard, HeadphonesIcon,
  ArrowRight, Users, TrendingUp, Award, ChevronRight
} from 'lucide-react'
import { ASSETS, CUSTOMER_PORTAL_URL } from '@/lib/constants'

const valueProps = [
  {
    icon: Shield,
    title: 'Regulated & Trustworthy',
    desc: 'Fully compliant with South African consumer protection legislation. Your subscription is safe with us.',
  },
  {
    icon: Car,
    title: 'Seamless Subscription',
    desc: 'Your existing vehicle subscription continues uninterrupted. Same car, same terms — just a better partner.',
  },
  {
    icon: CreditCard,
    title: 'Flexible Payments',
    desc: 'Pay by debit order, EFT, or credit card. Manage everything securely through your online account.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    desc: 'A dedicated South African support team available to assist you every step of the way.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Your Subscription Transfers',
    desc: 'Your existing vehicle subscription is transferred to Safemove. Your vehicle, your terms, your monthly payment — nothing changes.',
  },
  {
    num: '02',
    title: 'Update Your Payment Details',
    desc: 'If you pay by debit order, you will need to sign a new mandate. EFT customers receive updated banking details. This takes less than 5 minutes.',
  },
  {
    num: '03',
    title: 'Access Your Account',
    desc: 'Log in to your Safemove customer portal to view your subscription, manage payments, and contact support.',
  },
  {
    num: '04',
    title: 'Keep Driving',
    desc: 'That\'s it. Your subscription continues as normal. We handle the rest.',
  },
]

const stats = [
  { value: '16,000+', label: 'Active Subscribers' },
  { value: '99.2%', label: 'Payment Success Rate' },
  { value: '< 24h', label: 'Support Response Time' },
  { value: '5 Stars', label: 'Customer Satisfaction' },
]

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ASSETS.heroMain})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-2xl">
            <div className="badge-teal mb-6 w-fit">
              <Shield className="w-3.5 h-3.5" />
              South Africa's Trusted Vehicle Subscription Partner
            </div>
            <h1 className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Move with <span className="text-teal">Confidence</span>
            </h1>
            <p className="text-gray-200 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              Safemove manages vehicle subscriptions for thousands of South Africans — providing transparent, reliable, and consumer-first fleet management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CUSTOMER_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4"
              >
                Access My Account
                <ChevronRight className="w-5 h-5" />
              </a>
              <Link to="/planet42" className="btn-urgent text-base px-8 py-4">
                Planet42 Customers
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-xs">
          <span>Scroll to learn more</span>
          <div className="w-px h-8 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* ── Planet42 Urgent Banner ── */}
      <section className="bg-orange-drive text-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-sm">Planet42 Customers — Action Required</p>
                <p className="text-orange-100 text-xs">Your subscription has transferred to Safemove. Please update your payment details.</p>
              </div>
            </div>
            <Link
              to="/planet42"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-orange-drive font-bold text-sm px-5 py-2.5 rounded-brand hover:bg-orange-50 transition-colors"
            >
              Find Out What To Do
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-navy py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-teal text-3xl sm:text-4xl mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value Propositions ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading mb-4">Why Safemove?</h2>
            <p className="section-subheading mx-auto">
              We exist to give vehicle subscription customers a trustworthy, transparent home for their subscription — with the support and technology to back it up.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((vp) => (
              <div key={vp.title} className="card group">
                <div className="w-12 h-12 rounded-xl bg-teal-sky flex items-center justify-center mb-4 group-hover:bg-teal transition-colors duration-200">
                  <vp.icon className="w-6 h-6 text-teal group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="font-semibold text-navy text-base mb-2">{vp.title}</h3>
                <p className="text-mist text-sm leading-relaxed">{vp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge-teal mb-6 w-fit">
                <CheckCircle className="w-3.5 h-3.5" />
                Simple Process
              </div>
              <h2 className="section-heading mb-6">Getting started is simple</h2>
              <p className="text-mist text-base leading-relaxed mb-10">
                Whether you are an existing Planet42 customer transitioning to Safemove, or a new subscriber, the process is straightforward and takes just a few minutes.
              </p>
              <div className="space-y-6">
                {steps.map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal text-white font-display font-bold text-sm flex items-center justify-center shrink-0">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy text-sm mb-1">{step.title}</h4>
                      <p className="text-mist text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/how-it-works" className="btn-secondary text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src={ASSETS.howItWorks}
                  alt="Vehicle subscription process"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-card-hover p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-trust" />
                </div>
                <div>
                  <p className="text-navy font-bold text-sm">Subscription Active</p>
                  <p className="text-mist text-xs">Your vehicle is protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Banner ── */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ASSETS.trustBanner})` }}
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-6">
              {[Users, TrendingUp, Award].map((Icon, i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-teal" />
                </div>
              ))}
            </div>
          </div>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-4">
            Trusted by thousands of South African drivers
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Safemove is the responsible, regulated home for your vehicle subscription. We are committed to transparency, compliance, and putting customers first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CUSTOMER_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
            >
              Access My Account
            </a>
            <Link to="/about" className="btn-outline-white text-base px-8 py-4">
              About Safemove
            </Link>
          </div>
        </div>
      </section>

      {/* ── Planet42 Feature Card ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${ASSETS.planet42Hero})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
            <div className="relative z-10 p-10 sm:p-14 lg:p-16 max-w-2xl">
              <div className="badge-orange mb-6 w-fit">
                Action Required
              </div>
              <h2 className="font-display font-bold text-white text-3xl sm:text-4xl mb-4">
                Are you a Planet42 customer?
              </h2>
              <p className="text-gray-200 text-base leading-relaxed mb-4">
                Your vehicle subscription has been transferred to Safemove. Your car, your terms, and your monthly payment remain exactly the same.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                However, you will need to take a few simple steps to ensure your payments continue without interruption — including updating your debit order mandate or EFT banking details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/planet42" className="btn-urgent text-base px-8 py-4">
                  What Do I Need To Do?
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href={CUSTOMER_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-white text-base px-8 py-4"
                >
                  Log In to My Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="py-16 bg-teal-sky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-navy text-2xl sm:text-3xl mb-3">
            Have questions? We're here to help.
          </h2>
          <p className="text-navy/70 text-base mb-8">
            Our South African support team is ready to assist you with any queries about your subscription.
          </p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Contact Us
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
