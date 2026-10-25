import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowDown, ArrowRight, ChevronDown, ChevronRight, HeartHandshake, Landmark, Users, Zap } from 'lucide-react';
import { CANDIDATE_NAME, CANDIDATE_PHOTO, VILLAGE, focusAreas, scrollToSection } from '../data.js';

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = `${CANDIDATE_NAME} | सरपंच पद के उम्मीदवार`;
  }, []);

  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
        <div className="hero-grid section-wrap">
          <div className="hero-copy">
            <div className="hero-badge"><span className="status-dot" /> सरपंच पद के उम्मीदवार <span className="badge-divider">/</span> सूरतगढ़, राजस्थान</div>
            <p className="hero-overline">आपके गांव की बात, आपके साथ</p>
            <h1>श्री रामस्वरूप<br /><em>बरोड</em></h1>
            <p className="hero-subtitle">गांव की जरूरतों को सुनने, स्थानीय मुद्दों पर संवाद करने और मिलकर बेहतर भविष्य की दिशा में काम करने का संकल्प।</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => navigate('/mudde')}>विकास के मुद्दे देखें <ArrowRight size={18} /></button>
              <button className="btn btn-outline-light" onClick={() => navigate('/parichay')}>उम्मीदवार का परिचय <ChevronDown size={17} /></button>
            </div>
            <div className="hero-proof-row">
              <div className="proof-icon"><Users size={20} /></div>
              <div><strong>गांव के साथ, गांव के लिए</strong><span>संवाद और सहभागिता को प्राथमिकता</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo-backdrop" />
            <div className="hero-photo-card">
              <div className="photo-topline"><span>GRAM PANCHAYAT</span><span>RAJASTHAN</span></div>
              <div className="hero-photo-wrap">
                <img src={CANDIDATE_PHOTO} alt={CANDIDATE_NAME} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <div className="photo-fallback"><Landmark size={48} /><span>उम्मीदवार का परिचय</span></div>
              </div>
              <div className="hero-photo-caption"><span className="caption-label">आपका गांव · आपकी आवाज़</span><strong>{CANDIDATE_NAME}</strong><small>{VILLAGE}, सूरतगढ़</small></div>
            </div>
            <div className="floating-note"><span className="floating-note-icon"><HeartHandshake size={19} /></span><span><strong>संवाद पहले</strong><small>हर आवाज़ महत्वपूर्ण</small></span></div>
            <div className="hero-side-label">LOCAL LEADERSHIP · PUBLIC SERVICE</div>
          </div>
        </div>
        <button type="button" className="scroll-cue" onClick={() => scrollToSection('highlights')}><span>आगे जानें</span><ArrowDown size={16} /></button>
      </section>

      <section className="priorities-section section-pad" id="highlights">
        <div className="section-wrap">
          <div className="section-header-row">
            <div>
              <span className="eyebrow"><span className="eyebrow-line" /> विकास और जन-प्राथमिकताएं</span>
              <h2>गांव के लिए जरूरी<br /><span>काम की बातें।</span></h2>
            </div>
            <p>गांव की वास्तविक जरूरतों के आधार पर तय की गई कुछ मुख्य प्राथमिकताएं। पूरी सूची अलग पेज पर देखें।</p>
          </div>
          <div className="focus-grid">
            {focusAreas.slice(0, 3).map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.no} className="focus-card">
                  <div className="focus-card-top"><span className="focus-number">{item.no}</span><span className="focus-icon"><Icon size={21} /></span></div>
                  <div className="focus-card-content"><span className="focus-tag">{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p></div>
                  <button className="card-more" onClick={() => navigate('/mudde')}>और जानें <ChevronRight size={16} /></button>
                </article>
              );
            })}
          </div>
          <div className="priority-note">
            <span><Zap size={18} /></span>
            <p><strong>स्थानीय जरूरतें सबसे पहले।</strong> अपने सुझाव और समस्याएं हमें बताएं।</p>
            <button onClick={() => navigate('/sampark')}>अपनी बात रखें <ArrowRight size={16} /></button>
          </div>
        </div>
      </section>
    </>
  );
}
