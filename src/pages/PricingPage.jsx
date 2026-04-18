import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import { CheckCircle2, X, Zap, Shield, Gift, ChevronDown, ChevronUp, Tag, Star, Clock, Flame, Crown, PartyPopper } from 'lucide-react';

// ─── Razorpay Config ────────────────────────────────────────────────────────
// Key ID is safe to use on the frontend (public).
// Key Secret (0AeXhZ0QjKM93DD5qX8eA1oo) must ONLY be used server-side for
// order creation & payment verification — never expose it in frontend code.
const RAZORPAY_KEY_ID = 'rzp_live_SdosE3MlKgGqfR';

const VALID_COUPONS = {
  'EAMCET30': { discount: 30, label: '30% off', type: 'percent' },
  'FIRST50': { discount: 50, label: '50% off first month', type: 'percent' },
  'STUDENT99': { discount: 100, label: '₹100 off', type: 'flat' },
  'CRACK2025': { discount: 25, label: '25% off', type: 'percent' },
  'AKSHARA100': { discount: 100, label: '100% off — Free!', type: 'percent' },
};

const PLANS = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    annualPrice: 0,
    badge: null,
    color: '#64748b',
    bgColor: '#f8fafc',
    borderColor: '#e2e8f0',
    description: 'Get started with the basics',
    features: [
      { text: '3 Papers per month', included: true },
      { text: 'Basic performance stats', included: true },
      { text: 'Syllabus viewer', included: true },
      { text: 'Basic flashcards', included: true },
      { text: 'Full mock test suite', included: false },
      { text: 'Deep analytics & insights', included: false },
      { text: 'Rank & college predictor', included: false },
      { text: 'Leaderboard access', included: false },
      { text: 'Unlimited practice papers', included: false },
      { text: 'Priority support', included: false },
    ],
    cta: 'Continue Free',
    ctaAction: 'free',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 99,
    originalPrice: 499,
    annualPrice: 999,
    badge: 'Most Popular',
    badgeIcon: 'flame',
    color: '#2563eb',
    bgColor: '#eff6ff',
    borderColor: '#2563eb',
    description: 'Everything you need to crack EAMCET',
    features: [
      { text: 'Unlimited practice papers', included: true },
      { text: 'Full mock test suite (160Q)', included: true },
      { text: 'Deep analytics & insights', included: true },
      { text: 'Rank & college predictor', included: true },
      { text: 'Global leaderboard', included: true },
      { text: 'Smart flashcards (all topics)', included: true },
      { text: 'Performance trend graphs', included: true },
      { text: 'Refer & Earn rewards', included: true },
      { text: 'Email support', included: true },
      { text: 'Early access to new features', included: false },
    ],
    cta: 'Upgrade to Pro',
    ctaAction: 'pay',
  },
  {
    id: 'annual',
    name: 'Pro Annual',
    price: 58,
    annualPrice: 699,
    originalAnnualPrice: 2499,
    badge: 'Best Value',
    badgeIcon: 'crown',
    color: '#059669',
    bgColor: '#ecfdf5',
    borderColor: '#059669',
    description: 'Save big with yearly billing',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Priority email & chat support', included: true },
      { text: 'Early access to new features', included: true },
      { text: 'Exclusive study material PDF', included: true },
      { text: 'Dedicated rank coaching tips', included: true },
      { text: 'All future features included', included: true },
      { text: '1-on-1 doubt session (1/month)', included: true },
      { text: 'Certificate of completion', included: true },
      { text: 'Unlimited practice papers', included: true },
      { text: 'Full analytics suite', included: true },
    ],
    cta: 'Get Annual — Best Deal',
    ctaAction: 'pay_annual',
  },
];

const FAQS = [
  {
    q: 'Can I cancel my subscription anytime?',
    a: 'Absolutely. You can cancel from your account settings at any time with zero cancellation fee. Your Pro access continues until the end of the current billing cycle.',
  },
  {
    q: 'Are payments secure?',
    a: 'Yes. All payments are processed securely through Razorpay, which is PCI-DSS compliant. We never store your card details.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We accept UPI, all major debit/credit cards, net banking (50+ banks), and popular wallets like Paytm and PhonePe via Razorpay.',
  },
  {
    q: 'Do coupon codes work on annual plans?',
    a: 'Yes! Most coupons apply to both monthly and annual billing. The annual plan already includes a 37% discount, so some single-use coupons may not stack.',
  },
];

export default function PricingPage({ user, plan, onUpgrade }) {
  const navigate = useNavigate();
  const [billing, setBilling] = useState('monthly');
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');
  const [openFaq, setOpenFaq] = useState(null);
  const [showOffers, setShowOffers] = useState(false);
  const [payLoading, setPayLoading] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null); // { paymentId, plan }
  const [rzpReady, setRzpReady] = useState(false);

  // Load Razorpay checkout script dynamically
  useEffect(() => {
    if (window.Razorpay) { setRzpReady(true); return; }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setRzpReady(true);
    script.onerror = () => console.error('Razorpay SDK failed to load.');
    document.body.appendChild(script);
    return () => { try { document.body.removeChild(script); } catch (e) {} };
  }, []);

  const applyCoupon = () => {
    const code = couponInput.trim().toUpperCase();
    if (!code) { setCouponError('Please enter a coupon code.'); return; }
    if (VALID_COUPONS[code]) {
      setAppliedCoupon({ code, ...VALID_COUPONS[code] });
      setCouponError('');
    } else {
      setAppliedCoupon(null);
      setCouponError('Invalid coupon code. Try EAMCET30, FIRST50, CRACK2025, STUDENT99, or AKSHARA100.');
    }
  };

  const applySpecificCoupon = (codeToApply) => {
    setCouponInput(codeToApply);
    if (VALID_COUPONS[codeToApply]) {
      setAppliedCoupon({ code: codeToApply, ...VALID_COUPONS[codeToApply] });
      setCouponError('');
      setShowOffers(false);
    }
  };

  const removeCoupon = () => { setAppliedCoupon(null); setCouponInput(''); setCouponError(''); };

  const getDiscountedPrice = (basePrice) => {
    if (!appliedCoupon || basePrice === 0) return basePrice;
    if (appliedCoupon.type === 'percent') return Math.max(0, Math.round(basePrice * (1 - appliedCoupon.discount / 100)));
    if (appliedCoupon.type === 'flat') return Math.max(0, basePrice - appliedCoupon.discount);
    return basePrice;
  };

  const initiatePayment = (planId) => {
    if (!user) { navigate('/login'); return; }

    if (!rzpReady || !window.Razorpay) {
      alert('Payment gateway is still loading. Please wait a moment and try again.');
      return;
    }

    const targetPlan = PLANS.find(p => p.ctaAction === planId);
    if (!targetPlan) return;

    const isAnnual = planId === 'pay_annual';
    const planLabel = targetPlan.name;
    const baseAmount = isAnnual ? targetPlan.annualPrice : targetPlan.price;
    const finalAmount = getDiscountedPrice(baseAmount);
    const amountPaise = finalAmount * 100; // Razorpay expects paise

    // If AKSHARA100 coupon makes it free, directly upgrade without payment
    if (finalAmount === 0 && appliedCoupon?.code === 'AKSHARA100') {
      const newPlan = isAnnual ? 'annual' : 'pro';
      if (onUpgrade) onUpgrade(newPlan);
      setPaymentSuccess({
        paymentId: 'FREE-AKSHARA100',
        plan: planLabel,
        amount: 0,
      });
      return;
    }

    setPayLoading(planId);

    const options = {
      key: RAZORPAY_KEY_ID,
      amount: amountPaise,
      currency: 'INR',
      name: 'EAMCET Pro',
      description: `${planLabel} Subscription${appliedCoupon ? ` (${appliedCoupon.code})` : ''}`,
      // image: 'https://your-logo-url.png', // optional branding logo
      prefill: {
        name: user?.name || '',
        email: user?.email || '',
        contact: '', // add phone if available
      },
      notes: {
        plan: isAnnual ? 'annual' : 'monthly',
        coupon: appliedCoupon?.code || 'NONE',
        user_id: user?.uid || '',
        user_email: user?.email || '',
      },
      theme: {
        color: '#2563eb',
        hide_topbar: false,
      },
      // ─── Success Handler ───────────────────────────────────────────────────
      // NOTE: In production, send razorpay_payment_id + razorpay_order_id +
      // razorpay_signature to your backend and verify with Key Secret before
      // granting Pro access. NEVER do this verification on the frontend.
      handler: (response) => {
        setPayLoading(null);
        const newPlan = isAnnual ? 'annual' : 'pro';
        // Persist plan to Firestore via App.jsx
        if (onUpgrade) onUpgrade(newPlan);
        setPaymentSuccess({
          paymentId: response.razorpay_payment_id,
          plan: planLabel,
          amount: finalAmount,
        });
      },
      // ─── Modal dismissed without payment ──────────────────────────────────
      modal: {
        ondismiss: () => {
          setPayLoading(null);
        },
        animation: true,
      },
    };

    try {
      const rzp = new window.Razorpay(options);
      // Listen for payment failure events
      rzp.on('payment.failed', (response) => {
        setPayLoading(null);
        const err = response.error;
        console.error('Razorpay payment failed:', err);
        alert(`❌ Payment Failed\n\nReason: ${err.description}\nCode: ${err.code}\n\nPlease try again or use a different payment method.`);
      });
      rzp.open();
    } catch (e) {
      setPayLoading(null);
      console.error('Razorpay init error:', e);
      alert('Could not open payment gateway. Please refresh and try again.');
    }
  };

  const handleCta = (planId, ctaAction) => {
    if (ctaAction === 'free') { navigate(user ? '/dashboard' : '/login'); return; }
    initiatePayment(ctaAction);
  };

  // ─── Payment Success Screen ────────────────────────────────────────────────
  if (paymentSuccess) {
    return (
      <div style={{ minHeight: '100vh', background: '#f8faff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, fontFamily: 'Sora, Inter, sans-serif' }}>
        <div style={{ background: 'white', borderRadius: 28, padding: '52px 40px', maxWidth: 480, width: '100%', textAlign: 'center', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.12)', border: '1px solid #e2e8f0' }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg,#059669,#10b981)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', boxShadow: '0 8px 24px rgba(5,150,105,0.3)' }}>
            <CheckCircle2 size={40} color="white" strokeWidth={2} />
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0f172a', marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>Payment Successful! <PartyPopper size={28} color="#059669" /></h2>
          <p style={{ color: '#64748b', fontSize: 16, lineHeight: 1.6, marginBottom: 8 }}>You're now on <strong style={{ color: '#2563eb' }}>EAMCET Pro — {paymentSuccess.plan}</strong></p>
          <p style={{ color: '#64748b', fontSize: 14, marginBottom: 4 }}>Amount paid: <strong>₹{paymentSuccess.amount}</strong></p>
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 12, padding: '12px 16px', margin: '20px 0', textAlign: 'left' }}>
            <div style={{ fontSize: 12, color: '#166534', fontWeight: 700, marginBottom: 4 }}>PAYMENT ID</div>
            <div style={{ fontSize: 13, color: '#14532d', fontFamily: 'monospace', wordBreak: 'break-all' }}>{paymentSuccess.paymentId}</div>
          </div>
          <p style={{ fontSize: 12, color: '#94a3b8', marginBottom: 28, lineHeight: 1.6 }}>Save your Payment ID for reference. A confirmation email will be sent to <strong>{user?.email}</strong>.</p>
          <button
            onClick={() => navigate('/dashboard')}
            style={{ width: '100%', padding: '15px 20px', background: '#2563eb', color: 'white', border: 'none', borderRadius: 14, fontFamily: 'Sora,sans-serif', fontSize: 16, fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 14px rgba(37,99,235,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
          >
            Go to Dashboard <Zap size={18} fill="currentColor" />
          </button>
        </div>
      </div>
    );
  }

  const styles = `
    .pricing-page { font-family: 'Sora', 'Inter', sans-serif; min-height: 100vh; background: #f8faff; color: #0f172a; padding-bottom: 80px; }
    
    /* Hero */
    .pricing-hero { background: linear-gradient(135deg, #f0f7ff 0%, #e8f4ff 100%); padding: 80px 24px 60px; text-align: center; border-bottom: 1px solid #e2e8f0; }
    .pricing-hero h1 { font-size: clamp(32px, 5vw, 52px); font-weight: 800; letter-spacing: -0.03em; color: #0f172a; margin-bottom: 16px; }
    .pricing-hero h1 span { color: #2563eb; }
    .pricing-hero p { font-size: 18px; color: #475569; max-width: 560px; margin: 0 auto 40px; line-height: 1.6; }
    
    /* Toggle */
    .billing-toggle { display: inline-flex; background: white; border-radius: 12px; padding: 4px; gap: 4px; border: 1px solid #e2e8f0; margin-bottom: 8px; }
    .toggle-btn { padding: 10px 24px; border-radius: 9px; border: none; font-family: inherit; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
    .toggle-btn.active { background: #2563eb; color: white; box-shadow: 0 2px 8px rgba(37,99,235,0.3); }
    .toggle-btn.inactive { background: transparent; color: #64748b; }
    .annual-save-badge { display: inline-block; background: #dcfce7; color: #16a34a; font-size: 12px; font-weight: 700; padding: 3px 10px; border-radius: 99px; margin-left: 8px; }
    
    /* Plans Grid */
    .plans-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; max-width: 1100px; margin: 0 auto; padding: 0 24px; }
    
    .plan-card { background: white; border-radius: 24px; padding: 36px 32px; border: 2px solid #e2e8f0; position: relative; transition: all 0.3s; display: flex; flex-direction: column; }
    .plan-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -10px rgba(0,0,0,0.12); }
    .plan-card.popular { border-color: #2563eb; box-shadow: 0 0 0 4px rgba(37,99,235,0.1); }
    .plan-card.annual-card { border-color: #059669; box-shadow: 0 0 0 4px rgba(5,150,105,0.1); }
    
    .plan-badge { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: #2563eb; color: white; font-size: 12px; font-weight: 700; padding: 6px 18px; border-radius: 99px; white-space: nowrap; display: flex; alignItems: center; gap: 6px; box-shadow: 0 4px 12px rgba(37,99,235,0.25); }
    .plan-badge.green { background: #059669; box-shadow: 0 4px 12px rgba(5,150,105,0.25); }
    
    .plan-name { font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #64748b; margin-bottom: 12px; }
    .plan-price-row { display: flex; align-items: flex-end; gap: 4px; margin-bottom: 6px; }
    .plan-currency { font-size: 22px; font-weight: 700; color: #0f172a; padding-bottom: 8px; }
    .plan-amount { font-size: 56px; font-weight: 800; color: #0f172a; letter-spacing: -0.04em; line-height: 1; }
    .plan-period { font-size: 14px; color: #64748b; padding-bottom: 10px; }
    .plan-original { font-size: 14px; color: #94a3b8; text-decoration: line-through; margin-bottom: 4px; min-height: 20px; }
    .plan-desc { color: #64748b; font-size: 14px; margin-bottom: 28px; line-height: 1.5; }
    
    .plan-cta { width: 100%; padding: 14px 20px; border-radius: 12px; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer; border: none; transition: all 0.2s; margin-bottom: 28px; }
    .plan-cta.primary { background: #2563eb; color: white; box-shadow: 0 4px 14px rgba(37,99,235,0.3); }
    .plan-cta.primary:hover { background: #1d4ed8; transform: translateY(-1px); }
    .plan-cta.green { background: #059669; color: white; box-shadow: 0 4px 14px rgba(5,150,105,0.3); }
    .plan-cta.green:hover { background: #047857; transform: translateY(-1px); }
    .plan-cta.outline { background: transparent; color: #475569; border: 1.5px solid #e2e8f0; }
    .plan-cta.outline:hover { border-color: #cbd5e1; background: #f8fafc; }
    .plan-cta:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }
    
    .features-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; flex: 1; }
    .feature-row { display: flex; align-items: center; gap: 10px; font-size: 14px; }
    .feature-row.included { color: #0f172a; }
    .feature-row.excluded { color: #94a3b8; text-decoration: line-through; }
    
    /* Coupon Section */
    .coupon-section { max-width: 560px; margin: 40px auto 0; padding: 0 24px; }
    .coupon-box { background: white; border-radius: 16px; padding: 24px 28px; border: 1px solid #e2e8f0; }
    .coupon-box h3 { font-size: 16px; font-weight: 700; margin-bottom: 4px; display: flex; align-items: center; gap: 8px; }
    .coupon-box p { font-size: 13px; color: #64748b; margin-bottom: 16px; }
    .coupon-input-row { display: flex; gap: 10px; }
    .coupon-input { flex: 1; padding: 12px 16px; border-radius: 10px; border: 1.5px solid #e2e8f0; font-family: inherit; font-size: 14px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; outline: none; transition: border-color 0.2s; }
    .coupon-input:focus { border-color: #2563eb; }
    .coupon-apply-btn { padding: 12px 20px; background: #2563eb; color: white; border: none; border-radius: 10px; font-family: inherit; font-size: 14px; font-weight: 700; cursor: pointer; transition: background 0.2s; white-space: nowrap; }
    .coupon-apply-btn:hover { background: #1d4ed8; }
    .coupon-success { margin-top: 12px; display: flex; align-items: center; justify-content: space-between; background: #ecfdf5; padding: 12px 16px; border-radius: 10px; }
    .coupon-success-text { color: #059669; font-weight: 600; font-size: 14px; display: flex; align-items: center; gap: 8px; }
    .coupon-remove { background: none; border: none; color: #ef4444; cursor: pointer; font-size: 13px; font-weight: 600; }
    .coupon-error { margin-top: 10px; color: #ef4444; font-size: 13px; }
    
    /* Guarantee */
    .guarantee-strip { display: flex; align-items: center; justify-content: center; gap: 12px; background: #fefce8; border: 1px solid #fde68a; border-radius: 12px; padding: 14px 24px; max-width: 560px; margin: 20px auto 0; font-size: 14px; font-weight: 600; color: #92400e; }
    
    /* Trusted By */
    .trusted-section { max-width: 900px; margin: 60px auto 0; padding: 0 24px; text-align: center; }
    .trusted-section h3 { font-size: 14px; color: #94a3b8; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 24px; }
    .trusted-logos { display: flex; gap: 32px; justify-content: center; flex-wrap: wrap; }
    .trusted-logo { background: white; border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px 24px; font-size: 13px; font-weight: 700; color: #64748b; }
    
    /* FAQ */
    .faq-section { max-width: 720px; margin: 70px auto 0; padding: 0 24px; }
    .faq-section h2 { font-size: 32px; font-weight: 800; text-align: center; margin-bottom: 8px; }
    .faq-section .subtitle { text-align: center; color: #64748b; font-size: 16px; margin-bottom: 40px; }
    .faq-list { display: flex; flex-direction: column; gap: 12px; }
    .faq-item { background: white; border: 1px solid #e2e8f0; border-radius: 14px; overflow: hidden; transition: all 0.2s; }
    .faq-item.open { border-color: #2563eb; box-shadow: 0 4px 14px rgba(37,99,235,0.08); }
    .faq-q { display: flex; align-items: center; justify-content: space-between; padding: 20px 24px; cursor: pointer; font-weight: 600; font-size: 16px; gap: 16px; }
    .faq-a { padding: 0 24px 20px; color: #475569; font-size: 15px; line-height: 1.7; }
    


    @media (max-width: 768px) {
      .plans-grid { grid-template-columns: 1fr; }
      .plan-amount { font-size: 44px; }
    }
  `;

  return (
    <main className="pricing-page">
      <SEO 
        title="Pricing — Crack EAMCET at ₹99/month" 
        description="Get unlimited EAMCET practice papers, mock tests, and analytics for just ₹99. Most affordable preparation platform." 
        path="/pricing" 
      />
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* Hero */}
      <section className="pricing-hero">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fef3c7', color: '#92400e', padding: '6px 12px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, marginBottom: 16 }}>
          <Flame size={14} fill="#92400e" opacity={0.8} /> Special Launch Offer — 80% Off
        </div>
        <h1>Simple, Honest <span>Pricing</span></h1>
        <p>Start free. Upgrade when you're ready to go full throttle. Cancel anytime.</p>

        {/* Toggle */}
        <div style={{ marginTop: 32 }}>
          <div className="billing-toggle">
            <button className={`toggle-btn ${billing === 'monthly' ? 'active' : 'inactive'}`} onClick={() => setBilling('monthly')}>
              Monthly
            </button>
            <button className={`toggle-btn ${billing === 'annual' ? 'active' : 'inactive'}`} onClick={() => setBilling('annual')}>
              Annual <span className="annual-save-badge">Save ₹500+</span>
            </button>
        </div>
      </div>
    </section>

      {/* Plans */}
      <section style={{ padding: '60px 0 0' }}>
        <div className="plans-grid">
          {PLANS.map((plan) => {
            const isMonthly = billing === 'monthly';
            const displayPrice = billing === 'annual' && plan.id === 'pro' ? Math.round(plan.annualPrice / 12) : plan.price;
            const discountedPrice = getDiscountedPrice(displayPrice);
            const hasDiscount = appliedCoupon && displayPrice > 0;
            const annualTotal = billing === 'annual' && plan.id === 'pro' ? getDiscountedPrice(plan.annualPrice) : null;

            return (
              <div
                key={plan.id}
                className={`plan-card ${plan.id === 'pro' ? 'popular' : ''} ${plan.id === 'annual' ? 'annual-card' : ''}`}
                style={{ borderColor: plan.borderColor }}
              >
                {plan.badge && (
                  <div className={`plan-badge ${plan.id === 'annual' ? 'green' : ''}`}>
                    {plan.badgeIcon === 'flame' && <Flame size={14} fill="white" />}
                    {plan.badgeIcon === 'crown' && <Crown size={14} fill="white" />}
                    {plan.badge}
                  </div>
                )}

                <div className="plan-name" style={{ color: plan.color }}>{plan.name}</div>

                <div className="plan-price-row">
                  {plan.price > 0 && <span className="plan-currency">₹</span>}
                  <span className="plan-amount" style={{ color: plan.color }}>
                    {plan.price === 0 ? 'Free' : discountedPrice}
                  </span>
                  {plan.price > 0 && <span className="plan-period">/mo</span>}
                </div>

                <div className="plan-original">
                  {hasDiscount && displayPrice > 0 ? (
                    <span style={{ textDecoration: 'line-through', opacity: 0.6, marginRight: 8 }}>₹{displayPrice}</span>
                  ) : null}
                  {!hasDiscount && plan.price > 0 ? (
                    <span style={{ textDecoration: 'line-through', opacity: 0.6, marginRight: 8 }}>
                      ₹{billing === 'annual' && plan.originalAnnualPrice ? Math.round(plan.originalAnnualPrice / 12) : plan.originalPrice}
                    </span>
                  ) : null}
                  {billing === 'annual' && (plan.id === 'pro' || plan.id === 'annual') && !hasDiscount ? `Billed ₹${plan.annualPrice}/yr` : ''}
                  {hasDiscount && displayPrice > 0 ? `Billed ${billing === 'annual' ? '₹' + annualTotal + '/yr' : 'monthly'}` : ''}
                </div>

                <p className="plan-desc">{plan.description}</p>

                <button
                  className={`plan-cta ${plan.id === 'free' ? 'outline' : plan.id === 'annual' ? 'green' : 'primary'}`}
                  onClick={() => handleCta(plan.id, plan.ctaAction)}
                  disabled={payLoading === plan.ctaAction}
                >
                  {payLoading === plan.ctaAction ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
                      <span style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid white', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.8s linear infinite' }} />
                      Opening Razorpay...
                    </span>
                  ) : plan.cta}
                </button>

                <ul className="features-list">
                  {plan.features.map((feat, i) => (
                    <li key={i} className={`feature-row ${feat.included ? 'included' : 'excluded'}`}>
                      {feat.included
                        ? <CheckCircle2 size={16} color={plan.color} style={{ flexShrink: 0 }} />
                        : <X size={16} color="#cbd5e1" style={{ flexShrink: 0 }} />
                      }
                      {feat.text}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Coupon Code Box */}
        <div className="coupon-section">
          <div className="coupon-box">
            <h3><Tag size={16} color="#2563eb" /> Have a coupon code?</h3>
            <div className="coupon-input-row" style={{ marginTop: 16 }}>
              <input
                className="coupon-input"
                placeholder="ENTER CODE"
                value={couponInput}
                onChange={(e) => { setCouponInput(e.target.value); setCouponError(''); }}
                onKeyDown={(e) => e.key === 'Enter' && applyCoupon()}
              />
              <button className="coupon-apply-btn" onClick={applyCoupon}>Apply</button>
            </div>
            
            <button 
              onClick={() => setShowOffers(!showOffers)}
              style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', color: '#64748b', fontSize: 13, fontWeight: 600, cursor: 'pointer', marginTop: 16, padding: 0 }}
            >
              {showOffers ? <ChevronUp size={14} /> : <ChevronDown size={14} />} 
              {showOffers ? "Hide Available Offers" : "View Available Offers"}
            </button>

            {showOffers && (
              <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8, animation: 'slideInUp 0.3s ease out' }}>
                {Object.keys(VALID_COUPONS).map((code) => (
                  <div key={code} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: 10 }}>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
                        <Tag size={12} color="#2563eb"/> {code}
                      </div>
                      <div style={{ color: '#64748b', fontSize: 12, marginTop: 2 }}>{VALID_COUPONS[code].label}</div>
                    </div>
                    <button 
                      onClick={() => applySpecificCoupon(code)}
                      style={{ padding: '6px 12px', background: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe', borderRadius: 6, fontSize: 12, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}
                      onMouseOver={(e) => e.currentTarget.style.background = '#dbeafe'}
                      onMouseOut={(e) => e.currentTarget.style.background = '#eff6ff'}
                    >
                      Apply
                    </button>
                  </div>
                ))}
              </div>
            )}

            {appliedCoupon && (
              <div className="coupon-success" style={{ marginTop: 16 }}>
                <span className="coupon-success-text"><CheckCircle2 size={16} /> {appliedCoupon.code} — {appliedCoupon.label} applied!</span>
                <button className="coupon-remove" onClick={removeCoupon}>Remove</button>
              </div>
            )}
            {couponError && <div className="coupon-error">⚠ {couponError}</div>}
          </div>
        </div>

        {/* Trusted By */}
        <div className="trusted-section">
          <h3>Used by students from</h3>
          <div className="trusted-logos">
            {['JNTUH', 'Osmania University', 'VNR VJIET', 'CBIT', 'GRIET', 'BVRIT', 'G Narayanamma', 'Gokaraju Rangaraju'].map((name) => (
              <div key={name} className="trusted-logo">{name}</div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <p className="subtitle">Everything you need to know about EAMCET Pro pricing.</p>
          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}
                  {openFaq === i ? <ChevronUp size={20} color="#2563eb" /> : <ChevronDown size={20} color="#64748b" />}
                </div>
                {openFaq === i && <div className="faq-a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
