import PolicyCard from './components/PolicyCard';
import CheckupCard from './components/CheckupCard';
import './App.css';

function App() {
  return (
    <div className="phone-frame">
      {/* Status Bar */}
      <div className="status-bar">
        <span>9:41</span>
        <div className="status-bar-right">
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>

      {/* Nav Header */}
      <div className="nav-header">
        <h1>Insurance</h1>
        <div className="nav-tabs">
          <div className="nav-tab">Overview</div>
          <div className="nav-tab active">Monitor</div>
          <div className="nav-tab">Shop</div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="content-area">
        {/* AI Check-up Card — placed prominently above the policy */}
        <CheckupCard />

        {/* Connected Policy Card */}
        <PolicyCard />
      </div>

      {/* Bottom Tab Bar */}
      <div className="bottom-tabs">
        <div className="bottom-tab">
          <span className="bottom-tab-icon">📊</span>
          <span>Credit</span>
        </div>
        <div className="bottom-tab">
          <span className="bottom-tab-icon">💳</span>
          <span>Cards</span>
        </div>
        <div className="bottom-tab">
          <span className="bottom-tab-icon">🏦</span>
          <span>Loans</span>
        </div>
        <div className="bottom-tab active">
          <span className="bottom-tab-icon">🛡️</span>
          <span>Insurance</span>
        </div>
        <div className="bottom-tab">
          <span className="bottom-tab-icon">⚙️</span>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}

export default App;
