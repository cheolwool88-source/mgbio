
import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../App';
import { UI_STRINGS } from '../translations';

interface ContactProps {
  isStandalone?: boolean;
}

const Contact: React.FC<ContactProps> = ({ isStandalone = false }) => {
  const { language } = useLanguage();
  const t = (key: string) => UI_STRINGS[key][language];

  return (
    <section 
      id="contact" 
      className={`relative overflow-hidden ${isStandalone ? 'min-h-[80vh] py-20 flex items-center bg-slate-50' : 'py-24 bg-green-600 text-white'}`}
    >
      {/* Decorative patterns */}
      {!isStandalone && (
        <>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/50 rounded-full translate-y-1/2 -translate-x-1/2" />
        </>
      )}

      {isStandalone && (
        <div className="absolute top-0 left-0 w-full h-full bg-green-600 origin-top transform scale-y-[0.7] -z-10" />
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={isStandalone ? 'text-slate-900' : 'text-white'}>
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">{t('contact_title')}</h2>
            <p className={`text-xl mb-12 ${isStandalone ? 'text-slate-600' : 'text-green-50/80'}`}>
              {t('contact_desc')}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${isStandalone ? 'bg-white text-green-600 border border-slate-200' : 'bg-white/10 text-white border border-white/20'}`}>
                  <Mail size={28} />
                </div>
                <div>
                  <div className={`text-sm font-bold uppercase tracking-widest mb-1 ${isStandalone ? 'text-slate-400' : 'opacity-60 text-white'}`}>{t('contact_email_label')}</div>
                  <div className={`text-xl font-bold ${isStandalone ? 'text-slate-900' : 'text-white'}`}>contact@mgbio.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${isStandalone ? 'bg-white text-green-600 border border-slate-200' : 'bg-white/10 text-white border border-white/20'}`}>
                  <MapPin size={28} />
                </div>
                <div>
                  <div className={`text-sm font-bold uppercase tracking-widest mb-1 ${isStandalone ? 'text-slate-400' : 'opacity-60 text-white'}`}>{t('contact_loc_label')}</div>
                  <div className={`text-xl font-bold leading-tight ${isStandalone ? 'text-slate-900' : 'text-white'}`}>{t('contact_loc_value')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`bg-white rounded-[40px] p-8 lg:p-12 text-slate-900 shadow-2xl transition-transform duration-500 ${isStandalone ? 'translate-y-4' : ''} border border-slate-100`}>
            <h3 className="text-2xl font-bold mb-8">{t('form_title')}</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 ml-1">{t('form_name')}</label>
                  <input type="text" placeholder="Your Name" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all placeholder:text-slate-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 ml-1">{t('form_company')}</label>
                  <input type="text" placeholder="Company Name" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all placeholder:text-slate-300" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 ml-1">{t('form_tel')}</label>
                <input type="tel" placeholder="010-0000-0000" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all placeholder:text-slate-300" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 ml-1">{t('form_message')}</label>
                <textarea rows={4} placeholder="Tell us about your project..." className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all resize-none placeholder:text-slate-300"></textarea>
              </div>
              <button className="w-full bg-green-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-green-100">
                {t('form_submit')} <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
