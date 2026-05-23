import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, CheckCircle, Send } from 'lucide-react'
import { CONTACT } from '@/lib/constants'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production this would POST to a backend endpoint
    setSubmitted(true)
  }

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="bg-navy pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="badge-teal mb-5 w-fit">
              <Phone className="w-3.5 h-3.5" />
              Get In Touch
            </div>
            <h1 className="font-display font-bold text-white text-4xl sm:text-5xl leading-tight mb-5">
              We're here to help
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our South African support team is ready to assist you with any query about your vehicle subscription.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="section-heading mb-8">Contact Information</h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: Phone, label: 'Phone', value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
                  { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                  { icon: MapPin, label: 'Location', value: CONTACT.address, href: null },
                  { icon: Clock, label: 'Support Hours', value: 'Monday – Friday: 08:00 – 17:00\nSaturday: 09:00 – 13:00', href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-sky flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-mist text-xs font-semibold uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-navy font-semibold text-sm hover:text-teal transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-navy font-semibold text-sm whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                <p className="font-semibold text-orange-drive text-sm mb-1">Planet42 Customers</p>
                <p className="text-orange-800 text-sm leading-relaxed">
                  If you are a Planet42 customer with urgent payment queries, please visit our{' '}
                  <a href="/planet42" className="underline font-semibold">Planet42 information page</a>{' '}
                  for specific guidance on what you need to do.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div>
              {submitted ? (
                <div className="card text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-trust" />
                  </div>
                  <h3 className="font-display font-bold text-navy text-xl mb-3">Message Received</h3>
                  <p className="text-mist text-sm leading-relaxed max-w-sm mx-auto">
                    Thank you for contacting us. Our support team will respond to your query within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="card">
                  <h3 className="font-semibold text-navy text-lg mb-6">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-navy text-xs font-semibold mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          className="input-field"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-navy text-xs font-semibold mb-1.5">Mobile Number</label>
                        <input
                          type="tel"
                          className="input-field"
                          placeholder="0XX XXX XXXX"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-navy text-xs font-semibold mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="input-field"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-navy text-xs font-semibold mb-1.5">Subject *</label>
                      <select
                        required
                        className="input-field"
                        value={form.subject}
                        onChange={e => setForm({ ...form, subject: e.target.value })}
                      >
                        <option value="">Select a subject</option>
                        <option value="payment">Payment Query</option>
                        <option value="debit-order">Debit Order / Mandate</option>
                        <option value="eft">EFT Banking Details</option>
                        <option value="planet42">Planet42 Transition</option>
                        <option value="vehicle">Vehicle Query</option>
                        <option value="account">Account Access</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-navy text-xs font-semibold mb-1.5">Message *</label>
                      <textarea
                        required
                        rows={4}
                        className="input-field resize-none"
                        placeholder="Please describe your query in detail..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full text-sm py-3">
                      Send Message
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
