import { mockPolicy } from '../data/mockPolicy';
import './PolicyCard.css';

export default function PolicyCard() {
  const p = mockPolicy;
  return (
    <div className="ck-card policy-card">
      <div className="policy-card-header">
        <div className="carrier-logo" style={{ background: p.carrier.color }}>
          {p.carrier.logoInitials}
        </div>
        <div className="carrier-info">
          <div className="carrier-name">{p.carrier.name}</div>
          <div className="policy-number">{p.policyNumber}</div>
        </div>
        <div className="premium-display">
          <span className="premium-amount">${p.premium.amount}</span>
          <span className="premium-freq">/{p.premium.frequency}</span>
        </div>
      </div>

      <div className="policy-divider" />

      <div className="policy-details">
        <div className="policy-detail-item">
          <span className="detail-label">Coverage</span>
          <span className="detail-value">{p.coverageLevel}</span>
        </div>
        <div className="policy-detail-item">
          <span className="detail-label">Renewal</span>
          <span className="detail-value">{p.renewal.date}</span>
        </div>
        <div className="policy-detail-item">
          <span className="detail-label">Vehicles</span>
          <span className="detail-value">
            {p.vehicles.map((v) => `${v.year} ${v.make} ${v.model}`).join(', ')}
          </span>
        </div>
        <div className="policy-detail-item">
          <span className="detail-label">Drivers</span>
          <span className="detail-value">{p.drivers.join(', ')}</span>
        </div>
      </div>

      <div className="coverage-section">
        <div className="coverage-title">Coverage Details</div>
        <div className="coverage-row">
          <span className="coverage-label">Bodily Injury</span>
          <span className="coverage-value">{p.coverageDetails.bodilyInjury}</span>
        </div>
        <div className="coverage-row">
          <span className="coverage-label">Property Damage</span>
          <span className="coverage-value">{p.coverageDetails.propertyDamage}</span>
        </div>
        <div className="coverage-row">
          <span className="coverage-label">Collision</span>
          <span className="coverage-value">{p.coverageDetails.collision}</span>
        </div>
        <div className="coverage-row">
          <span className="coverage-label">Comprehensive</span>
          <span className="coverage-value">{p.coverageDetails.comprehensive}</span>
        </div>
        <div className="coverage-row">
          <span className="coverage-label">Uninsured Motorist</span>
          <span className="coverage-value">{p.coverageDetails.uninsuredMotorist}</span>
        </div>
      </div>

      <div className="connected-badge">
        <span className="connected-dot" />
        Connected · Auto-monitoring
      </div>
    </div>
  );
}
