import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check, Landmark } from 'lucide-react';
import { CANDIDATE_NAME, VILLAGE, LOCATION } from '../data.js';

export default function About() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = `परिचय | ${CANDIDATE_NAME}`;
  }, []);

  return (
    <section className="about-section section-pad" id="about">
      <div className="section-wrap about-grid">
        <div className="about-visual-col">
          <div className="about-number">01 <span>/ परिचय</span></div>
          <div className="about-statement"><span className="quote-mark">“</span><p>एक मजबूत गांव की शुरुआत होती है — सुनने, समझने और साथ चलने से।</p><span className="statement-line" /></div>
          <div className="about-mini-card"><Landmark size={20} /><span><strong>{VILLAGE}</strong><small>{LOCATION}</small></span></div>
        </div>
        <div className="about-copy">
          <span className="eyebrow"><span className="eyebrow-line" /> उम्मीदवार का परिचय</span>
          <h2>गांव की बातों को<br /><span>प्राथमिकता देना।</span></h2>
          <p className="lead">{CANDIDATE_NAME} का यह परिचय ग्राम पंचायत से जुड़े स्थानीय मुद्दों, लोगों की अपेक्षाओं और मिलकर काम करने की भावना पर केंद्रित है।</p>
          <p className="body-copy">गांव की रोजमर्रा की जरूरतों पर चर्चा, उपलब्ध योजनाओं की जानकारी और समस्याओं को संबंधित स्तर तक पहुंचाने की दिशा में जनता के साथ संवाद महत्वपूर्ण है। स्थानीय प्राथमिकताएं तय करते समय गांव के अलग-अलग परिवारों और वर्गों की बात सुनी जानी चाहिए।</p>
          <div className="values-list">
            <div><span className="value-check"><Check size={15} /></span><span><strong>जन-संवाद</strong><small>लोगों की जरूरतों को ध्यान से सुनना</small></span></div>
            <div><span className="value-check"><Check size={15} /></span><span><strong>पारदर्शिता</strong><small>कार्य और जानकारी में स्पष्टता</small></span></div>
            <div><span className="value-check"><Check size={15} /></span><span><strong>साझी भागीदारी</strong><small>समाधान में गांव के लोगों की भूमिका</small></span></div>
          </div>
          <button className="text-link" onClick={() => navigate('/mudde')}>मुख्य प्राथमिकताएं देखें <ArrowRight size={17} /></button>
        </div>
      </div>
    </section>
  );
}
