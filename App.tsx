
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import BusinessAreas from './components/BusinessAreas';
import SuccessStories from './components/SuccessStories';
import Metrics from './components/Metrics';
import TechResearch from './components/TechResearch';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <BusinessAreas />
        <SuccessStories />
        <Metrics />
        <TechResearch />
        {/* Customer Logos / Partner Section could go here */}
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
  );
}

export default App;
