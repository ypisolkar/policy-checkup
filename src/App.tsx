import PolicyCard from './components/PolicyCard';
import CheckupCard from './components/CheckupCard';
import './App.css';

const basePath = import.meta.env.BASE_URL;

function App() {
  return (
    <div className="phone-frame">
      {/* iOS Status Bar */}
      <div className="status-bar">
        <span className="status-bar-time">9:41</span>
        <div className="status-bar-icons">
          <span>&#9679;&#9679;&#9679;&#9679;</span>
          <span>&#8226;</span>
          <span>&#9632;</span>
        </div>
      </div>

      {/* KDS Header — Page title */}
      <div className="kds-header">
        <h1 className="kds-page-title">Insurance</h1>
      </div>

      {/* KPL Tabs */}
      <div className="kpl-tabs">
        <div className="kpl-tab active">
          <span className="kpl-tab-label">Insurance</span>
          <div className="kpl-tab-indicator" />
        </div>
        <div className="kpl-tab">
          <span className="kpl-tab-label">Find a policy</span>
          <div className="kpl-tab-indicator" />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="content-area">
        {/* Coverage Section */}
        <div className="kds-section">
          <div className="kds-section-header">
            <h2 className="kds-section-title">Coverage</h2>
          </div>
          <PolicyCard />
        </div>

        {/* Policy Check-up Section — injected by Intuit AI */}
        <div className="kds-divider-section" />
        <div className="kds-section" style={{ paddingBottom: 32 }}>
          <div className="kds-section-header">
            <h2 className="kds-section-title">Policy check-up</h2>
          </div>
          <CheckupCard />
        </div>

        {/* Ask about insurance Section */}
        <div className="kds-divider-section" />
        <div style={{ padding: '16px 16px 0' }}>
          <h2 className="kds-section-title" style={{ marginBottom: 16 }}>
            Ask about insurance
          </h2>
        </div>
        <div style={{ padding: '16px 16px 32px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="fa-text-input">
            <img src={`${basePath}assets/intuit-assist-logo.svg`} alt="" className="fa-brand-art" />
            <span className="fa-placeholder">Ask a question</span>
            <button className="fa-send-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div className="intuit-assist-chip">
              <span className="intuit-assist-chip-text">Assess my current policy</span>
            </div>
            <div className="intuit-assist-chip">
              <span className="intuit-assist-chip-text">Summarize changes to my insurance rate factors in the last 3 months</span>
            </div>
            <div className="intuit-assist-chip">
              <span className="intuit-assist-chip-text">What kind of coverage should I get for my Toyota 4Runner</span>
            </div>
          </div>
        </div>

        <div className="kds-divider-section" />
      </div>

      {/* KDS Bottom Tab Bar */}
      <div className="kds-bottom-tab-bar">
        <div className="kds-bottom-tab-bar-divider" />
        <div className="kds-bottom-tab-bar-items">
          <button className="kds-bottom-tab-item">
            <img src={`${basePath}assets/tab-for-you.svg`} alt="" className="kds-bottom-tab-icon" />
            <span className="kds-bottom-tab-label">For you</span>
          </button>
          <button className="kds-bottom-tab-item">
            <img src={`${basePath}assets/tab-cards.svg`} alt="" className="kds-bottom-tab-icon" />
            <span className="kds-bottom-tab-label">Cards</span>
          </button>
          <button className="kds-bottom-tab-item">
            <img src={`${basePath}assets/tab-loans.svg`} alt="" className="kds-bottom-tab-icon" />
            <span className="kds-bottom-tab-label">Loans</span>
          </button>
          <div className="kds-bottom-tab-item active">
            <img src={`${basePath}assets/tab-insurance.svg`} alt="" className="kds-bottom-tab-icon" />
            <span className="kds-bottom-tab-label">Insurance</span>
          </div>
          <button className="kds-bottom-tab-item">
            <img src={`${basePath}assets/tab-money.svg`} alt="" className="kds-bottom-tab-icon" />
            <span className="kds-bottom-tab-label">Money</span>
          </button>
        </div>
        <div className="kds-home-indicator">
          <div className="kds-home-indicator-bar" />
        </div>
      </div>
    </div>
  );
}

export default App;
