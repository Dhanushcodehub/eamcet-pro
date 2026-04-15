import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Copy, Gift, Users, CheckCircle2, Twitter, MessageCircle, ChevronRight, Zap, Target, ArrowRight, BookOpen, Crown, Star } from 'lucide-react';
import { db } from '../lib/firebase'; 

const REWARDS = [
  { referrals: 1, reward: '1 Week Pro Free', icon: <Star size={24} color="#f59e0b" />, color: '#f59e0b', bg: '#fef3c7', border: '#fde68a' },
  { referrals: 3, reward: '1 Month Pro Free', icon: <Zap size={24} color="#2563eb" />, color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe' },
  { referrals: 5, reward: '3 Months Pro Free', icon: <Target size={24} color="#ef4444" />, color: '#ef4444', bg: '#fef2f2', border: '#fecaca' },
  { referrals: 10, reward: '6 Months + Badge', icon: <Crown size={24} color="#7c3aed" />, color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe' },
];

export default function ReferPage({ user, plan }) {
  const referralCode = user ? `EAMCET-${user.uid?.slice(0, 8).toUpperCase()}` : 'EAMCET-XXXXXXXX';
  const referralLink = `${window.location.origin}/login?ref=${referralCode}`;
  const [copied, setCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);
  
  const [stats, setStats] = useState({ referred: 0, pending: 0, earnedWeeks: 0 });

  useEffect(() => {
    if (!user) return;
    async function loadStats() {
      try {
        const refs = await db.getReferrals(referralCode);
        const count = refs.length;
        
        let earned = 0;
        if (count >= 10) earned = 26; // 6 months = 26 weeks
        else if (count >= 5) earned = 13; // 3 months = 13 weeks
        else if (count >= 3) earned = 4; // 1 month = 4 weeks
        else if (count >= 1) earned = 1;
        
        setStats({ referred: count, pending: 0, earnedWeeks: earned });
      } catch (err) {
        console.error("Failed to load referrals:", err);
      }
    }
    loadStats();
  }, [user, referralCode]);

  const copyLink = async () => {
    await navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const copyCode = async () => {
    await navigator.clipboard.writeText(referralCode);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2500);
  };

  const shareWhatsApp = () => {
    const msg = `Prepare for EAMCET with EAMCET Pro! 🚀\n\nJoin using my link and we both get free Pro access:\n${referralLink}\n\nCode: *${referralCode}*`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const shareTwitter = () => {
    const tweet = `Cracking EAMCET with EAMCET Pro! 📚\n\nJoin using my link and unlock premium access: ${referralLink}`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`, '_blank');
  };

  const referredCount = stats.referred;
  const nextMilestone = REWARDS.find(r => r.referrals > referredCount);
  const progressPercent = nextMilestone ? Math.round((referredCount / nextMilestone.referrals) * 100) : 100;

  const s = `
    .refer-page{font-family:'Sora',sans-serif;min-height:100vh;background:#f8faff;color:#0f172a;padding-bottom:80px}
    .refer-hero{background:linear-gradient(135deg,#0a192f,#112240,#1e3a8a);padding:80px 24px 120px;text-align:center;position:relative;overflow:hidden}
    .refer-hero::before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:radial-gradient(circle at 50% 0%,rgba(37,99,235,0.4),transparent 70%);pointer-events:none}
    .refer-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(37,99,235,0.25);color:#60a5fa;font-size:13px;font-weight:700;padding:6px 16px;border-radius:99px;margin-bottom:24px;border:1px solid rgba(59,130,246,0.3)}
    .refer-hero h1{font-size:clamp(32px,5vw,56px);font-weight:800;color:white;margin-bottom:16px;position:relative;z-index:1;letter-spacing:-0.04em}
    .refer-hero p{font-size:18px;color:#94a3b8;max-width:560px;margin:0 auto 48px;line-height:1.6;position:relative;z-index:1}
    .refer-card{max-width:660px;margin:0 auto;background:white;border-radius:24px;padding:40px;box-shadow:0 30px 60px -15px rgba(0,0,0,0.3);position:relative;z-index:2;border:1px solid rgba(255,255,255,0.1)}
    .refer-card-label{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#64748b;margin-bottom:12px;display:flex;align-items:center;gap:6px}
    .link-box{display:flex;gap:12px;background:#f8fafc;border-radius:14px;border:1.5px solid #e2e8f0;padding:6px 6px 6px 20px;align-items:center;margin-bottom:20px;transition:border-color 0.2s}
    .link-box:hover{border-color:#cbd5e1}
    .link-text{flex:1;font-size:14px;color:#0f172a;font-weight:600;word-break:break-all}
    .copy-btn{flex-shrink:0;display:flex;align-items:center;gap:6px;padding:12px 20px;background:#2563eb;color:white;border:none;border-radius:10px;font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;transition:all .2s;white-space:nowrap;box-shadow:0 4px 12px rgba(37,99,235,0.2)}
    .copy-btn:hover{background:#1d4ed8;transform:translateY(-1px);box-shadow:0 6px 16px rgba(37,99,235,0.3)}
    .copy-btn.success{background:#10b981;box-shadow:0 4px 12px rgba(16,185,129,0.2)}
    .code-box{display:flex;align-items:center;justify-content:space-between;background:linear-gradient(90deg,#eff6ff,#f8fafc);border-radius:14px;border:1.5px dashed #93c5fd;padding:16px 20px}
    .code-text{font-size:20px;font-weight:800;color:#1e40af;letter-spacing:.1em;font-family:'Space Mono',monospace}
    .icon-btn{display:flex;align-items:center;gap:6px;background:white;border:1px solid #bfdbfe;color:#2563eb;font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;padding:8px 14px;border-radius:9px;transition:all .2s;box-shadow:0 2px 6px rgba(37,99,235,0.05)}
    .icon-btn:hover{background:#eff6ff;border-color:#93c5fd}
    .share-row{display:flex;gap:14px;margin-top:24px}
    .share-btn{flex:1;display:flex;align-items:center;justify-content:center;gap:10px;padding:14px;border-radius:14px;border:1.5px solid #e2e8f0;background:white;font-family:inherit;font-size:14px;font-weight:700;cursor:pointer;transition:all .2s;color:#334155}
    .share-btn:hover{transform:translateY(-1px);box-shadow:0 8px 20px rgba(0,0,0,0.04)}
    .share-btn.wa{color:#16a34a;border-color:#bbf7d0;background:#f0fdf4}
    .share-btn.wa:hover{background:#dcfce7;border-color:#86efac}
    .share-btn.tw{color:#0ea5e9;border-color:#bae6fd;background:#f0f9ff}
    .share-btn.tw:hover{background:#e0f2fe;border-color:#7dd3fc}
    
    .stats-bar{display:flex;max-width:860px;margin:-50px auto 0;padding:0 24px;position:relative;z-index:3}
    .sbox{flex:1;background:white;padding:30px 24px;text-align:center;border:1px solid #e2e8f0;display:flex;flex-direction:column;align-items:center}
    .sbox:first-child{border-radius:24px 0 0 24px;border-right:none}
    .sbox:nth-child(2){border-right:none}
    .sbox:last-child{border-radius:0 24px 24px 0}
    .sbox .icon{width:48px;height:48px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:16px}
    .sbox .num{font-size:36px;font-weight:800;color:#0f172a;letter-spacing:-.03em;line-height:1}
    .sbox .lbl{font-size:13px;color:#64748b;font-weight:600;margin-top:8px;text-transform:uppercase;letter-spacing:0.05em}
    
    .section-wrap{max-width:960px;margin:80px auto 0;padding:0 24px}
    .section-wrap h2{font-size:32px;font-weight:800;text-align:center;margin-bottom:12px;color:#0f172a}
    .section-wrap .sub{text-align:center;color:#64748b;font-size:16px;margin-bottom:50px}
    
    .how-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;position:relative}
    .how-step{background:white;border:1px solid #e2e8f0;border-radius:24px;padding:32px 24px;text-align:center;transition:transform 0.2s;box-shadow:0 10px 30px -10px rgba(0,0,0,0.02)}
    .how-step:hover{transform:translateY(-4px);box-shadow:0 20px 40px -10px rgba(0,0,0,0.06);border-color:#cbd5e1}
    .step-icon{width:64px;height:64px;border-radius:20px;display:flex;align-items:center;justify-content:center;margin:0 auto 20px}
    .step-title{font-weight:800;font-size:18px;margin-bottom:12px;color:#0f172a}
    .step-desc{font-size:14px;color:#64748b;line-height:1.6}
    
    .rewards-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px}
    .reward-card{border-radius:24px;padding:32px 24px;text-align:center;transition:all .2s;border:2px solid transparent}
    .reward-card:hover{transform:translateY(-6px);box-shadow:0 25px 50px -12px rgba(0,0,0,0.1)}
    .reward-icon-wrap{width:72px;height:72px;background:white;border-radius:20px;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;box-shadow:0 10px 25px -5px rgba(0,0,0,0.05)}
    .reward-title{font-weight:800;font-size:18px;margin-bottom:8px}
    .reward-num{font-size:14px;font-weight:600;opacity:.8}
    
    .progress-wrap{max-width:860px;margin:60px auto 0;padding:0 24px}
    .progress-inner{background:white;border:1px solid #e2e8f0;border-radius:24px;padding:36px;box-shadow:0 10px 40px -10px rgba(0,0,0,0.03)}
    .progress-inner h3{font-size:20px;font-weight:800;margin-bottom:8px;color:#0f172a;display:flex;align-items:center;gap:10px}
    .progress-lbl{font-size:15px;color:#64748b;margin-bottom:20px}
    .bar-bg{background:#f1f5f9;height:16px;border-radius:99px;overflow:hidden;box-shadow:inset 0 2px 4px rgba(0,0,0,0.05)}
    .bar-fill{background:linear-gradient(90deg,#2563eb,#3b82f6);height:100%;border-radius:99px;transition:width 1s cubic-bezier(0.4,0,0.2,1);box-shadow:0 0 10px rgba(37,99,235,0.4)}
    .bar-marks{display:flex;justify-content:space-between;margin-top:12px}
    .mark{font-size:12px;color:#94a3b8;font-weight:700;text-transform:uppercase;letter-spacing:0.05em}.mark.on{color:#2563eb}
    
    .tos{max-width:860px;margin:60px auto 0;padding:0 24px;text-align:center;font-size:13px;color:#94a3b8;line-height:1.6}
    
    @media(max-width:860px){
      .how-steps{grid-template-columns:1fr}
      .stats-bar{flex-direction:column}
      .sbox:first-child{border-radius:24px 24px 0 0;border-right:1px solid #e2e8f0;border-bottom:none}
      .sbox:nth-child(2){border-bottom:none;border-right:1px solid #e2e8f0}
      .sbox:last-child{border-radius:0 0 24px 24px}
    }
    @media(max-width:640px){
      .refer-hero{padding:60px 20px 80px}
      .refer-card{padding:24px;border-radius:20px}
      .share-row{flex-direction:column}
      .link-box{flex-direction:column;align-items:stretch;padding:12px}
      .copy-btn{justify-content:center}
      .code-box{flex-direction:column;gap:12px;align-items:flex-start}
      .icon-btn{width:100%;justify-content:center}
    }
  `;

  return (
    <div className="refer-page">
      <Helmet>
        <title>Refer & Earn — EAMCET Pro</title>
        <meta name="description" content="Refer friends to EAMCET Pro and earn free Pro subscription weeks." />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: s }} />

      <div className="refer-hero">
        <div className="refer-badge"><Gift size={16} /> Refer &amp; Earn Program</div>
        <h1>Share EAMCET Pro,<br />Unlock Premium Free.</h1>
        <p>Give your friends the best preparation tool. When they join using your link, you both get free Pro access automatically.</p>

        <div className="refer-card">
          <div className="refer-card-label"><Users size={14} color="#64748b" /> Your Personal Link</div>
          <div className="link-box">
            <span className="link-text">{referralLink}</span>
            <button className={`copy-btn ${copied ? 'success' : ''}`} onClick={copyLink}>
              {copied ? <><CheckCircle2 size={16} /> Copied</> : <><Copy size={16} /> Copy Link</>}
            </button>
          </div>
          <div className="refer-card-label" style={{ marginTop: 24 }}><Gift size={14} color="#64748b" /> Your Referral Code</div>
          <div className="code-box">
            <span className="code-text">{referralCode}</span>
            <button className="icon-btn" onClick={copyCode}><Copy size={14} /> {codeCopied ? 'Copied' : 'Copy Code'}</button>
          </div>
          <div className="share-row">
            <button className="share-btn wa" onClick={shareWhatsApp}><MessageCircle size={20} /> WhatsApp</button>
            <button className="share-btn tw" onClick={shareTwitter}><Twitter size={20} /> Twitter</button>
          </div>
        </div>
      </div>

      <div className="stats-bar">
        <div className="sbox">
          <div className="icon" style={{ background: '#eff6ff', color: '#2563eb' }}><Users size={24} /></div>
          <div className="num" style={{ color: '#2563eb' }}>{stats.referred}</div>
          <div className="lbl">Friends Joined</div>
        </div>
        <div className="sbox">
          <div className="icon" style={{ background: '#f8fafc', color: '#64748b' }}><ArrowRight size={24} /></div>
          <div className="num" style={{ color: '#64748b' }}>{stats.pending}</div>
          <div className="lbl">Pending Signups</div>
        </div>
        <div className="sbox">
          <div className="icon" style={{ background: '#fef3c7', color: '#d97706' }}><Gift size={24} /></div>
          <div className="num" style={{ color: '#d97706' }}>{stats.earnedWeeks} wk</div>
          <div className="lbl">Pro Time Earned</div>
        </div>
      </div>

      {nextMilestone && (
        <div className="progress-wrap">
          <div className="progress-inner">
            <h3><Target size={24} color="#2563eb" /> Unlock your next reward</h3>
            <p className="progress-lbl">Refer <strong>{nextMilestone.referrals - referredCount} more friend{nextMilestone.referrals - referredCount > 1 ? 's' : ''}</strong> to unlock <strong>{nextMilestone.reward}</strong></p>
            <div className="bar-bg"><div className="bar-fill" style={{ width: `${progressPercent}%` }} /></div>
            <div className="bar-marks">
              <span className="mark on">{referredCount} joined</span>
              <span className="mark">{nextMilestone.referrals} needed</span>
            </div>
          </div>
        </div>
      )}

      <div className="section-wrap">
        <h2>How It Works</h2>
        <p className="sub">Three simple steps to earn free Pro access for you and your friends.</p>
        <div className="how-steps">
          {[
            { icon: <Copy size={28} color="#2563eb" />, bg: '#eff6ff', title: '1. Share Link', desc: 'Copy your unique referral link or code and share it with classmates.' },
            { icon: <Users size={28} color="#10b981" />, bg: '#ecfdf5', title: '2. Friend Signs Up', desc: 'Your friend creates an account using your referral link or enters your code.' },
            { icon: <Gift size={28} color="#f59e0b" />, bg: '#fef3c7', title: '3. Both Rewarded', desc: 'You earn free Pro weeks and your friend gets a welcome discount instantly.' },
          ].map((step, i) => (
            <div key={i} className="how-step">
              <div className="step-icon" style={{ background: step.bg }}>{step.icon}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-wrap">
        <h2>Reward Milestones</h2>
        <p className="sub">Stack up referrals to unlock long-term Pro access and exclusive badges.</p>
        <div className="rewards-grid">
          {REWARDS.map((r) => {
            const reached = referredCount >= r.referrals;
            return (
              <div key={r.referrals} className="reward-card" style={{ background: r.bg, borderColor: r.border, opacity: reached ? 1 : (referredCount > 0 ? 0.8 : 0.6) }}>
                <div className="reward-icon-wrap" style={{ color: r.color }}>{r.icon}</div>
                <div className="reward-title" style={{ color: r.color }}>{r.reward}</div>
                <div className="reward-num" style={{ color: r.color }}>{r.referrals} Referral{r.referrals > 1 ? 's' : ''}</div>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: reached ? r.color : 'white', border: `2px solid ${reached ? r.color : r.border}`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '20px auto 0' }}>
                  {reached && <CheckCircle2 size={16} color="white" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p className="tos">
        * Rewards are credited after the referred friend signs up and verifies their email. Free trial sign-ups alone do not count. Subscriptions are automatically extended. Non-transferable.
      </p>
    </div>
  );
}
