
import React from 'react';
import { useLanguage } from '../App';
import { UI_STRINGS } from '../translations';

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = (key: string) => UI_STRINGS[key][language];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-green-600 font-bold tracking-widest uppercase text-sm">{t('about_tag')}</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-8 leading-tight">
              {t('about_title')}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              {t('about_desc')}
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-green-200 transition-colors">
                <div className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">01</div>
                <div>
                  <h4 className="font-bold text-xl mb-1">{t('vision_title')}</h4>
                  <p className="text-slate-500">{t('vision_desc')}</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-green-200 transition-colors">
                <div className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">02</div>
                <div>
                  <h4 className="font-bold text-xl mb-1">{t('mission_title')}</h4>
                  <p className="text-slate-500">{t('mission_desc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1579152276503-3467e2680456?auto=format&fit=crop&q=80&w=400" alt="Lab Work" className="rounded-3xl shadow-lg w-full h-[300px] object-cover" />
              <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=400" alt="Soil Samples" className="rounded-3xl shadow-lg w-full h-[200px] object-cover" />
            </div>
            <div className="space-y-4 pt-8">
              <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400" alt="Nature" className="rounded-3xl shadow-lg w-full h-[200px] object-cover" />
              <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=400" alt="Microbes" className="rounded-3xl shadow-lg w-full h-[300px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
