import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight, X, Zap } from 'lucide-react';
import { CANDIDATE_NAME, focusAreas } from '../data.js';

const filterItems = ['सभी', 'बुनियादी सुविधाएँ', 'सभी की भागीदारी', 'जवाबदेही', 'जन-सहयोग', 'लोग पहले'];

export default function Priorities() {
  const navigate = useNavigate();
  const [activeFocus, setActiveFocus] = useState('सभी');
  const [expandedFocus, setExpandedFocus] = useState(null);

  useEffect(() => {
    document.title = `विकास के मुद्दे | ${CANDIDATE_NAME}`;
  }, []);

  const visibleAreas = activeFocus === 'सभी' ? focusAreas : focusAreas.filter((item) => item.tag === activeFocus);

  return (
    <section className="priorities-section section-pad" id="priorities">
      <div className="section-wrap">
        <div className="section-header-row">
          <div>
            <span className="eyebrow"><span className="eyebrow-line" /> विकास और जन-प्राथमिकताएं</span>
            <h2>गांव के लिए जरूरी<br /><span>काम की बातें।</span></h2>
          </div>
          <p>प्राथमिकताएं गांव की वास्तविक जरूरतों, चर्चा और उपलब्ध संसाधनों के आधार पर तय की जानी चाहिए। नीचे दिए गए कार्ड स्थानीय चर्चा के लिए मुख्य विषय हैं।</p>
        </div>
        <div className="focus-filters" role="group" aria-label="प्राथमिकता फ़िल्टर">
          {filterItems.map((filter) => (
            <button key={filter} className={activeFocus === filter ? 'filter-chip active' : 'filter-chip'} onClick={() => { setActiveFocus(filter); setExpandedFocus(null); }}>{filter}</button>
          ))}
        </div>
        <div className="focus-grid">
          {visibleAreas.map((item) => {
            const Icon = item.icon;
            const expanded = expandedFocus === item.no;
            return (
              <article key={item.no} className={`focus-card ${expanded ? 'expanded' : ''}`}>
                <div className="focus-card-top"><span className="focus-number">{item.no}</span><span className="focus-icon"><Icon size={21} /></span></div>
                <div className="focus-card-content">
                  <span className="focus-tag">{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p>
                  {expanded && (
                    <div className="focus-extra">
                      <strong>चर्चा के लिए सवाल</strong>
                      <p>इस विषय में गांव की सबसे जरूरी समस्या क्या है और उसे हल करने के लिए किस विभाग या संसाधन की जरूरत होगी?</p>
                    </div>
                  )}
                </div>
                <button className="card-more" aria-expanded={expanded} onClick={() => setExpandedFocus(expanded ? null : item.no)}>
                  {expanded ? 'कम देखें' : 'और जानें'} {expanded ? <X size={15} /> : <ChevronRight size={16} />}
                </button>
              </article>
            );
          })}
        </div>
        <div className="priority-note">
          <span><Zap size={18} /></span>
          <p><strong>स्थानीय जरूरतें सबसे पहले।</strong> इन विषयों को गांव के लोगों के सुझावों के साथ और बेहतर बनाया जा सकता है।</p>
          <button onClick={() => navigate('/sampark')}>अपनी बात रखें <ArrowRight size={16} /></button>
        </div>
      </div>
    </section>
  );
}
