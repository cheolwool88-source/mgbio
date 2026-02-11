
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../App';
import { UI_STRINGS } from '../translations';
import { Language } from '../types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { language, setLanguage, setView, view } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const t = (key: string) => UI_STRINGS[key][language];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#contact') {
      setView('contact');
    } else if (href === '#business') {
      setView('business');
    } else if (href === '#cases') {
      setView('cases');
    } else if (href === '#tech') {
      setView('tech');
    } else if (href === '#about') {
      setView('about');
    } else {
      setView('home');
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: t('nav_about'), href: '#about' },
    { name: t('nav_business'), href: '#business' },
    { name: t('nav_cases'), href: '#cases' },
    { name: t('nav_tech'), href: '#tech' },
    { name: t('nav_contact'), href: '#contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'ko', label: '한국어 (KO)' },
    { code: 'zh', label: '中文 (ZH)' },
    { code: 'en', label: 'English (EN)' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || view !== 'home' ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => setView('home')}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            MG Bio Serve
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm font-medium transition-colors ${
                (item.href === '#contact' && view === 'contact') || 
                (item.href === '#business' && view === 'business') ||
                (item.href === '#cases' && view === 'cases') ||
                (item.href === '#tech' && view === 'tech') ||
                (item.href === '#about' && view === 'about')
                ? 'text-green-600' : 'text-slate-600 hover:text-green-600'
              }`}
            >
              {item.name}
            </a>
          ))}
          
          {/* Language Selector */}
          <div className="relative" ref={langRef}>
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-green-600 transition-colors px-3 py-1 rounded-full border border-slate-200"
            >
              <Globe size={16} />
              <span className="uppercase">{language}</span>
              <ChevronDown size={14} className={`transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-slate-100 py-2 overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${language === lang.code ? 'bg-green-50 text-green-600 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={() => setView('contact')}
            className="bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors"
          >
            {t('btn_consulting')}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button className="text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b absolute top-full left-0 right-0 p-6 flex flex-col gap-4 shadow-xl">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-lg font-medium text-slate-700"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.name}
            </a>
          ))}
          <div className="border-t pt-4 mt-2">
            <div className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">Language</div>
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1 rounded-full text-sm border ${language === lang.code ? 'bg-green-600 text-white border-green-600' : 'text-slate-600 border-slate-200'}`}
                >
                  {lang.code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
