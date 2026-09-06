import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

export const DonationSection = ({ onDonateClick }) => {
  const [selectedPill, setSelectedPill] = useState('7000');
  const [customAmount, setCustomAmount] = useState('');
  const { donationImpacts } = siteData;
  const { lang } = useTheme();

  const amounts = ['1000', '3000', '5000', '7000', '10000', '15000'];

  const handlePillClick = (amt) => {
    setSelectedPill(amt);
  };

  const handleDonate = () => {
    let finalAmount = selectedPill === 'custom' ? customAmount || '5000' : selectedPill;
    if (onDonateClick) {
      onDonateClick(finalAmount);
    }
  };

  const currentImpactText = selectedPill === 'custom'
    ? 'Directly fuels citizen engagement, evidence-based policy research, and open governance initiatives across Nepal.'
    : donationImpacts[selectedPill] || donationImpacts['7000'];

  return (
    <section className="donation-section" id="donate">
      <div className="container donation-box-wrap">
        <div className="donation-badge-pill">
          <i className="fa-solid fa-hand-holding-heart"></i>
          <span>{lang === 'np' ? 'नागरिक सहभागिता' : 'Citizen-Powered Movement'}</span>
        </div>
        <h2 className="donation-heading">
          {lang === 'np' ? 'नागरिक अभियानमा सहयोग गर्नुहोस्' : 'Make a Contribution to the Movement'}
        </h2>
        <p className="donation-subtitle">
          {lang === 'np'
            ? '१००% नागरिक सहयोग प्रत्यक्ष रूपमा स्थलगत नीति अनुसन्धान, युवा नीति कार्यशाला र सुशासन अभियानमा उपयोग गरिन्छ।'
            : '100% of grassroots contributions fund independent legislative research, civic townhalls, and policy incubation for young leaders.'}
        </p>

        {/* Dynamic Impact Display Card */}
        <div className="donation-impact-card">
          <div className="impact-card-header">
            <i className="fa-solid fa-seedling"></i>
            <span>{lang === 'np' ? 'तपाईंको सहयोगको प्रभाव' : 'Your Contribution Impact'}</span>
          </div>
          <p className="impact-card-text">{currentImpactText}</p>
        </div>

        {/* Donation Selector Pills */}
        <div className="donation-pills-row">
          {amounts.map((amt) => (
            <button
              key={amt}
              className={`donation-pill-item ${selectedPill === amt ? 'active' : ''}`}
              onClick={() => handlePillClick(amt)}
            >
              NRs {parseInt(amt, 10).toLocaleString()}
            </button>
          ))}
          <button
            className={`donation-pill-item ${selectedPill === 'custom' ? 'active' : ''}`}
            onClick={() => handlePillClick('custom')}
          >
            {lang === 'np' ? 'अन्य रकम' : 'Custom'}
          </button>
        </div>

        {/* Custom Amount Input */}
        {selectedPill === 'custom' && (
          <div className="custom-donation-input-wrap active">
            <span className="currency-prefix">NRs</span>
            <input
              type="number"
              className="custom-donation-input"
              placeholder="Enter Custom NRs Amount"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              min="100"
              step="100"
              autoFocus
            />
          </div>
        )}

        <div className="donation-action-row">
          <button className="btn-crimson" onClick={handleDonate}>
            {lang === 'np' ? 'अहिले सहयोग गर्नुहोस्' : 'PROCEED WITH CONTRIBUTION'}
          </button>
        </div>

        {/* Payment Gateways Bar */}
        <div className="payment-badges-row">
          <span className="payment-label">{lang === 'np' ? 'सुरक्षित भुक्तानी माध्यमहरू:' : 'Supported Nepali Gateways:'}</span>
          <span className="payment-badge-pill"><i className="fa-solid fa-wallet"></i> eSewa</span>
          <span className="payment-badge-pill"><i className="fa-solid fa-mobile-screen"></i> Khalti</span>
          <span className="payment-badge-pill"><i className="fa-solid fa-building-columns"></i> ConnectIPS</span>
          <span className="payment-badge-pill"><i className="fa-solid fa-qrcode"></i> Fonepay</span>
        </div>
      </div>
    </section>
  );
};
