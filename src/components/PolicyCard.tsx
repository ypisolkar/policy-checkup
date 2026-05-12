import { mockPolicy } from '../data/mockPolicy';
import './PolicyCard.css';

const basePath = import.meta.env.BASE_URL;

export default function PolicyCard() {
  const p = mockPolicy;
  return (
    <div className="kds-card policy-card">
      {/* Row item: carrier + see details */}
      <div className="policy-row-item">
        <img
          src={`${basePath}assets/liberty-mutual.png`}
          alt={p.carrier.name}
          className="policy-avatar"
        />
        <div className="policy-row-content">
          <span className="policy-carrier-name">{p.carrier.name}</span>
          <button className="policy-see-details">See details</button>
        </div>
      </div>

      <div className="kds-divider-item" />

      {/* Key Value Grid */}
      <div className="policy-kv-grid">
        <div className="policy-kv-item">
          <span className="policy-kv-label">Mo payment</span>
          <span className="policy-kv-value">${p.premium.amount}/mo</span>
        </div>
        <div className="policy-kv-item">
          <span className="policy-kv-label">Next renewal</span>
          <span className="policy-kv-value">{p.renewal.date}</span>
        </div>
      </div>

      <div className="kds-divider-item" />

      {/* Payment Rating */}
      <div className="payment-rating-section">
        <div className="payment-rating-header">
          <div className="payment-rating-label-group">
            <span className="payment-rating-label">Payment rating</span>
            <img
              src={`${basePath}assets/info-icon.svg`}
              alt="info"
              className="payment-rating-info"
            />
          </div>
          <img
            src={`${basePath}assets/payment-rating.png`}
            alt="rating"
            className="payment-rating-bar"
          />
        </div>
        <span className="payment-rating-value">Expensive</span>
        <p className="payment-rating-description">
          Your current monthly payment is 10% higher than the average of $224.10/mo
          for similar drivers in 28206
        </p>

        {/* Intuit Assist prompt chip */}
        <div className="intuit-assist-chip">
          <span className="intuit-assist-chip-text">How is this calculated?</span>
        </div>
      </div>
    </div>
  );
}
