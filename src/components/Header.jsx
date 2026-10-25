import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Landmark, Menu, X } from 'lucide-react';
import { navItems } from '../data.js';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const go = (path) => { setMenuOpen(false); navigate(path); };

  return (
    <header className="site-header">
      <a href="/" className="brand-lockup" onClick={(e) => { e.preventDefault(); go('/'); }} aria-label="होम">
        <span className="brand-mark"><Landmark size={22} /></span>
        <span className="brand-copy"><strong>रामस्वरूप बरोड</strong><small>जनसेवा • सूरतगढ़</small></span>
      </a>
      <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="मुख्य नेविगेशन">
        {navItems.map(([label, path]) => <button key={path} onClick={() => go(path)}>{label}</button>)}
        <button className="nav-cta" onClick={() => go('/sampark')}>जुड़ें <ArrowRight size={16} /></button>
      </nav>
      <button type="button" className="mobile-menu" aria-label={menuOpen ? 'मेन्यू बंद करें' : 'मेन्यू खोलें'} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={23} /> : <Menu size={23} />}
      </button>
    </header>
  );
}
