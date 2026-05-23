import { Shield, Users, TrendingUp, Award, CheckCircle, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ASSETS } from '@/lib/constants'

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'We operate with full transparency. Every fee, every term, every communication — clear and honest.',
  },
  {
    icon: Users,
    title: 'Customer First',
    desc: 'Every decision we make starts with the question: is this in the best interest of our subscribers?',
  },
  {
    icon: TrendingUp,
    title: 'Reliability',
    desc: 'Thousands of South Africans depend on their vehicles every day. We take that responsibility seriously.',
  },
  {
    icon: Heart,
    title: 'Empathy',
    desc: 'We understand that a vehicle is not just transport — it is livelihood, family, and freedom.',
  },
]

const team = [
  { name: 'Executive Leadership', desc: 'Experienced financial services and fleet management professionals with deep South African market knowledge.' },
  { name: 'Customer Support', desc: 'A dedicated South African team available to assist subscribers with any query, from payment questions to vehicle issues.' },
  { name: 'Technology', desc: 'A modern, secure platform built to give customers full visibility and control over their subscription.' },
  { name: 'Compliance', desc: 'Full compliance with the National Credit Act, Consumer Protection Act, and all relevant South African legislation.' },
]

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="bg-navy pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="badge-teal mb-5 w-fit">
              <Award className="w-3.5 h-3.5" />
              About Safemove
            </div>
            <h1 className="font-display font-bold text-white text-4xl sm:text-5xl leading-tight mb-5">
              South Africa's trusted vehicle subscription partner
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Safemove was founded on a simple belief: South Africans who subscribe to vehicles deserve a partner that is transparent, reliable, and genuinely on their side.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-heading mb-6">Our Mission</h2>
              <p className="text-navy/70 text-base leading-relaxed mb-5">
                Safemove exists to provide responsible, transparent, and consumer-first vehicle subscription management for South African drivers. We manage the full lifecycle of vehicle subscriptions — from payment collection and customer support through to end-of-term vehicle recovery and disposal.
              </p>
              <p className="text-navy/70 text-base leading-relaxed mb-8">
                We partner with financial institutions, fleet funders, and vehicle subscription originators to ensure that subscriber portfolios are managed with the highest standards of care, compliance, and customer service.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '16,000+', label: 'Active Subscribers' },
                  { value: 'R2B+', label: 'Portfolio Under Management' },
                  { value: '100%', label: 'South African' },
                  { value: 'NCR', label: 'Registered & Compliant' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-teal-sky rounded-xl p-4">
                    <div className="font-display font-bold text-teal text-2xl">{stat.value}</div>
                    <div className="text-navy/60 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <img src={ASSETS.heroMain} alt="Safemove team" className="w-full h-72 object-cover" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-navy rounded-xl p-5 shadow-card-hover">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-teal" />
                  <div>
                    <p className="text-white font-bold text-sm">Fully Regulated</p>
                    <p className="text-gray-400 text-xs">NCA & CPA Compliant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading mb-4">Our Values</h2>
            <p className="section-subheading mx-auto">
              These are the principles that guide every decision we make.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card text-center group">
                <div className="w-12 h-12 rounded-xl bg-teal-sky flex items-center justify-center mx-auto mb-4 group-hover:bg-teal transition-colors duration-200">
                  <v.icon className="w-6 h-6 text-teal group-hover:text-white transition-colors duration-200" />
                </div>
                <h3 className="font-semibold text-navy text-base mb-2">{v.title}</h3>
                <p className="text-mist text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading mb-4">How We Are Structured</h2>
            <p className="section-subheading mx-auto">
              Safemove is built around four core capabilities that ensure your subscription is managed professionally at every stage.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {team.map((t) => (
              <div key={t.name} className="card flex gap-4">
                <div className="w-10 h-10 rounded-full bg-teal-sky flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy text-base mb-1">{t.name}</h4>
                  <p className="text-mist text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-white text-3xl mb-4">Ready to get started?</h2>
          <p className="text-gray-400 text-base mb-8">
            Whether you are an existing Planet42 customer or a new subscriber, we are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/planet42" className="btn-urgent text-base px-8 py-4">
              Planet42 Customers
            </Link>
            <Link to="/contact" className="btn-outline-white text-base px-8 py-4">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
