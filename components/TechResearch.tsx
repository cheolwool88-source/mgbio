
import React from 'react';
import { Microscope, Award, FileText, Activity, ArrowRight } from 'lucide-react';
import { useLanguage } from '../App';
import { UI_STRINGS } from '../translations';

interface TechResearchProps {
  isStandalone?: boolean;
}

const TechResearch: React.FC<TechResearchProps> = ({ isStandalone = false }) => {
  const { language, setView } = useLanguage();
  const t = (key: string) => UI_STRINGS[key][language];

  const features = [
    { 
      icon: <Microscope className="w-6 h-6" />, 
      title: { ko: '독자 미생물 배양 기술', zh: '独特微生物培养技术' }, 
      desc: { ko: '극한 환경에서도 높은 활성도를 유지하는 균주 선별 및 배양 노하우', zh: '在极端环境下也能保持高活性的菌株筛选和培养秘诀' }
    },
    { 
      icon: <Activity className="w-6 h-6" />, 
      title: { ko: '실시간 현장 분석 시스템', zh: '实时现场分析系统' }, 
      desc: { ko: 'IoT 기반 센싱을 통한 토양/폐기물 처리 상태 실시간 모니터링', zh: '通过基于物联网的传感实时监测土壤/废物处理状态' }
    },
    { 
      icon: <Award className="w-6 h-6" />, 
      title: { ko: '글로벌 특허 및 인증', zh: '全球专利与认证' }, 
      desc: { ko: '미국, 중국, 한국 등 주요 시장 15개 이상의 핵심 기술 특허 보유', zh: '在美国、中国、韩国等主要市场拥有超过15项核心技术专利' }
    },
    { 
      icon: <FileText className="w-6 h-6" />, 
      title: { ko: '기술 리포트 아카이브', zh: '技术报告存档' }, 
      desc: { ko: '수년간 축적된 현장 분석 데이터 기반의 과학적 검증 체계', zh: '基于多年积累的现场分析数据的科学验证体系' }
    },
  ];

  return (
    <section id="tech" className={`py-24 transition-colors duration-500 ${isStandalone ? 'bg-white min-h-screen' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <span className="text-green-600 font-bold tracking-widest uppercase text-sm">{t('tech_tag')}</span>
            <h2 className="text-3xl lg:text-5xl font-bold mt-4 mb-8 leading-tight">{t('tech_title')}</h2>
            <p className="text-slate-600 leading-relaxed mb-10 text-lg">
              {t('tech_desc')}
            </p>
            <button className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all group">
              {t('tech_btn')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 group border border-transparent hover:border-green-100">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm mb-8 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-500">
                  {f.icon}
                </div>
                <h4 className="font-bold text-2xl mb-4 text-slate-900">{f.title[language]}</h4>
                <p className="text-slate-500 leading-relaxed">{f.desc[language]}</p>
              </div>
            ))}
          </div>
        </div>

        {isStandalone && (
          <div className="mt-32 p-12 lg:p-20 bg-green-600 rounded-[50px] relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center text-white">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">{t('tech_standalone_title')}</h3>
                <p className="text-green-50 text-lg leading-relaxed opacity-90">
                  {t('tech_standalone_desc')}
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <button 
                  onClick={() => setView('contact')}
                  className="px-10 py-5 bg-white text-green-600 rounded-2xl font-black text-xl hover:bg-green-50 transition-all shadow-xl"
                >
                  {t('tech_standalone_btn')}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-32">
          <div className="text-center mb-12">
            <h4 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-4">{t('tech_partners_title')}</h4>
            <div className="h-[1px] w-20 bg-slate-200 mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 grayscale opacity-40 hover:opacity-100 transition-opacity">
            <div className="flex items-center justify-center h-20 text-xl font-black tracking-tighter text-slate-500 italic border border-slate-100 rounded-2xl">GLOBAL BIO CERT</div>
            <div className="flex items-center justify-center h-20 text-xl font-black tracking-tighter text-slate-500 italic border border-slate-100 rounded-2xl">ECO-GREEN LAB</div>
            <div className="flex items-center justify-center h-20 text-xl font-black tracking-tighter text-slate-500 italic border border-slate-100 rounded-2xl">SOIL SCIENCE INST</div>
            <div className="flex items-center justify-center h-20 text-xl font-black tracking-tighter text-slate-500 italic border border-slate-100 rounded-2xl">AGRI-FUTURE TECH</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechResearch;
