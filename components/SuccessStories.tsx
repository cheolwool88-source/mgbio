
import React from 'react';
import { SUCCESS_STORIES } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../App';
import { UI_STRINGS } from '../translations';

interface SuccessStoriesProps {
  isStandalone?: boolean;
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ isStandalone = false }) => {
  const { language } = useLanguage();
  const t = (key: string) => UI_STRINGS[key][language];

  return (
    <section 
      id="cases" 
      className={`py-24 transition-colors duration-500 ${isStandalone ? 'bg-white min-h-screen' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-green-600 font-bold tracking-widest uppercase text-sm">{t('cases_tag')}</span>
            <h2 className="text-3xl lg:text-5xl font-bold mt-4 leading-tight">{t('cases_title')}</h2>
          </div>
          <p className="text-slate-500 max-w-md text-lg">{t('cases_desc')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {SUCCESS_STORIES.map((story, index) => (
          <div key={story.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-1/2 relative group">
              <div className="rounded-[40px] overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  src={story.imageUrl} 
                  alt={story.title[language]} 
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              {/* Floating Metrics */}
              <div className="absolute -bottom-8 right-8 flex gap-4">
                {story.metrics?.map((m, idx) => (
                  <div key={idx} className="bg-green-600 text-white p-5 rounded-3xl shadow-2xl min-w-[140px] border border-green-500/20 backdrop-blur-sm">
                    <div className="text-xs opacity-80 font-bold tracking-wider uppercase mb-1">{m.label[language]}</div>
                    <div className="text-3xl font-black">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 space-y-8 p-4">
              <div className="inline-block bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">
                Case #{story.id} — {story.location[language]}
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">{story.title[language]}</h3>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-1.5 h-auto bg-red-400 rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-slate-400 uppercase text-xs tracking-widest mb-2">{t('cases_challenge')}</h4>
                    <p className="text-slate-600 leading-relaxed">{story.challenge[language]}</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-1.5 h-auto bg-green-500 rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-green-600 uppercase text-xs tracking-widest mb-2">{t('cases_solution')}</h4>
                    <p className="text-slate-600 leading-relaxed">{story.solution[language]}</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-1.5 h-auto bg-blue-500 rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="font-black text-blue-500 uppercase text-xs tracking-widest mb-2">{t('cases_result')}</h4>
                    <div className="flex items-center gap-3 text-slate-900 font-bold text-xl">
                      <CheckCircle2 className="text-green-500 w-6 h-6" />
                      {story.result[language]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {isStandalone && (
        <div className="max-w-7xl mx-auto px-6 mt-32 text-center">
          <div className="bg-slate-50 rounded-[40px] p-12 lg:p-20 border border-slate-100">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-slate-900">
              {t('contact_title')}
            </h3>
            <button 
              onClick={() => window.location.hash = '#contact'}
              className="px-10 py-4 bg-green-600 text-white rounded-2xl font-bold text-lg hover:bg-green-700 transition-all shadow-xl shadow-green-200"
            >
              {t('btn_consulting')}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SuccessStories;
