
import React, { useState, createContext, useContext, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import BusinessAreas from './components/BusinessAreas';
import SuccessStories from './components/SuccessStories';
import Metrics from './components/Metrics';
import TechResearch from './components/TechResearch';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Language } from './types';
import { UI_STRINGS } from './translations';

type ViewType = 'home' | 'contact' | 'business' | 'cases' | 'tech' | 'about';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  view: ViewType;
  setView: (view: ViewType) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

function App() {
  const [language, setLanguage] = useState<Language>('ko');
  const [view, setView] = useState<ViewType>('home');

  // 페이지 상단으로 스크롤 이동 (뷰 전환 시)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const t = (key: string) => UI_STRINGS[key][language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, view, setView }}>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="transition-opacity duration-300">
          {view === 'home' ? (
            <>
              <Hero />
              <div className="py-20 bg-slate-50 overflow-hidden border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 text-center">
                  <h3 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-12">{t('home_partners_title')}</h3>
                  <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40">
                    <span className="text-2xl font-black">SAMSUNG</span>
                    <span className="text-2xl font-black">LG Bio</span>
                    <span className="text-2xl font-black">CJ CheilJedang</span>
                    <span className="text-2xl font-black">China Agri</span>
                    <span className="text-2xl font-black">NatureCare</span>
                  </div>
                </div>
              </div>
              <Metrics />
            </>
          ) : view === 'about' ? (
            <div className="pt-20">
              <About isStandalone={true} />
            </div>
          ) : view === 'business' ? (
            <div className="pt-20">
              <BusinessAreas isStandalone={true} />
            </div>
          ) : view === 'cases' ? (
            <div className="pt-20">
              <SuccessStories isStandalone={true} />
            </div>
          ) : view === 'tech' ? (
            <div className="pt-20">
              <TechResearch isStandalone={true} />
            </div>
          ) : (
            <div className="pt-20">
              <Contact isStandalone={true} />
            </div>
          )}
        </main>
        
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
