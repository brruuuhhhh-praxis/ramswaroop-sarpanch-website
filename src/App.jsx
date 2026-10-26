import React, { useState, useEffect } from "react";
import { Link, NavLink, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";

const PHONE = "7568118606";
const WHATSAPP = "918769723698";
const MAP_URL = "https://maps.app.goo.gl/5mnW3TxfeMWXJaB2A";

const navItems = [
  ["होम", "/"],
  ["परिचय", "/parichay"],
  ["घोषणापत्र", "/vikas"],
  ["सामाजिक पहल", "/samaj"],
  ["फोटो", "/gallery"],
  ["वीडियो", "/videos"],
  ["संपर्क", "/sampark"],
];

const priorities = [
  {
    icon: "💧",
    title: "स्वच्छ पेयजल और प्याऊ",
    summary: "घर-घर स्वच्छ पानी और गाँव के बीचोंबीच व मुख्य अड्डे पर सार्वजनिक प्याऊ की व्यवस्था।",
    role: "म्हारे लिए पानी हर परिवार की बुनियादी जरूरत है। म्हारी कोशिश रहवैगी कि गाँव के किसी परिवार नै स्वच्छ पानी के लिए अनावश्यक परेशानी नहीं उठाणी पड़ै।",
    problem: "घर तक पर्याप्त और स्वच्छ पानी पहुँचे, आपूर्ति नियमित रहै और गाँव में आने-जाने वाले यात्रियों को भी पीने का पानी उपलब्ध हो।",
    solution: [
      "मौजूदा जल व्यवस्था, पाइपलाइन, कनेक्शन और पानी की आपूर्ति की जरूरतों का सर्वे करवाऊँगा।",
      "पानी की गुणवत्ता और आपूर्ति संबंधी शिकायतों के समाधान के लिए संबंधित विभाग से समन्वय करूँगा।",
      "गाँव के बीचोंबीच एक सार्वजनिक प्याऊ स्थापित करवाने का प्रयास करूँगा।",
      "मुख्य अड्डे पर यात्रियों और राहगीरों के लिए प्याऊ तथा गर्मियों में उसके रखरखाव की व्यवस्था करवाने का प्रयास करूँगा।"
    ],
    timeline: "पहले 30 दिनों में जरूरतों का सर्वे और प्राथमिकता तय करने का लक्ष्य। इसके बाद आवश्यक स्वीकृति और संसाधन उपलब्ध होने पर सुधार तथा प्याऊ की व्यवस्था आगे बढ़ाई जाएगी।"
  },
  {
    icon: "🛣️",
    title: "सड़कें और ढाणी संपर्क मार्ग",
    summary: "जहाँ रास्ते नहीं हैं या आवागमन कठिन है, वहाँ सड़क निर्माण की जरूरत को प्राथमिकता।",
    role: "सड़क केवल आने-जाने का रास्तो कोनी; यह बच्चों की पढ़ाई, किसानों के काम और जरूरत पड़ने पर स्वास्थ्य सुविधा तक पहुँच से जुड़ी है।",
    problem: "गाँव और ढाणियों में रास्तों की कमी के कारण लोगों को रोजमर्रा के काम, स्कूल और मुख्य सड़क तक पहुँचने में परेशानी हो सकती है।",
    solution: [
      "गाँव और सभी ढाणियों के प्रमुख रास्तों का सर्वे करवाकर जरूरत के हिसाब से सूची तैयार करूँगा।",
      "स्कूल, स्वास्थ्य सुविधा, मुख्य सड़क और सार्वजनिक स्थानों तक जाने वाले मार्गों को प्राथमिकता देने का प्रयास करूँगा।",
      "उचित जल निकासी और बरसात में आवागमन को ध्यान में रखकर सड़क निर्माण के प्रस्ताव बनवाऊँगा।",
      "जहाँ दूसरे विभागों की स्वीकृति जरूरी होगी, वहाँ लगातार संपर्क और पैरवी करूँगा।"
    ],
    timeline: "पहले 30 दिनों में रास्तों की सूची और प्राथमिकता तैयार करने का लक्ष्य। अगले 2–3 महीनों में प्रस्तावों और स्वीकृत कार्यों को आगे बढ़ाने का प्रयास; निर्माण की गति बजट और मंजूरी पर निर्भर होगी।"
  },
  {
    icon: "🧹",
    title: "नाली निर्माण और सफाई व्यवस्था",
    summary: "जहाँ नालियाँ नहीं हैं, वहाँ जरूरत के अनुसार नई नालियाँ और पानी निकासी की व्यवस्था।",
    role: "जहाँ नालियाँ बनी ही नहीं हैं, वहाँ केवल सफाई की बात काफी नहीं। पहले गंदे पानी की उचित निकासी की व्यवस्था बनानी जरूरी है।",
    problem: "नालियों के अभाव में घरों से निकलने वाला पानी गलियों में जमा हो सकता है, जिससे गंदगी और असुविधा होती है।",
    solution: [
      "गाँव और ढाणियों में नाली की जरूरत वाले स्थानों तथा पानी जमा होने वाले बिंदुओं का सर्वे करवाऊँगा।",
      "उचित ढलान और निकासी को ध्यान में रखकर नाली निर्माण के प्रस्ताव तैयार करवाऊँगा।",
      "नाली निर्माण को सफाई और कचरा निस्तारण की नियमित व्यवस्था से जोड़ने का प्रयास करूँगा।",
      "निर्माण ऐसा हो कि गंदा पानी एक जगह से दूसरी जगह समस्या न बनाए।"
    ],
    timeline: "पहले 30 दिनों में जरूरत वाले स्थानों की पहचान और योजना बनाने का लक्ष्य। नाली निर्माण प्राथमिकता, बजट और स्वीकृति के अनुसार आगे बढ़ाया जाएगा।"
  },
  {
    icon: "💡",
    title: "स्ट्रीट लाइट और सुरक्षित रास्ते",
    summary: "गाँव की गलियों, सार्वजनिक स्थानों, मुख्य रास्तों और ढाणियों में रोशनी की नई व्यवस्था।",
    role: "रात में गलियाँ और रास्ते अँधेरे में न रहें। रोशनी से बच्चों, बुजुर्गों और सभी ग्रामीणों के आने-जाने में सुविधा होगी।",
    problem: "जहाँ स्ट्रीट लाइट नहीं है, वहाँ रात में आवागमन और सार्वजनिक स्थानों का उपयोग कठिन हो जाता है।",
    solution: [
      "अँधेरी गलियों, मुख्य रास्तों, सार्वजनिक स्थानों और ढाणियों की सूची तैयार करवाऊँगा।",
      "जरूरत के अनुसार नई स्ट्रीट लाइट लगाने के प्रस्ताव बनवाऊँगा।",
      "जहाँ उपयोगी हो, वहाँ सोलर लाइट के विकल्प पर भी विचार किया जाएगा।",
      "लाइट लगने के बाद मरम्मत और रखरखाव की व्यवस्था पर भी ध्यान दूँगा।"
    ],
    timeline: "पहले 30 दिनों में सर्वे और प्राथमिकता तय करने का लक्ष्य। आवश्यक स्वीकृति और संसाधन मिलने पर प्राथमिक स्थानों पर लाइट लगाने की प्रक्रिया शुरू करवाने का प्रयास।"
  },
  {
    icon: "📚",
    title: "शिक्षा, लाइब्रेरी और खेल मैदान",
    summary: "बच्चों के लिए अध्ययन केंद्र, दूर की ढाणियों के विद्यार्थियों के आवागमन में मदद और खेल मैदान।",
    role: "म्हारो मानणो है कि कोई बच्चो केवल इसलिए पीछे नहीं रहना चाहिए कि वह दूर की ढाणी में रहता है या उसके पास पढ़ने की सही जगह नहीं है।",
    problem: "विद्यार्थियों को शांत अध्ययन स्थान, किताबों, प्रतियोगी परीक्षाओं की सामग्री, स्कूल तक पहुँच और खेल के मैदान की जरूरत हो सकती है।",
    solution: [
      "पंचायत भवन या किसी उपयुक्त सार्वजनिक स्थान पर लाइब्रेरी/अध्ययन केंद्र विकसित करवाने की संभावनाएँ देखूँगा।",
      "किताबें, समाचार-पत्र और प्रतियोगी परीक्षाओं की उपयोगी अध्ययन सामग्री जुटाने के लिए सहयोग करूँगा।",
      "दूरस्थ ढाणियों से स्कूल जाने वाले बच्चों की आवागमन समस्या का सर्वे करवाकर शिक्षा विभाग से उचित व्यवस्था पर समन्वय करूँगा।",
      "उपयुक्त भूमि की उपलब्धता और जरूरी प्रक्रिया के अनुसार खेल मैदान विकसित करवाने का प्रयास करूँगा।",
      "कबड्डी, वॉलीबॉल और अन्य खेल गतिविधियों को बढ़ावा देने के लिए स्थानीय युवाओं के साथ पहल करूँगा।"
    ],
    timeline: "पहले 30–60 दिनों में बच्चों की जरूरत, उपलब्ध स्थान और भूमि का सर्वे करने का लक्ष्य। उसके बाद संबंधित विभागों, संसाधनों और स्वीकृतियों के अनुसार कार्य आगे बढ़ाए जाएँगे।"
  },
  {
    icon: "🤝",
    title: "जनसमस्याएँ और पारदर्शिता",
    summary: "शिकायत दर्ज करने, काम की स्थिति बताने और ग्रामसभा में ग्रामीणों की भागीदारी की व्यवस्था।",
    role: "सरपंच की जिम्मेदारी केवल समस्या सुनना नहीं, बल्कि उसका हिसाब रखना, समाधान के लिए प्रयास करना और लोगों को प्रगति बताना भी है।",
    problem: "कभी-कभी लोगों को यह पता नहीं चल पाता कि उनकी शिकायत कहाँ पहुँची, काम कब होगा या किस विभाग से संपर्क करना है।",
    solution: [
      "गाँव की समस्याएँ दर्ज करने और उन्हें पानी, सड़क, सफाई, रोशनी, शिक्षा जैसे विषयों में बाँटने की उचित व्यवस्था विकसित करवाऊँगा।",
      "ग्रामसभा में ग्रामीणों की भागीदारी और स्थानीय प्राथमिकताओं पर चर्चा को बढ़ावा दूँगा।",
      "पंचायत के अधिकार क्षेत्र में आने वाले स्वीकृत कार्यों और उनकी प्रगति की जानकारी सार्वजनिक करने का प्रयास करूँगा।",
      "दूसरे विभागों से जुड़े मामलों में संबंधित अधिकारियों से संपर्क करूँगा और उपलब्ध स्थिति लोगों को बताऊँगा।"
    ],
    timeline: "पहले 30 दिनों में शिकायत और सुझाव दर्ज करने की व्यवस्था विकसित करने का लक्ष्य। इसके बाद नियमित रूप से प्रगति की समीक्षा और जानकारी साझा करने का प्रयास।"
  },
  {
    icon: "🤖",
    title: "AI, कंप्यूटर और निःशुल्क कोडिंग प्रशिक्षण",
    summary: "गाँव के युवाओं को AI, कंप्यूटर, वेबसाइट, सॉफ्टवेयर और प्रोग्रामिंग सीखने के अवसर।",
    role: "आज का समय तेजी से बदल रहा है। म्हारो सपना है कि गाँव का युवा केवल तकनीक का इस्तेमाल करने वाला ही नहीं, बल्कि खुद वेबसाइट और सॉफ्टवेयर बनाना भी सीखै।",
    problem: "गाँव और ढाणियों के कई युवाओं को कंप्यूटर, इंटरनेट, AI और प्रोग्रामिंग की व्यावहारिक ट्रेनिंग के पर्याप्त अवसर नहीं मिल पाते।",
    solution: [
      "युवाओं के लिए निःशुल्क कंप्यूटर और AI प्रशिक्षण की व्यवस्था करवाने का प्रयास करूँगा।",
      "कंप्यूटर की बुनियादी जानकारी, इंटरनेट सुरक्षा और AI टूल्स के सही उपयोग को प्रशिक्षण में शामिल करने का प्रयास रहेगा।",
      "संसाधन और प्रशिक्षक उपलब्ध होने के अनुसार Python, C++, Java जैसी प्रोग्रामिंग भाषाओं और वेबसाइट बनाने की ट्रेनिंग शामिल की जाएगी।",
      "युवाओं को छोटे प्रोजेक्ट बनाना, वेबसाइट/सॉफ्टवेयर विकसित करना और डिजिटल कौशल के आधार पर रोजगार या स्वरोजगार तलाशना सिखाने पर जोर रहेगा।",
      "प्रशिक्षण के लिए संस्थानों, प्रशिक्षकों और तकनीकी संगठनों से सहयोग जुटाने की कोशिश करूँगा, ताकि प्रशिक्षण युवाओं को निःशुल्क उपलब्ध कराया जा सके।"
    ],
    timeline: "पहले 30 दिनों में युवाओं की रुचि और उपलब्ध कंप्यूटर/इंटरनेट संसाधनों का सर्वे करने का लक्ष्य। 60–90 दिनों में प्रशिक्षक, स्थान और संसाधन जुटाकर पहला बैच शुरू करने का प्रयास।"
  }
];

const photos = [
  [(import.meta.env.BASE_URL + "gallery-1.webp"), "जनसंपर्क की तस्वीर"],
  [(import.meta.env.BASE_URL + "gallery-2.webp"), "ग्रामवासियों के साथ मुलाकात"],
  [(import.meta.env.BASE_URL + "gallery-3.webp"), "गाँव की गतिविधि"],
  [(import.meta.env.BASE_URL + "gallery-4.webp"), "ग्रामीणों के साथ संवाद"],
  [(import.meta.env.BASE_URL + "rural-meet-01.webp"), "जनसंपर्क और ग्रामीण गतिविधि 1"],
  [(import.meta.env.BASE_URL + "rural-meet-02.webp"), "जनसंपर्क और ग्रामीण गतिविधि 2"],
  [(import.meta.env.BASE_URL + "rural-meet-03.webp"), "जनसंपर्क और ग्रामीण गतिविधि 3"],
  [(import.meta.env.BASE_URL + "rural-meet-04.webp"), "जनसंपर्क और ग्रामीण गतिविधि 4"],
  [(import.meta.env.BASE_URL + "rural-meet-05.webp"), "जनसंपर्क और ग्रामीण गतिविधि 5"],
  [(import.meta.env.BASE_URL + "rural-meet-06.webp"), "जनसंपर्क और ग्रामीण गतिविधि 6"],
  [(import.meta.env.BASE_URL + "rural-meet-07.webp"), "जनसंपर्क और ग्रामीण गतिविधि 7"],
  [(import.meta.env.BASE_URL + "rural-meet-08.webp"), "जनसंपर्क और ग्रामीण गतिविधि 8"],
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

/* PREMIUM GALLERY PATCH V1 */
function Photo({ src, alt, number }) {
  return (
    <figure className="photo-tile">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.parentElement.classList.add("photo-missing");
        }}
      />
      <div className="photo-placeholder" aria-hidden="true">
        <span>📷</span>
        <b>{alt || `फोटो ${number}`}</b>
        <small>तस्वीर फिलहाल उपलब्ध नहीं है</small>
      </div>
      <figcaption className="photo-caption">
        <span>{String(number).padStart(2, "0")}</span>
        <b>{alt}</b>
      </figcaption>
    </figure>
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
          <img className="brand-face-icon" src={import.meta.env.BASE_URL + "candidate-face-optimized.webp"} alt="श्री रामस्वरूप बरोड़" width="160" height="160" decoding="async" />
          <span className="brand-text">
            <b>श्री रामस्वरूप बरोड़</b>
            <small>सरपंच पद के उम्मीदवार</small>
          </span>
        </Link>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "मेन्यू बंद करें" : "मेन्यू खोलें"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav id="primary-navigation" className={menuOpen ? "navigation nav-open" : "navigation"}>
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
            <img src={import.meta.env.BASE_URL + "candidate-full.webp"} alt="श्री रामस्वरूप बरोड़ की पूरी राजस्थानी पोशाक वाली तस्वीर" width="900" height="1200" loading="lazy" decoding="async" />
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
          tag="घोषणापत्र की प्राथमिकताएँ"
          title="म्हारो गाँव, म्हारी जिम्मेदारी"
          desc="हर परिवार की जरूरत, हर ढाणी तक सुविधा और हर काम का हिसाब।"
        />
        <div className="priority-grid">
          {priorities.slice(0, 3).map((item, i) => (
            <article className="priority-card" key={item.title}>
              <div className="priority-top">
                <span className="priority-icon">{item.icon}</span>
                <span className="priority-no">0{i + 1}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
        <div className="page-cta">
          <Link className="button button-orange" to="/vikas">पूरा घोषणापत्र पढ़ें →</Link>
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
          <Photo src={import.meta.env.BASE_URL + "gallery-1.webp"} alt="जनसंपर्क की तस्वीर" number="1" />
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
        tag="02 / घोषणापत्र"
        title="म्हारो गाँव, म्हारी जिम्मेदारी"
        desc="मैं गाँव की समस्याओं को सुनकर, लोगों के साथ मिलकर और उपलब्ध संसाधनों का सही उपयोग करते हुए समाधान की दिशा में काम करने का संकल्प लेता हूँ।"
      />
      <div className="manifesto-intro">
        <p>म्हारे लिए सरपंच बनणो केवल एक पद पाणो कोनी, बल्कि गाँव के हर परिवार की जिम्मेदारी उठाणो है। विकास केवल गाँव के बीच तक सीमित नहीं रहणो चाहिए—हर गली, हर ढाणी और हर युवा तक सुविधाएँ पहुँचें, यही म्हारी प्राथमिकता रहवैगी।</p>
      </div>
      <div className="priority-grid manifesto-grid">
        {priorities.map((item, i) => (
          <article className="priority-card manifesto-card" key={item.title}>
            <div className="priority-top">
              <span className="priority-icon">{item.icon}</span>
              <span className="priority-no">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <details className="manifesto-details">
              <summary>विस्तार से पढ़ें <span aria-hidden="true">＋</span></summary>
              <div className="manifesto-detail-content">
                <section>
                  <h4>म्हारी सोच</h4>
                  <p>{item.role}</p>
                </section>
                <section>
                  <h4>समस्या / जरूरत</h4>
                  <p>{item.problem}</p>
                </section>
                <section>
                  <h4>म्हारा समाधान</h4>
                  <ul>{item.solution.map((point, pointIndex) => <li key={pointIndex}>{point}</li>)}</ul>
                </section>
                <section className="manifesto-timeline">
                  <h4>लक्ष्य और समय</h4>
                  <p>{item.timeline}</p>
                </section>
              </div>
            </details>
          </article>
        ))}
      </div>
      <div className="manifesto-closing">
        <span className="eyebrow">म्हारो संकल्प</span>
        <h3>विकास केवल गाँव के बीच तक सीमित नहीं, हर ढाणी तक पहुँचना चाहिए।</h3>
        <p>म्हारी कोशिश रहवैगी कि हर परिवार की बात सम्मान से सुनी जाए, समस्याओं की प्राथमिकता तय हो और काम की प्रगति लोगों तक पहुँचती रहै।</p>
      </div>
      <p className="disclaimer">
        नोट: ये विकास संकल्प और प्रस्तावित लक्ष्य हैं। निर्माण, परिवहन और प्रशिक्षण से जुड़े कार्य पंचायत के अधिकार, बजट, भूमि, विभागीय स्वीकृति तथा उपलब्ध संसाधनों के अनुसार आगे बढ़ाए जाएँगे।
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
        नई तस्वीरें जोड़ने के लिए उन्हें public फ़ोल्डर में gallery-1.webp,
        gallery-2.webp आदि नामों से रखें।
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
            <option>शिक्षा, लाइब्रेरी और खेल मैदान</option>
            <option>AI और कंप्यूटर प्रशिक्षण</option>
            <option>जनसमस्या और पारदर्शिता</option>
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
