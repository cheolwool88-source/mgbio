
import React, { useState, createContext, useContext } from 'react';
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

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

function App() {
  const [language, setLanguage] = useState<Language>('ko');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <BusinessAreas />
          <SuccessStories />
          <Metrics />
          <TechResearch />
          <div className="py-20 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h3 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-12">Global Partners</h3>
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40">
                <span className="text-2xl font-black">SAMSUNG</span>
                <span className="text-2xl font-black">LG Bio</span>
                <span className="text-2xl font-black">CJ CheilJedang</span>
                <span className="text-2xl font-black">China Agri</span>
                <span className="text-2xl font-black">NatureCare</span>
              </div>
            </div>
          </div>
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
