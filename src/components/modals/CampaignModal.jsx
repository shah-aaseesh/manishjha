import React from 'react';
import { useToast } from '../../context/ToastContext';

export const CampaignModal = ({ isOpen, onClose, onJoinClick }) => {
  const { addToast } = useToast();

  if (!isOpen) return null;

  const handleDownloadManifesto = () => {
    addToast('Election 2084 Policy Manifesto summary downloaded!', 'success');
  };

  const pillars = [
    {
      icon: "fa-solid fa-graduation-cap",
      title: "500,000 Tech & TVET Careers",
      desc: "Establishing specialized IT export parks, digital economy tax holidays, and nationwide vocational apprentice programs."
    },
    {
      icon: "fa-solid fa-bolt",
      title: "Clean Energy Export Corridor",
      desc: "Scaling storage hydro projects, cross-border transmission to India/Bangladesh, and 100% electrified public transport."
    },
    {
      icon: "fa-solid fa-scale-balanced",
      title: "100% Open Public Procurement",
      desc: "Digital real-time tracking of every municipal infrastructure rupee and institutional independence of anti-corruption bodies."
    },
    {
      icon: "fa-solid fa-wheat-awn",
      title: "Madhesh Solar Cold Storage Network",
      desc: "Guaranteed minimum support prices, direct-to-consumer digital agro markets, and uninterrupted fertilizer supply."
    },
    {
      icon: "fa-solid fa-heart-pulse",
      title: "Universal Citizen Health Security",
      desc: "Equipping provincial specialized hospitals and comprehensive health insurance for all working-class families."
    },
    {
      icon: "fa-solid fa-globe",
      title: "Diaspora Knowledge & Capital Bonds",
      desc: "Creating sovereign diaspora infrastructure bonds and formal channels for technology and skill transfer to Nepal."
    }
  ];

  return (
    <div className="modal-overlay active" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog modal-dialog-large" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 className="modal-title">Election 2084 - Policy Manifesto & Vision</h3>
            <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>निर्वाचन २०८४ : समृद्ध नेपालको मार्गचित्र</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="modal-body">
          <div style={{ marginBottom: '1.5rem', background: 'linear-gradient(135deg, rgba(19, 23, 56, 0.04), rgba(230, 40, 70, 0.08))', padding: '1.25rem', borderRadius: '8px', borderLeft: '4px solid var(--accent-crimson)' }}>
            <span style={{ background: 'var(--accent-crimson)', color: '#ffffff', fontWeight: 800, fontSize: '0.75rem', padding: '0.25rem 0.6rem', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Vision 2084 BS
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, marginTop: '0.6rem', color: 'var(--text-main)', lineHeight: 1.3 }}>
              Empowering Citizens, Digitizing Governance & Accelerating Nepal's Economic Sovereignty
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.5rem', lineHeight: 1.6 }}>
              A collective commitment to systemic reform, meritocratic institutions, youth economic inclusion, and transparent governance across all 7 provinces of Nepal.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
            {pillars.map((item, idx) => (
              <div key={idx} style={{ background: 'var(--bg-card, #ffffff)', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.25rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: '1.35rem', color: 'var(--accent-crimson)', marginBottom: '0.5rem' }}>
                  <i className={item.icon}></i>
                </div>
                <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.35rem', color: 'var(--text-main)' }}>{item.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
            <button
              className="btn-crimson"
              onClick={() => {
                onClose();
                if (onJoinClick) onJoinClick();
              }}
            >
              <i className="fa-solid fa-users" style={{ marginRight: '6px' }}></i>
              Join the Campaign Movement
            </button>
            <button className="btn-outline-dark" onClick={handleDownloadManifesto}>
              <i className="fa-solid fa-download" style={{ marginRight: '6px' }}></i>
              Download Manifesto Brief (PDF)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
