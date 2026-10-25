import React, { useEffect } from 'react';
import { ArrowRight, MessageCircle, Users } from 'lucide-react';
import { CANDIDATE_NAME, PHONE, WHATSAPP_GROUP, scrollToSection } from '../data.js';

export default function Contact() {
  useEffect(() => {
    document.title = `संपर्क | ${CANDIDATE_NAME}`;
  }, []);

  return (
    <>
      <section className="community-section section-pad" id="community">
        <div className="section-wrap community-grid">
          <div>
            <span className="eyebrow eyebrow-light"><span className="eyebrow-line" /> गांव की भागीदारी</span>
            <h2>बेहतर गांव की दिशा में<br /><span>संवाद से शुरुआत।</span></h2>
            <p>गांव की प्राथमिकताएं तय करने में हर परिवार की बात महत्वपूर्ण है। अपने सुझाव साझा करें ताकि स्थानीय मुद्दों पर सार्थक चर्चा हो सके।</p>
            <button className="btn btn-light" onClick={() => scrollToSection('contact')}>सुझाव साझा करें <ArrowRight size={17} /></button>
          </div>
          <div className="community-panel">
            <div className="community-panel-head">
              <div className="community-icon"><MessageCircle size={22} /></div>
              <div><strong>आपकी आवाज़ मायने रखती है</strong><span>स्थानीय प्राथमिकताएं साझा करें</span></div>
            </div>
            <div className="community-points">
              <div><span>01</span><p><strong>समस्या बताएं</strong><small>गांव में किस बदलाव की सबसे ज्यादा जरूरत है?</small></p></div>
              <div><span>02</span><p><strong>सुझाव दें</strong><small>समाधान के लिए अपना विचार साझा करें।</small></p></div>
              <div><span>03</span><p><strong>संवाद में जुड़ें</strong><small>सम्मानजनक और रचनात्मक चर्चा को बढ़ावा दें।</small></p></div>
            </div>
            <button className="community-link" onClick={() => window.open(WHATSAPP_GROUP, '_blank', 'noopener,noreferrer')}>WhatsApp समूह से जुड़ें <ArrowRight size={16} /></button>
          </div>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="section-wrap contact-wrap">
          <div className="contact-copy">
            <span className="eyebrow eyebrow-light"><span className="eyebrow-line" /> संपर्क और सुझाव</span>
            <h2>आपकी बात<br /><span>हम तक पहुंचे।</span></h2>
            <p>गांव से जुड़े मुद्दे या सुझाव साझा करने के लिए संपर्क करें।</p>
          </div>
          <div className="contact-actions">
            <a className="contact-card" href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer">
              <span className="contact-card-icon"><MessageCircle size={22} /></span>
              <span><small>WhatsApp पर संपर्क</small><strong>संदेश भेजें</strong></span>
              <ArrowRight size={18} />
            </a>
            <a className="contact-card" href={WHATSAPP_GROUP} target="_blank" rel="noreferrer">
              <span className="contact-card-icon"><Users size={22} /></span>
              <span><small>समुदाय से जुड़ें</small><strong>WhatsApp समूह</strong></span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
