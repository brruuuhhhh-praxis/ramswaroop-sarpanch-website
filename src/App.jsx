import React, { useState, useEffect } from "react";
import { Link, NavLink, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";

const PHONE = "7568118606";
const WHATSAPP = "918769723698";
const MAP_URL = "https://maps.app.goo.gl/5mnW3TxfeMWXJaB2A";

const navItems = [
  ["होम", "/"],
  ["परिचय", "/parichay"],
  ["विकास", "/vikas"],
  ["सामाजिक पहल", "/samaj"],
  ["फोटो", "/gallery"],
  ["वीडियो", "/videos"],
  ["संपर्क", "/sampark"],
];

const priorities = [
  ["💧", "पेयजल", "पानी की समस्याओं और पेयजल सुविधाओं पर प्राथमिकता से ध्यान।"],
  ["🛣️", "सड़कें और रास्ते", "गाँव के रास्तों और आवागमन की जरूरतों को सामने लाना।"],
  ["🧹", "सफाई और नालियाँ", "सफाई व्यवस्था और जल निकासी से जुड़े मुद्दों पर पहल।"],
  ["💡", "स्ट्रीट लाइट", "जरूरत वाले स्थानों पर रोशनी की व्यवस्था के लिए प्रयास।"],
  ["📚", "शिक्षा", "विद्यालयों और विद्यार्थियों से जुड़ी स्थानीय जरूरतों पर ध्यान।"],
  ["📋", "योजना और पारदर्शिता", "सरकारी योजनाओं की जानकारी और पंचायत के कामकाज में स्पष्टता।"],
];

const photos = [
  [(import.meta.env.BASE_URL + "gallery-1.jpg"), "जनसंपर्क की तस्वीर"],
  [(import.meta.env.BASE_URL + "gallery-2.jpg"), "ग्रामवासियों के साथ मुलाकात"],
  [(import.meta.env.BASE_URL + "gallery-3.jpg"), "गाँव की गतिविधि"],
  [(import.meta.env.BASE_URL + "gallery-4.jpg"), "ग्रामीणों के साथ संवाद"],
];

function SectionTitle({ tag, title, desc }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{tag}</span>
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
      <span className="title-line" />
    </div>
  );
}

function Photo({ src, alt, number }) {
  return (
    <div className="photo-tile">
      <img
        src={src}
        alt={alt}
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.parentElement.classList.add("photo-missing");
        }}
      />
      <div className="photo-placeholder">
        <span>📷</span>
        <b>फोटो {number}</b>
        <small>{src}</small>
      </div>
    </div>
  );
}


function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return null;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="tricolour"><span /><span /><span /></div>
      <div className="top-strip">
        <span>राजस्थान · कीकर वाली जोहड़ी</span>
        <a href={`tel:${PHONE}`}>☎ {PHONE}</a>
      </div>

      <header className="site-header">
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
          <img className="brand-face-icon" src={import.meta.env.BASE_URL + "candidate-face.png"} alt="श्री रामस्वरूप बरोड़" />
          <span className="brand-text">
            <b>श्री रामस्वरूप बरोड़</b>
            <small>सरपंच पद के उम्मीदवार</small>
          </span>
        </Link>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="मेन्यू खोलें"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "navigation nav-open" : "navigation"}>
          {navItems.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => isActive ? "nav-link-active" : ""}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <a className="header-contact" href={`https://wa.me/${WHATSAPP}`}>
          WhatsApp संपर्क ↗
        </a>
      </header>
    </>
  );
}

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-main">
          <Link className="brand footer-brand" to="/">
            <span className="brand-icon">ग्राम<br />सेवा</span>
            <span className="brand-text">
              <b>श्री रामस्वरूप बरोड़</b>
              <small>सरपंच पद के उम्मीदवार · कीकर वाली जोहड़ी</small>
            </span>
          </Link>
          <p>गाँव की बात सुनना, प्राथमिकताओं को समझना और जिम्मेदारी के साथ संवाद करना।</p>
          <Link to="/">होमपेज पर जाएँ ↑</Link>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} श्री रामस्वरूप बरोड़</span>
          <span>मेहनत · ईमानदारी · जनसेवा</span>
        </div>
        <div className="developer-credit-banner">
          Developed with <span aria-label="love">♥</span> by <strong>Sartaj Soni</strong>
        </div>
      </footer>

      <div className="mobile-actions" aria-label="त्वरित संपर्क">
        <a
          className="floating-contact floating-call"
          href={`tel:${PHONE}`}
          aria-label="कॉल करें"
          title="कॉल करें"
        >
          <span aria-hidden="true">☎</span>
        </a>
        <a
          className="floating-contact floating-whatsapp"
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp पर संपर्क करें"
          title="WhatsApp संपर्क"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.4 3.6A11.7 11.7 0 0 0 2 17.7L.5 23.5l6-1.6A11.7 11.7 0 0 0 12 23.1h.01A11.6 11.6 0 0 0 23.7 11.5a11.5 11.5 0 0 0-3.3-7.9ZM12 21.1a9.6 9.6 0 0 1-4.9-1.3l-.4-.2-3.6.9 1-3.5-.3-.4A9.5 9.5 0 1 1 12 21.1Zm5.2-7.1c-.3-.2-1.7-.9-2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a7.8 7.8 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.5.1-.7l.5-.5.2-.5-.1-.5-.9-2.1c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4a3.2 3.2 0 0 0-1 2.4 5.6 5.6 0 0 0 1.2 3c.2.3 1.7 2.7 4.1 3.8s2.4.7 3.3.6c.7-.1 1.7-.7 1.9-1.4s.2-1.3.1-1.4-.3-.2-.6-.4Z"/>
          </svg>
        </a>
      </div>
    </>
  );
}


function SupportButton() {
  const [sharing, setSharing] = useState(false);

  async function shareSupport() {
    const message =
      "🙏 गाँव के विकास और बेहतर भविष्य के लिए आइए, मिलकर सकारात्मक बदलाव का साथ दें।\n\n" +
      "🌿 ताऊ रामस्वरूप बरोड़ के समर्थन में यह संदेश अपने परिवार और मित्रों तक पहुँचाएँ।\n\n" +
      "मेहनत • ईमानदारी • जनसेवा\n" +
      "🔗 वेबसाइट: https://brruuuhhhh-praxis.github.io/ramswaroop-sarpanch-website/";

    try {
      if (navigator.share) {
        setSharing(true);
        await navigator.share({
          title: "ताऊ रामस्वरूप बरोड",
          text: message
        });
      } else {
        window.open(
          "https://wa.me/?text=" + encodeURIComponent(message),
          "_blank"
        );
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        window.open(
          "https://wa.me/?text=" + encodeURIComponent(message),
          "_blank"
        );
      }
    } finally {
      setSharing(false);
    }
  }

  return (
    <div className="support-wrap">
      <button
        type="button"
        className="support-button"
        onClick={shareSupport}
        disabled={sharing}
      >
        {sharing
          ? "शेयर मेन्यू खुल रहा है…"
          : "अपना समर्थन देने के लिए यहाँ क्लिक करें"}
      </button>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="hero-label">✦ जनपरिचय · राजस्थान</span>
          <p className="local-greeting">आपणो गाँव, आपणो मान</p>
          <p className="candidate-tag">सरपंच पद के उम्मीदवार</p>
          <h1>श्री रामस्वरूप<br /><em>बरोड़</em></h1>
          <p className="hero-location">कीकर वाली जोहड़ी · राजस्थान</p>

          <div className="main-slogan">
            <p>
              आगामी 5 नवंबर को अपना अमूल्य मत देकर<br />
              <strong>ताऊ रामस्वरूप बरोड़ को विजयी बनाएँ!</strong>
            </p>
          </div>

          <div className="hero-buttons">
            <Link className="button button-orange" to="/parichay">पूरो परिचय जाणो →</Link>
            <Link className="button button-outline" to="/sampark">संपर्क करें</Link>
          </div>
          <SupportButton />
          <p className="hero-note">जनता की बात सुनना · समस्याएँ समझना · समाधान की पहल</p>
        </div>

        
      
        <div className="hero-neon-slogan" aria-label="राजस्थानी जनसेवा का संकल्प">
          <span className="hero-neon-heading">✦ हमारा संकल्प ✦</span>
          <p>जिण दानां रो आटा पीस्यो,</p>
          <p>उण रो कदे न धरस्यो उधार।</p>
          <strong>मेहनत अर ईमानदारी सूं,</strong>
          <strong>करस्यां पंचायत रो विकास अपार!</strong>
        </div>
</section>

      <div className="ticker">
        <b>राम-राम सा!</b>
        <span>थांरी बात, थांरो गाँव, थांरी पंचायत — सुझाव और समस्याएँ साझा करां।</span>
      </div>

      <section className="section candidate-message">
        <div className="candidate-message-layout">
          <div className="candidate-message-card">
          <span className="candidate-message-kicker">ग्रामवासियों के नाम संदेश</span>
          <h2>मेरे प्यारे ग्रामवासियों,</h2>

          <p>सादर राम-राम सा!</p>

          <p>
            हमारा गाँव हमारी पहचान, हमारी संस्कृति और हमारा परिवार है।
            गाँव की खुशहाली के लिए जरूरी है कि हर व्यक्ति की बात सुनी जाए,
            समस्याओं को समझा जाए और मिलकर उनके समाधान की दिशा में काम किया जाए।
            मेरी सोच है कि पंचायत के कार्यों में ईमानदारी, पारदर्शिता और
            जनभागीदारी को महत्व मिले।
          </p>

          <p>
            स्वच्छ पेयजल, अच्छी सड़कें, स्वच्छता, शिक्षा और गाँव की मूलभूत
            सुविधाएँ हमारी महत्वपूर्ण प्राथमिकताएँ होनी चाहिए। हमारे बुजुर्गों
            का सम्मान, युवाओं को अवसर और माताओं-बहनों की भागीदारी भी गाँव की
            प्रगति का अहम हिस्सा है। मैं आप सभी के सुझावों और समस्याओं को
            सुनने तथा मिलकर बेहतर रास्ते तलाशने में विश्वास रखता हूँ।
          </p>

          <p>
            आइए, आपसी एकता, सहयोग और सकारात्मक सोच के साथ अपने गाँव के बेहतर
            भविष्य के लिए प्रयास करें। आपका सुझाव गाँव की प्रगति में महत्वपूर्ण
            भूमिका निभा सकता है।
          </p>

          <div className="candidate-message-signature">
            आपका अपना,<br />
            <strong>रामस्वरूप बरोड़</strong>
          </div>
        </div>
          <div className="candidate-message-photo">
            <img src={import.meta.env.BASE_URL + "candidate-full.png"} alt="श्री रामस्वरूप बरोड़ की पूरी राजस्थानी पोशाक वाली तस्वीर" />
          </div>
        </div>
      </section>

      <section className="section about">
        <SectionTitle
          tag="आपका उम्मीदवार"
          title="श्री रामस्वरूप बरोड़"
          desc="सरपंच पद के उम्मीदवार · कीकर वाली जोहड़ी"
        />
        <div className="about-copy home-intro">
          <h3>मेहनत, संवाद और व्यवहारिक सोच</h3>
          <p>
            गाँव की जरूरतों और स्थानीय समस्याओं को समझने, लोगों की बात सुनने
            और जिम्मेदारी के साथ संवाद करने पर जोर।
          </p>
          <Link className="button button-orange" to="/parichay">विस्तृत परिचय पढ़ें →</Link>
        </div>
      </section>

      <section className="section priorities">
        <SectionTitle
          tag="विकास की प्राथमिकताएँ"
          title="गाँव की जरूरतें, साफ़ प्राथमिकताएँ"
          desc="स्थानीय जरूरतों और उपलब्ध संसाधनों के अनुसार आगे बढ़ने के विषय।"
        />
        <div className="priority-grid">
          {priorities.slice(0, 3).map(([icon, title, desc], i) => (
            <article className="priority-card" key={title}>
              <div className="priority-top">
                <span className="priority-icon">{icon}</span>
                <span className="priority-no">0{i + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
        <div className="page-cta">
          <Link className="button button-orange" to="/vikas">सभी प्राथमिकताएँ देखें →</Link>
        </div>
      </section>

      <section className="section contact home-contact">
        <div className="contact-copy">
          <span className="eyebrow light">जनसंपर्क</span>
          <h2>थांरी बात<br /><em>हम तक पहुँचाओ</em></h2>
          <p>गाँव की समस्या या सुझाव साझा करने के लिए संपर्क पेज पर जाएँ।</p>
          <Link className="button button-orange" to="/sampark">संपर्क और सुझाव →</Link>
        </div>
        <div className="social-list">
          <div><span>01</span><p><b>श्री रामस्वरूप बरोड़</b><small>सरपंच पद के उम्मीदवार</small></p></div>
          <div><span>02</span><p><b>फोन संपर्क</b><small>{PHONE}</small></p></div>
          <div><span>03</span><p><b>WhatsApp संपर्क</b><small>सुझाव और समस्याओं के लिए</small></p></div>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <section className="section about">
      <SectionTitle
        tag="01 / परिचय"
        title="श्री रामस्वरूप बरोड़ का परिचय"
        desc="सरपंच पद के उम्मीदवार · कीकर वाली जोहड़ी"
      />
      <div className="about-grid">
        <div className="about-picture">
          <Photo src={import.meta.env.BASE_URL + "gallery-1.jpg"} alt="जनसंपर्क की तस्वीर" number="1" />
          <span>कीकर वाली जोहड़ी · जनसंपर्क</span>
        </div>
        <div className="about-copy">
          <h3>सादगी, मेहनत और व्यवहारिक सोच</h3>
          <p>
            श्री रामस्वरूप बरोड़ स्थानीय जीवन और ग्रामीण जरूरतों को करीब से
            समझने वाले व्यक्ति हैं। आटा चक्की चलाने के अनुभव से वे मेहनत,
            समय की कीमत और रोजमर्रा की समस्याओं को समझते हैं।
          </p>
          <p>
            उनकी सोच व्यवहारिक और तर्क पर आधारित है। किसी भी विषय पर राय
            बनाने से पहले बात सुनना, समस्या समझना और उपलब्ध विकल्पों पर
            विचार करना जरूरी मानते हैं।
          </p>
          <p>
            इस वेबसाइट का उद्देश्य पंचायत क्षेत्र की प्राथमिकताओं,
            जनसंपर्क गतिविधियों और नागरिकों के सुझावों को एक जगह उपलब्ध
            कराना है।
          </p>
          <div className="values">
            <span>ईमानदारी</span><span>संवाद</span><span>जवाबदेही</span><span>व्यवहारिक सोच</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrioritiesPage() {
  return (
    <section className="section priorities">
      <SectionTitle
        tag="02 / विकास प्राथमिकताएँ"
        title="गाँव की जरूरतें, साफ़ प्राथमिकताएँ"
        desc="स्थानीय समस्याओं को सुनकर और उपलब्ध संसाधनों के अनुसार आगे बढ़ने के विषय।"
      />
      <div className="priority-grid">
        {priorities.map(([icon, title, desc], i) => (
          <article className="priority-card" key={title}>
            <div className="priority-top">
              <span className="priority-icon">{icon}</span>
              <span className="priority-no">0{i + 1}</span>
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>
      <p className="disclaimer">
        नोट: ये प्रस्तावित प्राथमिकताएँ हैं। कार्यों का क्रियान्वयन पंचायत के
        अधिकार, बजट, स्वीकृति और उपलब्ध संसाधनों पर निर्भर करेगा।
      </p>
    </section>
  );
}

function SocialPage() {
  return (
    <>
      <section className="section social">
        <div className="social-panel">
          <div>
            <span className="eyebrow light">03 / सामाजिक पहल</span>
            <h2>गाँव की बात,<br /><em>गाँव के साथ</em></h2>
            <p>
              लोगों की जरूरत सुनना, सही जानकारी साझा करना और संबंधित विभाग
              तक समस्या पहुँचाने में मदद करना।
            </p>
          </div>
          <div className="social-list">
            <div><span>01</span><p><b>जनसंवाद</b><small>ग्रामीणों के सुझाव और शिकायतें सुनना।</small></p></div>
            <div><span>02</span><p><b>योजना की जानकारी</b><small>सरकारी योजनाओं के सही स्रोतों तक मार्गदर्शन।</small></p></div>
            <div><span>03</span><p><b>सामुदायिक सहयोग</b><small>सफाई, शिक्षा और सार्वजनिक सुविधाओं पर प्रयास।</small></p></div>
            <div><span>04</span><p><b>पारदर्शिता</b><small>जानकारी और कामकाज में स्पष्टता की पहल।</small></p></div>
          </div>
        </div>
      </section>
      <section className="section slogans">
        <SectionTitle
          tag="म्हारो गाँव, म्हारी बात"
          title="बागड़ी में छोटा-सा संदेश"
          desc="गाँव की बोली में अपनापन और संवाद।"
        />
        <div className="slogan-grid">
          <blockquote>गाँव री बात,<br />गाँव रै साथ!</blockquote>
          <blockquote>हर ढाणी री सुनवाई,<br />सबने मिले बराबर अगवाई।</blockquote>
          <blockquote>पाणी, रस्ता अर सफाई,<br />गाँव री जरूरी कमाई।</blockquote>
          <blockquote>बातां सूं भरोसो,<br />काम सूं पहचान।</blockquote>
        </div>
      </section>
    </>
  );
}

function GalleryPage() {
  return (
    <section className="section gallery">
      <SectionTitle
        tag="05 / फोटो गैलरी"
        title="श्री रामस्वरूप बरोड़ — फोटो गैलरी"
        desc="जनसंपर्क और गाँव की गतिविधियों की तस्वीरें।"
      />
      <div className="gallery-grid">
        {photos.map(([src, alt], i) => (
          <Photo key={src} src={src} alt={alt} number={i + 1} />
        ))}
      </div>
      <p className="gallery-note">
        नई तस्वीरें जोड़ने के लिए उन्हें public फ़ोल्डर में gallery-1.jpg,
        gallery-2.jpg आदि नामों से रखें।
      </p>
    </section>
  );
}

function VideosPage() {
  return (
    <section className="section videos">
      <SectionTitle
        tag="06 / वीडियो गैलरी"
        title="वीडियो और संदेश"
        desc="जनसंवाद, गाँव की गतिविधियों और परिचय वीडियो के लिए अलग पेज।"
      />
      <div className="video-panel">
        <span className="video-icon">▶</span>
        <div>
          <span className="eyebrow">वीडियो सेक्शन</span>
          <h3>श्री रामस्वरूप बरोड़ — जनपरिचय</h3>
          <p>वीडियो उपलब्ध होने पर उसका YouTube लिंक या वीडियो फ़ाइल यहाँ जोड़ी जाएगी।</p>
        </div>
        <span className="video-tag">VIDEO</span>
      </div>
    </section>
  );
}

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    village: "",
    subject: "पेयजल",
    phone: "",
    details: "",
  });

  function submitProblem(e) {
    e.preventDefault();
    const message =
      "ग्राम समस्या / सुझाव\n\n" +
      "नाम: " + form.name + "\n" +
      "गाँव/ढाणी: " + form.village + "\n" +
      "विषय: " + form.subject + "\n" +
      "मोबाइल: " + (form.phone || "नहीं दिया") + "\n" +
      "विवरण: " + form.details;

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section className="section contact">
      <div className="contact-copy">
        <span className="eyebrow light">07 / संपर्क और सुझाव</span>
        <h2>थांरी बात<br /><em>हम तक पहुँचाओ</em></h2>
        <p>गाँव की समस्या या सुझाव साझा करें। फॉर्म सबमिट करने पर संदेश WhatsApp में खुलेगा।</p>

        <a className="contact-line" href={`tel:${PHONE}`}>
          <span>☎</span><div><small>संपर्क नंबर</small><b>{PHONE}</b></div>
        </a>
        <a className="contact-line" href={`https://wa.me/${WHATSAPP}`}>
          <span>◉</span><div><small>संपर्क टीम · WhatsApp</small><b>+91 87697 23698</b></div>
        </a>
        <a className="map-button" href={MAP_URL} target="_blank" rel="noreferrer">
          <span className="map-pin">📍</span>
          <span><b>लोकेशन देखें</b><small>Google Maps पर रास्ता खोलें ↗</small></span>
        </a>
        <p className="form-disclaimer">
          ध्यान दें: यह घर की लोकेशन है। सार्वजनिक वेबसाइट पर इसे दिखाने से
          पहले संबंधित व्यक्ति की सहमति सुनिश्चित करें।
        </p>
      </div>

      <form className="problem-form" onSubmit={submitProblem}>
        <h3>गाँव की समस्या / सुझाव</h3>
        <p>कृपया जानकारी भरें</p>

        <label>आपका नाम
          <input required value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            placeholder="अपना नाम लिखें" />
        </label>

        <label>गाँव / ढाणी
          <input required value={form.village}
            onChange={e => setForm({ ...form, village: e.target.value })}
            placeholder="गाँव या ढाणी का नाम" />
        </label>

        <label>समस्या का विषय
          <select value={form.subject}
            onChange={e => setForm({ ...form, subject: e.target.value })}>
            <option>पेयजल</option>
            <option>सड़क और रास्ते</option>
            <option>सफाई और नाली</option>
            <option>स्ट्रीट लाइट</option>
            <option>शिक्षा</option>
            <option>सरकारी योजना</option>
            <option>अन्य</option>
          </select>
        </label>

        <label>मोबाइल नंबर (वैकल्पिक)
          <input type="tel" value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            placeholder="मोबाइल नंबर" />
        </label>

        <label>समस्या का पूरा विवरण
          <textarea required rows="4" value={form.details}
            onChange={e => setForm({ ...form, details: e.target.value })}
            placeholder="समस्या या सुझाव लिखें..." />
        </label>

        <button className="submit-button" type="submit">WhatsApp पर संदेश भेजें ↗</button>
        <small className="form-disclaimer">
          यह फॉर्म WhatsApp में संदेश तैयार करता है; भेजने से पहले आप उसे देख सकते हैं।
        </small>
      </form>
    </section>
  );
}

export default function App() {
  return (
    <div className="website">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/parichay" element={<AboutPage />} />
          <Route path="/vikas" element={<PrioritiesPage />} />
          <Route path="/samaj" element={<SocialPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/sampark" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
