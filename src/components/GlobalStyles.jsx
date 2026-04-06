const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{
    __html: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@400;600;700&display=swap');
    
    .auth-container { 
      min-height: 100vh; background: #f0f7ff;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Inter', 'Sora', sans-serif;
      position: relative; overflow: hidden;
      width: 100%; 
    }
    
    .auth-card { 
      width: 460px; max-width: 92%; padding: 48px 40px; 
      background: #ffffff; border: 1px solid #e2e8f0; 
      border-radius: 20px; position: relative; z-index: 10;
      box-shadow: 0 20px 50px rgba(37, 99, 235, 0.08);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-sizing: border-box;
    }

    .auth-input { transition: all 0.2s; border-radius: 12px; }
    .auth-input:focus { border-color: #2563eb !important; box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1); outline: none; background: #ffffff !important; }
    .auth-input::placeholder { color: #94a3b8; font-weight: 400; }

    .auth-tab-btn { flex: 1; padding: 12px 0; border: none; border-radius: 10px; cursor: pointer; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; transition: all 0.2s ease; }
    .auth-tab-btn.active { background: #2563eb!important; color: #ffffff!important; }
    .auth-tab-btn:not(.active) { background: transparent; color: #475569; }
    .auth-tab-btn:not(.active):hover { background: #f0f4f8; }

    .btn-primary { 
      width: 100%; padding: 15px; 
      background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); 
      border: none; border-radius: 99px; color: #ffffff; 
      font-size: 15px; font-weight: 700; cursor: pointer; 
      font-family: 'Inter', sans-serif; transition: all 0.2s; 
      margin-bottom: 20px; box-shadow: 0 8px 20px rgba(37, 99, 235, 0.2); 
    }
    .btn-primary:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 12px 24px rgba(37, 99, 235, 0.25); opacity: 0.95; }
    .btn-primary:active:not(:disabled) { transform: translateY(0); }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

    .auth-google-btn { 
      width: 100%; padding: 14px; background: #ffffff; 
      border: 1.5px solid #e2e8f0; border-radius: 99px; 
      color: #171c1f; font-size: 14px; font-weight: 600; 
      cursor: pointer; font-family: 'Inter', sans-serif; 
      display: flex; align-items: center; justify-content: center; gap: 10px;
      transition: all 0.2s;
    }
    .auth-google-btn:hover:not(:disabled) { background: #f8faff; border-color: #cbd5e1; transform: translateY(-1px); }

    @media screen and (max-width: 640px) {
      .auth-container { align-items: flex-start !important; padding: 0 !important; overflow-y: auto !important; width: 100% !important; min-height: 100vh !important; }
      .auth-card { 
        max-width: none !important; width: 100% !important; min-height: 100vh !important; 
        border-radius: 0 !important; border: none !important; padding: 60px 24px 40px !important; 
        display: flex !important; flex-direction: column !important; justify-content: flex-start !important;
        box-shadow: none !important; margin: 0 !important;
      }
      .auth-decorative { display: none !important; }
    }
  `}} />
);

export default GlobalStyles;
