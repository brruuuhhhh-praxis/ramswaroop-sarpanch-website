import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, HeartHandshake, Landmark } from 'lucide-react';
import { CANDIDATE_NAME, VILLAGE, LOCATION, navItems } from '../data.js';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-main">
        <div className="footer-brand">
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="brand-lockup footer-lockup">
            <span className="brand-mark"><Landmark size={22} /></span>
            <span className="brand-copy"><strong>{CANDIDATE_NAME}</strong><small>{VILLAGE} · सूरतगढ़</small></span>
          </a>
          <p>स्थानीय मुद्दों, जन-संवाद और गांव की भागीदारी के लिए एक डिजिटल परिचय-पृष्ठ।</p>
        </div>
        <div className="footer-nav">
          <strong>त्वरित लिंक</strong>
          {navItems.map(([label, path]) => <button key={path} onClick={() => navigate(path)}>{label}<ArrowRight size={13} /></button>)}
        </div>
        <div className="footer-note">
          <span className="footer-note-icon"><HeartHandshake size={20} /></span>
          <strong>गांव के साथ, गांव के लिए।</strong>
          <p>अपनी प्राथमिकताएं और सुझाव साझा करें।</p>
          <button onClick={() => navigate('/sampark')}>संपर्क करें <ArrowRight size={15} /></button>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="section-wrap">
          <span>© {new Date().getFullYear()} {CANDIDATE_NAME}</span>
          <span>{VILLAGE}, {LOCATION}</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>ऊपर जाएं ↑</button>
        </div>
      </div>
    </footer>
  );
}
