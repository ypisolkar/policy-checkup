import { useEffect, useState } from 'react';
import { checkupFindings, totalPotentialSavings } from '../data/mockPolicy';
import './ResultsSummary.css';

interface Props {
  onReset: () => void;
}

export default function ResultsSummary({ onReset }: Props) {
  const [displayedSavings, setDisplayedSavings] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const steps = 30;
    const increment = totalPotentialSavings / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= totalPotentialSavings) {
        setDisplayedSavings(totalPotentialSavings);
        clearInterval(timer);
      } else {
        setDisplayedSavings(Math.round(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);

  const gapCount = checkupFindings.filter((f) => f.category === 'gap').length;
  const savingsCount = checkupFindings.filter(
    (f) => f.category === 'savings' || f.potentialSavings
  ).length;

  return (
    <div className="results-summary">
      <div className="results-header">
        <div className="results-check-icon">✅</div>
        <div className="results-headline">Check-up Complete</div>
        <div className="results-subhead">
          We found {gapCount} coverage gaps and {savingsCount} savings
          opportunities
        </div>
      </div>

      <div className="results-savings-block">
        <div className="results-savings-label">Estimated monthly savings</div>
        <div className="results-savings-amount">
          ${displayedSavings}
          <span className="results-savings-period">/mo</span>
        </div>
      </div>

      <div className="results-findings-recap">
        {checkupFindings.map((f) => (
          <div className="recap-item" key={f.id}>
            <span className="recap-icon">{f.icon}</span>
            <div className="recap-content">
              <div className="recap-title">{f.title}</div>
              {f.potentialSavings && (
                <div className="recap-savings">
                  Save ${f.potentialSavings}/mo
                </div>
              )}
            </div>
            <span className="recap-check">✓</span>
          </div>
        ))}
      </div>

      <div className="results-cta-group">
        <button className="ck-btn-primary">
          🛒 Shop Better Rates
        </button>
        <button className="ck-btn-secondary">
          📋 Update Your Policy
        </button>
      </div>

      <div className="results-share-link">
        <button>Share check-up with your agent</button>
      </div>

      <div className="results-footer">
        <span className="results-footer-text">
          Powered by Intuit AI · Based on your connected policy data
        </span>
        <button className="results-reset" onClick={onReset}>
          Start over
        </button>
      </div>
    </div>
  );
}
