
import React from 'react';
import { useLanguage } from '../App';
import { UI_STRINGS } from '../translations';

interface AboutProps {
  isStandalone?: boolean;
}

const About: React.FC<AboutProps> = ({ isStandalone = false }) => {
  const { language, setView } = useLanguage();
  const t = (key: string) => UI_STRINGS[key][language];

  return (
    <section 
      id="about" 
      className={`py-24 transition-colors duration-500 ${isStandalone ? 'bg-white min-h-screen' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <span className="text-green-600 font-bold tracking-widest uppercase text-sm">{t('about_tag')}</span>
            <h2 className="text-3xl lg:text-5xl font-bold mt-4 mb-8 leading-tight text-slate-900">
              {t('about_title')}
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              {t('about_desc')}
            </p>

            <div className="space-y-6">
              <div className="group flex gap-5 p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:border-green-200 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-green-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg shadow-green-100 group-hover:scale-110 transition-transform">01</div>
                <div>
                  <h4 className="font-bold text-2xl mb-2 text-slate-900">{t('vision_title')}</h4>
                  <p className="text-slate-500 text-lg leading-relaxed">{t('vision_desc')}</p>
                </div>
              </div>
              <div className="group flex gap-5 p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:border-green-200 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-green-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg shadow-green-100 group-hover:scale-110 transition-transform">02</div>
                <div>
                  <h4 className="font-bold text-2xl mb-2 text-slate-900">{t('mission_title')}</h4>
                  <p className="text-slate-500 text-lg leading-relaxed">{t('mission_desc')}</p>
                </div>
              </div>
            </div>

            {isStandalone && (
              <div className="mt-12 flex gap-4">
                <button 
                  onClick={() => setView('business')}
                  className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 shadow-lg shadow-green-200 transition-all"
                >
                  {t('nav_business')} {t('view_more')}
                </button>
                <button 
                  onClick={() => setView('contact')}
                  className="px-8 py-4 bg-slate-100 text-slate-700 rounded-xl font-bold text-lg hover:bg-slate-200 transition-all"
                >
                  {t('nav_contact')}
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col justify-center">
              <div className="overflow-hidden rounded-[40px] shadow-2xl relative group">
                <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=600" alt="Soil Samples" className="w-full h-[600px] object-cover hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="overflow-hidden rounded-[40px] shadow-xl relative group">
                <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600" alt="Nature" className="w-full h-[280px] object-cover hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="overflow-hidden rounded-[40px] shadow-2xl relative group">
                <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600" alt="Microbes" className="w-full h-[300px] object-cover hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
