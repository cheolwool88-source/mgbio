
import React from 'react';
import { BUSINESS_AREAS } from '../constants';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { useLanguage } from '../App';
import { UI_STRINGS } from '../translations';

interface BusinessAreasProps {
  isStandalone?: boolean;
}

const BusinessAreas: React.FC<BusinessAreasProps> = ({ isStandalone = false }) => {
  const { language } = useLanguage();
  const t = (key: string) => UI_STRINGS[key][language];

  return (
    <section 
      id="business" 
      className={`py-24 transition-colors duration-500 ${isStandalone ? 'bg-white min-h-screen' : 'bg-slate-50'}`}
    >
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <span className="text-green-600 font-bold tracking-widest uppercase text-sm">{t('business_tag')}</span>
        <h2 className="text-3xl lg:text-5xl font-bold mt-4 text-slate-900 leading-tight">
          {t('business_title')}
        </h2>
        {isStandalone && (
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg">
            {t('hero_desc')}
          </p>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        {BUSINESS_AREAS.map((area) => (
          <div key={area.id} className="group bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col md:flex-row">
            <div className="md:w-2/5 relative">
              <img 
                src={area.imageUrl} 
                alt={area.title[language]} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 min-h-[300px]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent md:hidden" />
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur p-4 rounded-3xl shadow-lg z-10">
                {area.icon}
              </div>
            </div>

            <div className="md:w-3/5 p-8 lg:p-10 flex flex-col">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-green-600 transition-colors leading-tight">
                {area.title[language]}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {area.description[language]}
              </p>

              <div className="space-y-8 flex-grow">
                <div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-green-500"></span>
                    {area.detailsLabel[language]}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                    {area.details[language].map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <ChevronRight className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 bg-green-50 rounded-3xl border border-green-100">
                  <h4 className="text-xs font-black text-green-700 uppercase tracking-[0.2em] mb-4">
                    {area.resultsLabel[language]}
                  </h4>
                  <div className="space-y-2">
                    {area.results[language].map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm font-bold text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessAreas;
