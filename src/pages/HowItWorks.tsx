import { Link } from 'react-router-dom'
import { Car, CreditCard, Shield, HeadphonesIcon, CheckCircle, ArrowRight, RefreshCw, Building2 } from 'lucide-react'
import { ASSETS, CUSTOMER_PORTAL_URL } from '@/lib/constants'

const phases = [
  {
    phase: 'Phase 1',
    title: 'Your Subscription Transfers',
    icon: RefreshCw,
    color: 'teal',
    steps: [
      'Your vehicle subscription is transferred to Safemove from your previous provider.',
      'Your vehicle, monthly payment, contract terms, and end date remain exactly the same.',
      'You receive a welcome communication from Safemove via SMS and email.',
      'Your Safemove customer account is created and ready to activate.',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Activate Your Account',
    icon: Shield,
    color: 'navy',
    steps: [
      'Click the login link in your welcome email or SMS, or visit my.safemove.co.za.',
      'Verify your identity using your registered mobile number (OTP) or email magic link.',
      'Review your subscription details and confirm everything is correct.',
      'Update your contact information if anything has changed.',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Update Your Payment',
    icon: CreditCard,
    color: 'orange',
    steps: [
      'Debit order customers: sign a new debit order mandate in your account portal.',
      'EFT customers: update your banking beneficiary to Safemove\'s new account details.',
      'Credit card customers: verify your card details are current and active.',
      'Receive confirmation that your payment method is set up correctly.',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Keep Driving',
    icon: Car,
    color: 'green',
    steps: [
      'Your subscription continues as normal — same car, same payment, same date.',
      'Access your account anytime to view statements, update details, or contact support.',
      'Receive SMS and email notifications for upcoming payments and account updates.',
      'Our support team is available to assist with any queries.',
    ],
  },
]

const paymentOptions = [
  {
    icon: RefreshCw,
    title: 'Debit Order',
    desc: 'Automatic monthly collection from your bank account. The most convenient option — set it up once and never miss a payment.',
    action: 'Sign a new mandate in your account portal.',
    badge: '65% of customers',
  },
  {
    icon: Building2,
    title: 'EFT (Bank Transfer)',
    desc: 'Manual monthly payment via internet banking. You control when the payment is made — just ensure it arrives before your due date.',
    action: 'Update your banking beneficiary to Safemove\'s details.',
    badge: '25% of customers',
  },
  {
    icon: CreditCard,
    title: 'Credit Card',
    desc: 'Monthly charge to your credit card. Convenient and secure — your card details are stored safely in our encrypted payment vault.',
    action: 'Verify your card details are current.',
    badge: '10% of customers',
  },
]

export default function HowItWorks() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="bg-navy pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="badge-teal mb-5 w-fit">
              <CheckCircle className="w-3.5 h-3.5" />
              Simple & Transparent
            </div>
            <h1 className="font-display font-bold text-white text-4xl sm:text-5xl leading-tight mb-5">
              How Safemove works
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Managing your vehicle subscription with Safemove is straightforward. Here is everything you need to know.
            </p>
          </div>
        </div>
      </section>

      {/* Process phases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading mb-4">The Safemove Journey</h2>
            <p className="section-subheading mx-auto">
              Four simple phases — from subscription transfer to keeping you on the road.
            </p>
          </div>
          <div className="space-y-8">
            {phases.map((phase, i) => (
              <div
                key={phase.phase}
                className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`card ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      phase.color === 'teal' ? 'bg-teal-sky' :
                      phase.color === 'navy' ? 'bg-navy/10' :
                      phase.color === 'orange' ? 'bg-orange-100' : 'bg-green-100'
                    }`}>
                      <phase.icon className={`w-5 h-5 ${
                        phase.color === 'teal' ? 'text-teal' :
                        phase.color === 'navy' ? 'text-navy' :
                        phase.color === 'orange' ? 'text-orange-drive' : 'text-green-trust'
                      }`} />
                    </div>
                    <div>
                      <p className="text-mist text-xs font-semibold uppercase tracking-wider">{phase.phase}</p>
                      <h3 className="font-semibold text-navy text-lg">{phase.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {phase.steps.map((step) => (
                      <li key={step} className="flex items-start gap-2.5 text-sm text-navy/70">
                        <CheckCircle className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`flex items-center justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`w-32 h-32 rounded-full flex items-center justify-center text-5xl font-display font-bold ${
                    phase.color === 'teal' ? 'bg-teal-sky text-teal' :
                    phase.color === 'navy' ? 'bg-navy/10 text-navy' :
                    phase.color === 'orange' ? 'bg-orange-100 text-orange-drive' : 'bg-green-100 text-green-trust'
                  }`}>
                    0{i + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading mb-4">Payment Options</h2>
            <p className="section-subheading mx-auto">
              Safemove supports three payment methods. Choose the one that works best for you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {paymentOptions.map((opt) => (
              <div key={opt.title} className="card group hover:border-teal border border-transparent">
                <div className="w-12 h-12 rounded-xl bg-teal-sky flex items-center justify-center mb-4 group-hover:bg-teal transition-colors duration-200">
                  <opt.icon className="w-6 h-6 text-teal group-hover:text-white transition-colors duration-200" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-navy text-base">{opt.title}</h3>
                  <span className="text-xs text-mist bg-gray-100 px-2 py-0.5 rounded-full">{opt.badge}</span>
                </div>
                <p className="text-mist text-sm leading-relaxed mb-4">{opt.desc}</p>
                <div className="flex items-start gap-2 p-3 bg-teal-sky rounded-lg">
                  <ArrowRight className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                  <p className="text-teal-dark text-xs font-semibold">{opt.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-heading mb-6">Always here when you need us</h2>
              <p className="text-navy/70 text-base leading-relaxed mb-6">
                Our dedicated South African support team is available to assist you with any query — from payment questions to vehicle issues. We are committed to responding within 24 hours.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Payment queries and account management',
                  'Debit order and EFT assistance',
                  'Vehicle maintenance and breakdown support',
                  'End-of-term and contract queries',
                  'Complaints and escalations',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-navy/70">
                    <HeadphonesIcon className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary text-sm">
                Contact Support
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-card-hover">
              <img src={ASSETS.planet42Hero} alt="Customer support" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-sky">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-navy text-3xl mb-4">Ready to get started?</h2>
          <p className="text-navy/70 text-base mb-8">
            Log in to your Safemove account to manage your subscription, update payment details, and access support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CUSTOMER_PORTAL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
              Access My Account
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link to="/planet42" className="btn-secondary text-base px-8 py-4">
              Planet42 Customers
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
