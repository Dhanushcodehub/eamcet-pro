export default function AuthPopup({ isOpen, onClose, onLogin }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.4)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '20px'
    }}>
      <style>{`
        @keyframes popupFadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
      <div style={{
        background: '#ffffff',
        borderRadius: '24px',
        padding: '32px',
        maxWidth: '400px',
        width: '100%',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        animation: 'popupFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        textAlign: 'center',
        fontFamily: "'Sora', sans-serif"
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'rgba(37, 99, 235, 0.1)',
          color: '#2563eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px',
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
          </svg>
        </div>
        
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#0f172a', marginBottom: '12px' }}>
          Sign In Required
        </h2>
        
        <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.6', marginBottom: '32px' }}>
          Create an account or sign in to save your progress, take full mock exams, and access personalized analytics.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button 
            onClick={onLogin}
            style={{
              padding: '14px',
              borderRadius: '12px',
              border: 'none',
              background: '#2563eb',
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: '600',
              fontFamily: 'inherit',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            onMouseOver={e => e.currentTarget.style.background = '#1d4ed8'}
            onMouseOut={e => e.currentTarget.style.background = '#2563eb'}
          >
            Sign In / Sign Up
          </button>
          
          <button 
            onClick={onClose}
            style={{
              padding: '14px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              background: '#ffffff',
              color: '#475569',
              fontSize: '15px',
              fontWeight: '600',
              fontFamily: 'inherit',
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseOver={e => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.color = '#0f172a'; }}
            onMouseOut={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#475569'; }}
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
}
