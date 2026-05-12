import { useState } from 'react';
import type { Finding } from '../data/mockPolicy';
import './FindingStep.css';

interface Props {
  finding: Finding;
  index: number;
}

export default function FindingStep({ finding, index }: Props) {
  const [expanded, setExpanded] = useState(false);

  const categoryLabel =
    finding.category === 'gap'
      ? 'Coverage Gap'
      : finding.category === 'rightsize'
        ? 'Right-size'
        : 'Savings';

  return (
    <div
      className="finding-step"
      style={{ animationDelay: `${index * 0.35}s` }}
    >
      <div className="finding-header">
        <span className="finding-icon">{finding.icon}</span>
        <div className="finding-header-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span className={`ck-badge ${finding.category}`}>{categoryLabel}</span>
            {finding.severity === 'high' && (
              <span
                style={{
                  fontSize: 11,
                  color: 'var(--ck-badge-red)',
                  fontWeight: 600,
                }}
              >
                Action needed
              </span>
            )}
          </div>
          <div className="finding-title">{finding.title}</div>
          <div className="finding-description">{finding.description}</div>
        </div>
      </div>

      <div className="finding-recommendation">
        <div className="finding-rec-label">
          <span>✦</span> Intuit AI Recommendation
        </div>
        <div className="finding-rec-text">{finding.recommendation}</div>
      </div>

      {finding.potentialSavings && (
        <div className="finding-savings">
          <span className="finding-savings-label">Potential savings</span>
          <span className="finding-savings-amount">
            ${finding.potentialSavings}/mo
          </span>
        </div>
      )}

      {finding.details && finding.details.length > 0 && (
        <>
          <button
            className="finding-toggle"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Hide details' : 'See details'}
            <span
              className={`finding-toggle-arrow ${expanded ? 'expanded' : ''}`}
            >
              ▼
            </span>
          </button>
          <div className={`finding-details ${expanded ? 'expanded' : 'collapsed'}`}>
            <ul className="finding-detail-list">
              {finding.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
