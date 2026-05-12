import { useState, useEffect } from 'react';
import { checkupFindings, analyzerSteps } from '../data/mockPolicy';
import FindingStep from './FindingStep';
import ResultsSummary from './ResultsSummary';
import './CheckupCard.css';

type Phase = 'idle' | 'analyzing' | 'findings' | 'summary';

export default function CheckupCard() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [analyzeStep, setAnalyzeStep] = useState(0);
  const [analyzeProgress, setAnalyzeProgress] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (phase !== 'analyzing') return;

    const stepDuration = 3500 / analyzerSteps.length;
    const progressInterval = setInterval(() => {
      setAnalyzeProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return p + 100 / (3500 / 50);
      });
    }, 50);

    const stepInterval = setInterval(() => {
      setAnalyzeStep((s) => {
        if (s >= analyzerSteps.length - 1) {
          clearInterval(stepInterval);
          return s;
        }
        return s + 1;
      });
    }, stepDuration);

    const doneTimer = setTimeout(() => {
      setPhase('findings');
    }, 3800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
      clearTimeout(doneTimer);
    };
  }, [phase]);

  const handleStart = () => {
    setAnalyzeStep(0);
    setAnalyzeProgress(0);
    setPhase('analyzing');
  };

  const handleReset = () => {
    setAnimKey((k) => k + 1);
    setPhase('idle');
  };

  if (phase === 'idle') {
    return (
      <div className="ck-card checkup-card" onClick={handleStart}>
        <div className="checkup-collapsed">
          <div className="checkup-collapsed-inner">
            <div className="checkup-ai-icon">✦</div>
            <div className="checkup-collapsed-content">
              <div className="checkup-eyebrow">
                <span className="new-dot" />
                Intuit AI
              </div>
              <div className="checkup-title">Policy Check-up Available</div>
              <div className="checkup-subtitle">
                We analyzed your connected policy and found{' '}
                <strong>{checkupFindings.length} opportunities</strong> to
                improve your coverage and save money.
              </div>
              <div className="checkup-cta-row">
                <button
                  className="checkup-start-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleStart();
                  }}
                >
                  Start Check-up
                </button>
                <span className="checkup-time-est">~2 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ck-card checkup-card">
      <div className="checkup-expanded">
        <div className="checkup-expanded-header">
          <div className="checkup-ai-icon">✦</div>
          <div>
            <div className="checkup-expanded-title">Policy Check-up</div>
            <div className="checkup-expanded-subtitle">
              {phase === 'analyzing'
                ? 'Analyzing your policy...'
                : phase === 'findings'
                  ? `${checkupFindings.length} findings`
                  : 'Complete'}
            </div>
          </div>
        </div>

        {phase === 'analyzing' && (
          <div className="analyzing-container">
            <div className="analyzing-ring" />
            <div className="analyzing-dots">
              <span className="analyzing-dot" />
              <span className="analyzing-dot" />
              <span className="analyzing-dot" />
            </div>
            <div className="analyzing-status">
              {analyzerSteps[analyzeStep]}
            </div>
            <div className="analyzing-progress-bar">
              <div
                className="analyzing-progress-fill"
                style={{ width: `${Math.min(analyzeProgress, 100)}%` }}
              />
            </div>
          </div>
        )}

        {phase === 'findings' && (
          <div className="findings-list" key={animKey}>
            <div className="findings-summary-bar">
              <span className="findings-summary-icon">📋</span>
              <span className="findings-summary-text">
                {checkupFindings.length} items need your attention
              </span>
            </div>

            {checkupFindings.map((finding, i) => (
              <FindingStep key={finding.id} finding={finding} index={i} />
            ))}

            <div
              className="see-results-btn"
              style={{
                animationDelay: `${checkupFindings.length * 0.35 + 0.3}s`,
              }}
            >
              <button
                className="ck-btn-primary"
                onClick={() => setPhase('summary')}
              >
                See Your Full Results →
              </button>
            </div>
          </div>
        )}

        {phase === 'summary' && <ResultsSummary onReset={handleReset} />}
      </div>
    </div>
  );
}
