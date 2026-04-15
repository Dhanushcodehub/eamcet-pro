import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, CheckCircle2, Zap, Lock, Gift, Shield, ArrowRight, Sparkles } from 'lucide-react';

export default function UpgradePrompt({ isOpen, onClose, feature = 'this feature' }) {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const proFeatures = [
    { text: 'Unlimited practice papers', icon: <Zap size={14} /> },
    { text: 'Full 160-question mock tests', icon: <CheckCircle2 size={14} /> },
    { text: 'Deep analytics & performance graphs', icon: <CheckCircle2 size={14} /> },
    { text: 'Rank & college predictor (unlimited)', icon: <CheckCircle2 size={14} /> },
    { text: 'Global leaderboard access', icon: <CheckCircle2 size={14} /> },
    { text: 'Refer & Earn rewards', icon: <Gift size={14} /> },
  ];

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(10,15,30,0.65)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
      }}
      onClick={onClose}
    >
      <style>{`
        @keyframes upgradePopIn {
          from { opacity: 0; transform: scale(0.88) translateY(24px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes upgradeLockPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37,99,235,0.4); }
          50%       { box-shadow: 0 0 0 14px rgba(37,99,235,0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .upgrade-cta-btn {
          width: 100%; padding: 16px 20px;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white; border: none; border-radius: 14px;
          font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 700;
          cursor: pointer; transition: all 0.25s;
          box-shadow: 0 8px 24px rgba(37,99,235,0.35);
          display: flex; align-items: center; justify-content: center; gap: 10px;
        }
        .upgrade-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(37,99,235,0.45);
          background: linear-gradient(135deg, #1d4ed8, #1e40af);
        }
        .upgrade-refer-btn {
          width: 100%; padding: 14px 20px;
          background: #f0f7ff; color: #2563eb;
          border: 1.5px solid #bfdbfe; border-radius: 14px;
          font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 700;
          cursor: pointer; transition: all 0.2s;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .upgrade-refer-btn:hover {
          background: #dbeafe; border-color: #93c5fd;
          transform: translateY(-1px);
        }
        .upgrade-feature-item {
          display: flex; align-items: center; gap: 12px;
          font-size: 14px; font-weight: 500; color: #0f172a;
          font-family: 'Sora', sans-serif;
          padding: 6px 0;
        }
      `}</style>

      <div
        style={{
          background: 'white', borderRadius: 28, maxWidth: 460, width: '100%',
          boxShadow: '0 40px 80px -16px rgba(0,0,0,0.4)',
          position: 'relative', overflow: 'hidden',
          animation: 'upgradePopIn .32s cubic-bezier(.16,1,.3,1)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Gradient header */}
        <div style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%)',
          padding: '36px 36px 32px',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Decorative circles */}
          <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -30, left: -20, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 16, right: 16,
              background: 'rgba(255,255,255,0.15)', border: 'none',
              borderRadius: '50%', width: 32, height: 32,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'white', transition: 'all 0.2s',
            }}
          >
            <X size={16} />
          </button>

          {/* Lock icon */}
          <div style={{
            width: 60, height: 60, borderRadius: 18,
            background: 'rgba(255,255,255,0.15)',
            border: '1.5px solid rgba(255,255,255,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 20,
            animation: 'upgradeLockPulse 2.5s ease infinite',
          }}>
            <Lock size={26} color="white" />
          </div>

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: 8, padding: '4px 12px',
            fontSize: 11, fontWeight: 700, marginBottom: 12,
            fontFamily: 'Sora, sans-serif', letterSpacing: '0.06em',
          }}>
            <Zap size={11} fill="currentColor" /> PRO FEATURE
          </div>

          <h2 style={{
            fontSize: 22, fontWeight: 800, color: 'white',
            marginBottom: 8, fontFamily: 'Sora, sans-serif', lineHeight: 1.3, margin: '0 0 8px',
          }}>
            Unlock {feature}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
            Upgrade to Pro to access this and everything below.
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: '28px 36px 36px' }}>
          {/* Features list */}
          <div style={{ marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {proFeatures.map((f, i) => (
              <div key={i} className="upgrade-feature-item">
                <div style={{
                  width: 26, height: 26, borderRadius: 8, flexShrink: 0,
                  background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#2563eb',
                }}>
                  {f.icon}
                </div>
                {f.text}
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <button
              className="upgrade-cta-btn"
              onClick={() => { onClose(); navigate('/pricing'); }}
            >
              <Sparkles size={17} />
              Upgrade to Pro — ₹199/month
              <ArrowRight size={16} />
            </button>

            <button
              className="upgrade-refer-btn"
              onClick={() => { onClose(); navigate('/refer'); }}
            >
              <Gift size={16} />
              Earn Free Pro by Referring Friends
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'none', border: 'none', color: '#94a3b8',
                fontSize: 13, cursor: 'pointer', fontFamily: 'Sora, sans-serif',
                fontWeight: 500, padding: '8px 0',
              }}
            >
              Maybe later
            </button>
          </div>

          {/* Guarantee */}
          <div style={{
            marginTop: 16, background: '#f8fafc', borderRadius: 12,
            padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10,
            fontSize: 12, color: '#64748b', border: '1px solid #e2e8f0',
          }}>
            <div style={{ color: '#059669', flexShrink: 0 }}>
              <Shield size={16} />
            </div>
            <span>
              <strong style={{ color: '#0f172a' }}>7-day money-back guarantee.</strong>{' '}
              Cancel anytime. No questions asked.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
