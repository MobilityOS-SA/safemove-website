import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Shield, Mail, Smartphone, ArrowRight, RefreshCw, CheckCircle, Lock } from 'lucide-react'
import { ASSETS, CUSTOMER_PORTAL_URL } from '@/lib/constants'

type Step = 'choose' | 'otp-contact' | 'otp-verify' | 'magic-sent' | 'success'
type Method = 'otp' | 'magic'

export default function Login() {
  const [searchParams] = useSearchParams()
  const [step, setStep] = useState<Step>('choose')
  const [method, setMethod] = useState<Method>('otp')
  const [contact, setContact] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [resendCountdown, setResendCountdown] = useState(0)
  const otpRefs = useRef<(HTMLInputElement | null)[]>([])

  // If ?action=magic-link is in the URL, pre-select magic link
  useEffect(() => {
    if (searchParams.get('action') === 'magic-link') {
      setMethod('magic')
      setStep('otp-contact')
    }
  }, [searchParams])

  // Countdown timer for resend
  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [resendCountdown])

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!contact.trim()) return
    setLoading(true)
    setError('')
    // Simulate API call
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    if (method === 'otp') {
      setStep('otp-verify')
      setResendCountdown(60)
    } else {
      setStep('magic-sent')
    }
  }

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return
    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus()
    }
  }

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus()
    }
  }

  const handleOtpVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    const code = otp.join('')
    if (code.length < 6) {
      setError('Please enter all 6 digits.')
      return
    }
    setLoading(true)
    setError('')
    // Simulate verification
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    // In production: verify OTP against backend, then redirect
    setStep('success')
    setTimeout(() => {
      window.location.href = CUSTOMER_PORTAL_URL
    }, 2000)
  }

  const handleResend = async () => {
    if (resendCountdown > 0) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setResendCountdown(60)
    setOtp(['', '', '', '', '', ''])
    otpRefs.current[0]?.focus()
  }

  const isEmail = contact.includes('@')

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <a href="/">
            <img src={ASSETS.logoColour} alt="Safemove" className="h-7 w-auto" />
          </a>
          <div className="flex items-center gap-1.5 text-xs text-mist">
            <Lock className="w-3.5 h-3.5" />
            Secure Login
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">

          {/* Step: Choose method */}
          {step === 'choose' && (
            <div className="card">
              <div className="text-center mb-8">
                <div className="w-14 h-14 rounded-full bg-teal-sky flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-teal" />
                </div>
                <h1 className="font-display font-bold text-navy text-2xl mb-2">Access Your Account</h1>
                <p className="text-mist text-sm">Choose how you would like to log in to your Safemove account.</p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => { setMethod('otp'); setStep('otp-contact') }}
                  className="w-full flex items-center gap-4 p-4 border-2 border-gray-200 rounded-xl hover:border-teal hover:bg-teal-sky/30 transition-all duration-200 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-sky flex items-center justify-center shrink-0">
                    <Smartphone className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">OTP via SMS or Email</p>
                    <p className="text-mist text-xs">Receive a one-time PIN to your registered number or email</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-mist ml-auto shrink-0" />
                </button>

                <button
                  onClick={() => { setMethod('magic'); setStep('otp-contact') }}
                  className="w-full flex items-center gap-4 p-4 border-2 border-gray-200 rounded-xl hover:border-teal hover:bg-teal-sky/30 transition-all duration-200 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-sky flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-teal" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">Magic Link via Email</p>
                    <p className="text-mist text-xs">Receive a secure login link to your registered email address</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-mist ml-auto shrink-0" />
                </button>
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100 text-center">
                <p className="text-mist text-xs">
                  Previously registered with Planet42?{' '}
                  <a href="/planet42" className="text-teal font-semibold hover:underline">
                    Find out how to access your account
                  </a>
                </p>
              </div>
            </div>
          )}

          {/* Step: Enter contact */}
          {step === 'otp-contact' && (
            <div className="card">
              <button
                onClick={() => setStep('choose')}
                className="text-mist text-xs hover:text-navy transition-colors mb-6 flex items-center gap-1"
              >
                ← Back
              </button>
              <div className="text-center mb-8">
                <div className="w-14 h-14 rounded-full bg-teal-sky flex items-center justify-center mx-auto mb-4">
                  {method === 'otp' ? (
                    <Smartphone className="w-7 h-7 text-teal" />
                  ) : (
                    <Mail className="w-7 h-7 text-teal" />
                  )}
                </div>
                <h2 className="font-display font-bold text-navy text-xl mb-2">
                  {method === 'otp' ? 'Enter your mobile or email' : 'Enter your email address'}
                </h2>
                <p className="text-mist text-sm">
                  {method === 'otp'
                    ? 'We will send a 6-digit OTP to your registered contact.'
                    : 'We will send a secure login link to your registered email address.'}
                </p>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-navy text-xs font-semibold mb-1.5">
                    {method === 'otp' ? 'Mobile Number or Email Address' : 'Email Address'}
                  </label>
                  <input
                    type={method === 'magic' ? 'email' : 'text'}
                    required
                    autoFocus
                    className="input-field"
                    placeholder={method === 'otp' ? '0XX XXX XXXX or your@email.com' : 'your@email.com'}
                    value={contact}
                    onChange={e => setContact(e.target.value)}
                  />
                  <p className="text-mist text-xs mt-1.5">
                    Use the same contact details registered with Planet42 or Safemove.
                  </p>
                </div>
                {error && <p className="text-red-500 text-xs">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full text-sm py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      {method === 'otp' ? 'Send OTP' : 'Send Login Link'}
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

          {/* Step: OTP verify */}
          {step === 'otp-verify' && (
            <div className="card">
              <div className="text-center mb-8">
                <div className="w-14 h-14 rounded-full bg-teal-sky flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-7 h-7 text-teal" />
                </div>
                <h2 className="font-display font-bold text-navy text-xl mb-2">Enter your OTP</h2>
                <p className="text-mist text-sm">
                  We sent a 6-digit code to{' '}
                  <span className="text-navy font-semibold">{contact}</span>.
                  {isEmail ? ' Check your inbox.' : ' Check your SMS.'}
                </p>
              </div>

              <form onSubmit={handleOtpVerify} className="space-y-6">
                <div className="flex gap-2 justify-center">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      ref={el => { otpRefs.current[i] = el }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={e => handleOtpChange(i, e.target.value)}
                      onKeyDown={e => handleOtpKeyDown(i, e)}
                      className="w-11 h-14 text-center text-xl font-bold text-navy border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-all"
                      autoFocus={i === 0}
                    />
                  ))}
                </div>

                {error && <p className="text-red-500 text-xs text-center">{error}</p>}

                <button
                  type="submit"
                  disabled={loading || otp.join('').length < 6}
                  className="btn-primary w-full text-sm py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      Verify & Log In
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={resendCountdown > 0}
                    className="text-xs text-mist hover:text-teal transition-colors disabled:cursor-not-allowed"
                  >
                    {resendCountdown > 0
                      ? `Resend OTP in ${resendCountdown}s`
                      : 'Resend OTP'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Step: Magic link sent */}
          {step === 'magic-sent' && (
            <div className="card text-center py-10">
              <div className="w-16 h-16 rounded-full bg-teal-sky flex items-center justify-center mx-auto mb-5">
                <Mail className="w-8 h-8 text-teal" />
              </div>
              <h2 className="font-display font-bold text-navy text-xl mb-3">Check your inbox</h2>
              <p className="text-mist text-sm leading-relaxed max-w-xs mx-auto mb-6">
                We have sent a secure login link to{' '}
                <span className="text-navy font-semibold">{contact}</span>.
                The link expires in 15 minutes.
              </p>
              <div className="bg-teal-sky rounded-xl p-4 mb-6 text-left">
                <p className="text-teal-dark text-xs font-semibold mb-1">Can't find the email?</p>
                <ul className="text-teal-dark text-xs space-y-1">
                  <li>• Check your spam or junk folder</li>
                  <li>• Ensure you used the correct email address</li>
                  <li>• The email is sent from noreply@safemove.co.za</li>
                </ul>
              </div>
              <button
                onClick={() => { setStep('otp-contact'); setMethod('magic') }}
                className="btn-secondary text-sm w-full py-3"
              >
                Try a different email
              </button>
            </div>
          )}

          {/* Step: Success */}
          {step === 'success' && (
            <div className="card text-center py-10">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="font-display font-bold text-navy text-xl mb-3">Verified!</h2>
              <p className="text-mist text-sm leading-relaxed max-w-xs mx-auto">
                Redirecting you to your Safemove account portal...
              </p>
              <div className="mt-4 flex justify-center">
                <RefreshCw className="w-5 h-5 text-teal animate-spin" />
              </div>
            </div>
          )}

          {/* Security note */}
          {step !== 'success' && (
            <div className="mt-5 flex items-center justify-center gap-2 text-mist text-xs">
              <Lock className="w-3.5 h-3.5" />
              <span>Your information is encrypted and secure</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
