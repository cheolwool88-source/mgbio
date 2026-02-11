
import React from 'react';
import { useLanguage } from '../App';
import { UI_STRINGS } from '../translations';

const Footer: React.FC = () => {
  const { language, setView } = useLanguage();
  const t = (key: string) => UI_STRINGS[key][language];

  return (
    <footer className="bg-slate-50 py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <button 
              onClick={() => setView('home')}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                MG Bio Serve
              </span>
            </button>
            <p className="text-slate-500 text-sm leading-relaxed">
              {t('footer_desc')}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">{t('footer_company')}</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><button onClick={() => setView('about')} className="hover:text-green-600">{t('nav_about')}</button></li>
              <li><button onClick={() => setView('cases')} className="hover:text-green-600">{t('nav_cases')}</button></li>
              <li><button onClick={() => setView('tech')} className="hover:text-green-600">{t('nav_tech')}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">{t('footer_business')}</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><button onClick={() => setView('business')} className="hover:text-green-600">Bio Solution</button></li>
              <li><button onClick={() => setView('business')} className="hover:text-green-600">Waste Tech</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">{t('footer_support')}</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><button onClick={() => setView('contact')} className="hover:text-green-600">{t('nav_contact')}</button></li>
              <li><a href="#" className="hover:text-green-600">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>{t('footer_rights')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600">Linkedin</a>
            <a href="#" className="hover:text-slate-600">Youtube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
