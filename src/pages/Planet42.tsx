import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AlertTriangle, CheckCircle, CreditCard, Building2, Smartphone,
  ChevronDown, ChevronUp, ArrowRight, Shield, Phone, Mail,
  Clock, FileText, RefreshCw
} from 'lucide-react'
import { ASSETS, CUSTOMER_PORTAL_URL, CONTACT } from '@/lib/constants'

const paymentMethods = [
  {
    id: 'debit',
    icon: RefreshCw,
    title: 'I Pay by Debit Order',
    badge: '65% of customers',
    badgeColor: 'bg-blue-100 text-blue-700',
    urgency: 'Action Required',
    urgencyColor: 'bg-orange-100 text-orange-drive',
    summary: 'You need to sign a new debit order mandate so your monthly payment continues without interruption.',
    steps: [
      {
        num: 1,
        title: 'Log in to your Safemove account',
        desc: 'Use the email address registered with Planet42. If you have not yet received a login link, click "Get My Login Link" below.',
      },
      {
        num: 2,
        title: 'Navigate to "Payment Settings"',
        desc: 'In your account portal, go to Payment Settings and select "Debit Order Mandate".',
      },
      {
        num: 3,
        title: 'Sign the new mandate',
        desc: 'Complete and sign the new debit order mandate online. This authorises Safemove to collect your monthly subscription payment from your bank account.',
      },
      {
        num: 4,
        title: 'Confirmation',
        desc: 'You will receive an SMS and email confirmation once your mandate is active. Your next debit will run as normal.',
      },
    ],
    warning: 'If you do not sign a new mandate before your next payment date, your debit order will not process and your account may fall into arrears.',
  },
  {
    id: 'eft',
    icon: Building2,
    title: 'I Pay by EFT (Bank Transfer)',
    badge: '25% of customers',
    badgeColor: 'bg-purple-100 text-purple-700',
    urgency: 'Update Required',
    urgencyColor: 'bg-yellow-100 text-yellow-700',
    summary: 'You need to update your beneficiary banking details in your internet banking to reflect Safemove\'s new bank account.',
    steps: [
      {
        num: 1,
        title: 'Note Safemove\'s new banking details',
        desc: 'Log in to your Safemove account to view the new banking details. These will also be displayed in your account portal under "Payment Settings".',
      },
      {
        num: 2,
        title: 'Update your internet banking',
        desc: 'Log in to your bank\'s internet banking or app and update the Planet42 beneficiary to the new Safemove banking details. Do not delete the old beneficiary until the new one is confirmed.',
      },
      {
        num: 3,
        title: 'Make your next payment',
        desc: 'Use the new Safemove banking details for all future payments. Include your contract number as the payment reference.',
      },
      {
        num: 4,
        title: 'Confirm in your portal',
        desc: 'Log in to your Safemove account and mark your EFT details as updated. This helps our team track your account status.',
      },
    ],
    warning: 'Payments made to the old Planet42 bank account after the transfer date cannot be guaranteed to be allocated to your account. Please update your banking details immediately.',
  },
  {
    id: 'card',
    icon: CreditCard,
    title: 'I Pay by Credit Card',
    badge: '10% of customers',
    badgeColor: 'bg-green-100 text-green-700',
    urgency: 'No Action Required',
    urgencyColor: 'bg-green-100 text-green-trust',
    summary: 'Your credit card payment will continue automatically. No action is required on your part.',
    steps: [
      {
        num: 1,
        title: 'Your card continues as normal',
        desc: 'Your existing credit card mandate has been transferred to Safemove. Your monthly payment will be collected on the same date as before.',
      },
      {
        num: 2,
        title: 'Log in to verify your details',
        desc: 'We recommend logging in to your Safemove account to confirm your card details are correct and your account is active.',
      },
      {
        num: 3,
        title: 'Update if your card has changed',
        desc: 'If your credit card has expired or changed since you registered with Planet42, please update your card details in your account portal.',
      },
    ],
    warning: null,
  },
]

const faqs = [
  {
    q: 'Why has my subscription been transferred to Safemove?',
    a: 'Planet42 has entered a business restructuring process. To ensure the continuity and protection of all customer subscriptions, the portfolio has been transferred to Safemove — a regulated, South African vehicle subscription management company. This transfer was done in the best interests of customers to ensure your subscription continues without disruption.',
  },
  {
    q: 'Does anything change about my subscription?',
    a: 'No. Your vehicle, your monthly payment amount, your subscription terms, and your contract end date all remain exactly the same. The only change is that Safemove is now your subscription manager instead of Planet42.',
  },
  {
    q: 'Is my vehicle still insured?',
    a: 'Yes. Your vehicle insurance continues as before. If you have any specific questions about your insurance cover, please contact our support team.',
  },
  {
    q: 'I haven\'t received any communication from Safemove yet. What should I do?',
    a: 'Please check your spam/junk folder for emails from safemove.co.za. If you still cannot find any communication, click "Get My Login Link" below and enter your registered email address or mobile number. We will send you a secure link to access your account.',
  },
  {
    q: 'What if I am behind on my payments?',
    a: 'If your account is in arrears, please log in to your Safemove portal as soon as possible to view your account status and arrange payment. Our collections team is here to help you find a solution — please do not ignore communications from us.',
  },
  {
    q: 'Can I end my subscription early?',
    a: 'Early termination terms remain as per your original Planet42 agreement. Please log in to your account or contact our support team to discuss your options.',
  },
  {
    q: 'Who do I contact if I have a problem with my vehicle?',
    a: 'For vehicle maintenance and breakdown queries, please contact our support team via the details below. We will direct you to the appropriate service provider.',
  },
  {
    q: 'Is Safemove a legitimate company?',
    a: 'Yes. Safemove is a registered South African company, fully compliant with the National Credit Act and Consumer Protection Act. We are committed to transparent, ethical vehicle subscription management.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-navy text-sm">{q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-teal shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-mist shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 text-mist text-sm leading-relaxed border-t border-gray-50 pt-4">
          {a}
        </div>
      )}
    </div>
  )
}

export default function Planet42() {
  const [activeMethod, setActiveMethod] = useState<string | null>(null)

  return (
    <div className="overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ASSETS.planet42Hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="badge-orange mb-5 w-fit">
              <AlertTriangle className="w-3.5 h-3.5" />
              Important Notice for Planet42 Customers
            </div>
            <h1 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
              Your subscription has moved to Safemove
            </h1>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8">
              Your vehicle, your terms, and your monthly payment stay exactly the same. However, you need to take a few simple steps to ensure your payments continue without interruption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/login" className="btn-primary text-base px-7 py-3.5">
                Log In to My Account
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/login?action=magic-link" className="btn-outline-white text-base px-7 py-3.5">
                Get My Login Link
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Changed / What Didn't ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* What stayed the same */}
            <div className="card border border-green-100 bg-green-50/30">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-trust" />
                </div>
                <h3 className="font-semibold text-navy text-lg">What stays the same</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Your vehicle — same car, no changes',
                  'Your monthly subscription amount',
                  'Your contract end date',
                  'Your payment date',
                  'Your vehicle insurance cover',
                  'Your subscription terms and conditions',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-navy/80">
                    <CheckCircle className="w-4 h-4 text-green-trust shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What you need to do */}
            <div className="card border border-orange-100 bg-orange-50/30">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-orange-drive" />
                </div>
                <h3 className="font-semibold text-navy text-lg">What you need to do</h3>
              </div>
              <ul className="space-y-3">
                {[
                  { text: 'Debit order customers: sign a new mandate', urgent: true },
                  { text: 'EFT customers: update your banking details', urgent: true },
                  { text: 'Credit card customers: verify your card is still active', urgent: false },
                  { text: 'All customers: log in to activate your Safemove account', urgent: false },
                  { text: 'Check your account status and payment history', urgent: false },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-2.5 text-sm text-navy/80">
                    {item.urgent ? (
                      <AlertTriangle className="w-4 h-4 text-orange-drive shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                    )}
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Payment Method Guide ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">What do you need to do?</h2>
            <p className="section-subheading mx-auto">
              Select your payment method below to see the exact steps you need to follow.
            </p>
          </div>

          {/* Payment method selector */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setActiveMethod(activeMethod === method.id ? null : method.id)}
                className={`text-left p-5 rounded-xl border-2 transition-all duration-200 ${
                  activeMethod === method.id
                    ? 'border-teal bg-teal-sky shadow-card'
                    : 'border-gray-200 bg-white hover:border-teal/50 hover:shadow-card'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    activeMethod === method.id ? 'bg-teal' : 'bg-gray-100'
                  }`}>
                    <method.icon className={`w-5 h-5 ${activeMethod === method.id ? 'text-white' : 'text-navy'}`} />
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${method.urgencyColor}`}>
                    {method.urgency}
                  </span>
                </div>
                <h3 className="font-semibold text-navy text-sm mb-1">{method.title}</h3>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${method.badgeColor}`}>
                  {method.badge}
                </span>
              </button>
            ))}
          </div>

          {/* Expanded payment method detail */}
          {activeMethod && (() => {
            const method = paymentMethods.find(m => m.id === activeMethod)!
            return (
              <div className="card border border-teal/20 bg-white animate-fade-in-up">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-display font-bold text-navy text-xl mb-2">{method.title}</h3>
                    <p className="text-mist text-sm leading-relaxed max-w-2xl">{method.summary}</p>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full shrink-0 ml-4 ${method.urgencyColor}`}>
                    {method.urgency}
                  </span>
                </div>

                {method.warning && (
                  <div className="flex items-start gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl mb-6">
                    <AlertTriangle className="w-5 h-5 text-orange-drive shrink-0 mt-0.5" />
                    <p className="text-orange-800 text-sm leading-relaxed">{method.warning}</p>
                  </div>
                )}

                <div className="space-y-4 mb-8">
                  {method.steps.map((step) => (
                    <div key={step.num} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-8 h-8 rounded-full bg-teal text-white font-bold text-sm flex items-center justify-center shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy text-sm mb-1">{step.title}</h4>
                        <p className="text-mist text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                  <Link to="/login" className="btn-primary text-sm px-6 py-3">
                    Log In to My Account
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/login?action=magic-link" className="btn-secondary text-sm px-6 py-3">
                    Get My Login Link
                  </Link>
                </div>
              </div>
            )
          })()}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-white text-3xl mb-4">Important Dates</h2>
            <p className="text-gray-400 text-base">Key milestones for the Planet42 to Safemove transition</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                date: 'Transfer Date',
                title: 'Subscription Transferred',
                desc: 'Your subscription officially transferred from Planet42 to Safemove. Your account is now active.',
                color: 'text-teal',
                bg: 'bg-teal/10',
              },
              {
                icon: Clock,
                date: 'Action Deadline',
                title: 'Update Payment Details',
                desc: 'Debit order and EFT customers must update their payment details before this date to avoid payment disruption.',
                color: 'text-orange-drive',
                bg: 'bg-orange-drive/10',
              },
              {
                icon: CheckCircle,
                date: 'First Payment',
                title: 'First Safemove Payment',
                desc: 'Your first payment will be collected by Safemove. Ensure your payment details are updated before this date.',
                color: 'text-green-400',
                bg: 'bg-green-400/10',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${item.color}`}>{item.date}</p>
                <h4 className="font-semibold text-white text-base mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-xs mt-8">
            Specific dates will be communicated to you directly via SMS and email. Log in to your account to view your personal deadline.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4">Frequently Asked Questions</h2>
            <p className="section-subheading mx-auto">
              Everything you need to know about the Planet42 to Safemove transition.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact & Login CTA ── */}
      <section className="py-16 bg-teal-sky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Login CTA */}
            <div className="card text-center">
              <div className="w-14 h-14 rounded-full bg-teal-sky flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-teal" />
              </div>
              <h3 className="font-display font-bold text-navy text-xl mb-3">Access Your Account</h3>
              <p className="text-mist text-sm leading-relaxed mb-6">
                Log in to your Safemove customer portal to view your subscription, update payment details, and manage your account.
              </p>
              <div className="space-y-3">
                <Link to="/login" className="block w-full btn-primary text-sm py-3">
                  Log In to My Account
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/login?action=magic-link" className="block w-full btn-secondary text-sm py-3">
                  Send Me a Login Link
                </Link>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="card text-center">
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-orange-drive" />
              </div>
              <h3 className="font-display font-bold text-navy text-xl mb-3">Need Help?</h3>
              <p className="text-mist text-sm leading-relaxed mb-6">
                Our dedicated South African support team is ready to assist you with any questions about your subscription or the transition.
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-center justify-center gap-2 w-full btn-urgent text-sm py-3"
                >
                  <Phone className="w-4 h-4" />
                  {CONTACT.phone}
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center justify-center gap-2 w-full btn-secondary text-sm py-3"
                >
                  <Mail className="w-4 h-4" />
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
