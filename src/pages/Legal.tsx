import { Shield } from 'lucide-react'
import { useParams } from 'react-router-dom'

export default function Legal() {
  const { type } = useParams<{ type: string }>()
  const isPrivacy = type === 'privacy'

  return (
    <div className="overflow-x-hidden">
      <section className="bg-navy pt-28 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="badge-teal mb-4 w-fit">
            <Shield className="w-3.5 h-3.5" />
            Legal
          </div>
          <h1 className="font-display font-bold text-white text-3xl sm:text-4xl">
            {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
          </h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-navy max-w-none">
            <p className="text-mist text-sm mb-8">Last updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            {isPrivacy ? (
              <>
                <h2 className="font-display font-bold text-navy text-xl mb-4">1. Information We Collect</h2>
                <p className="text-navy/70 text-sm leading-relaxed mb-6">Safemove collects personal information necessary to manage your vehicle subscription, including your name, contact details, banking information, and vehicle subscription details. This information is collected in compliance with the Protection of Personal Information Act (POPIA).</p>
                <h2 className="font-display font-bold text-navy text-xl mb-4">2. How We Use Your Information</h2>
                <p className="text-navy/70 text-sm leading-relaxed mb-6">Your information is used solely for the purpose of managing your vehicle subscription, processing payments, and communicating with you about your account. We do not sell or share your personal information with third parties except as required by law or as necessary to provide our services.</p>
                <h2 className="font-display font-bold text-navy text-xl mb-4">3. Your Rights</h2>
                <p className="text-navy/70 text-sm leading-relaxed mb-6">Under POPIA, you have the right to access, correct, and request deletion of your personal information. To exercise these rights, please contact us at support@safemove.co.za.</p>
                <h2 className="font-display font-bold text-navy text-xl mb-4">4. Contact</h2>
                <p className="text-navy/70 text-sm leading-relaxed">For privacy-related queries, contact our Information Officer at privacy@safemove.co.za.</p>
              </>
            ) : (
              <>
                <h2 className="font-display font-bold text-navy text-xl mb-4">1. Acceptance of Terms</h2>
                <p className="text-navy/70 text-sm leading-relaxed mb-6">By accessing and using the Safemove customer portal and website, you agree to be bound by these Terms of Service and all applicable South African laws and regulations.</p>
                <h2 className="font-display font-bold text-navy text-xl mb-4">2. Vehicle Subscription</h2>
                <p className="text-navy/70 text-sm leading-relaxed mb-6">Your vehicle subscription is governed by your individual subscription agreement. These Terms of Service apply to your use of the Safemove digital platforms and do not supersede your subscription agreement.</p>
                <h2 className="font-display font-bold text-navy text-xl mb-4">3. Payment Obligations</h2>
                <p className="text-navy/70 text-sm leading-relaxed mb-6">You are responsible for ensuring your monthly subscription payment is made on time. Failure to pay may result in account suspension and, ultimately, vehicle recovery in accordance with your subscription agreement.</p>
                <h2 className="font-display font-bold text-navy text-xl mb-4">4. Governing Law</h2>
                <p className="text-navy/70 text-sm leading-relaxed">These Terms are governed by the laws of the Republic of South Africa. Any disputes will be subject to the jurisdiction of the South African courts.</p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
