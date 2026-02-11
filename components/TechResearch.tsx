
import React from 'react';
import { Microscope, Award, FileText, Activity } from 'lucide-react';
import { useLanguage } from '../App';
import { UI_STRINGS } from '../translations';

const TechResearch: React.FC = () => {
  const { language } = useLanguage();
  const t = (key: string) => UI_STRINGS[key][language];

  const features = [
    { 
      icon: <Microscope className="w-6 h-6" />, 
      title: { ko: '독자 미생물 배양 기술', zh: '独特微生物培养技术', ja: '独自微生物培養技術' }, 
      desc: { ko: '극한 환경에서도 높은 활성도를 유지하는 균주 선별 및 배양 노하우', zh: '在极端环境下也能保持高活性的菌株筛选和培养秘诀', ja: '極限環境でも高い活性を維持する菌株選別および培養ノウハウ' }
    },
    { 
      icon: <Activity className="w-6 h-6" />, 
      title: { ko: '실시간 현장 분석 시스템', zh: '实时现场分析系统', ja: 'リアルタイム現場分析システム' }, 
      desc: { ko: 'IoT 기반 센싱을 통한 토양/폐기물 처리 상태 실시간 모니터링', zh: '通过基于物联网的传感实时监测土壤/废物处理状态', ja: 'IoTベースのセンシングを通じた土壌・廃棄物処理状態のリアルタイムモニタリング' }
    },
    { 
      icon: <Award className="w-6 h-6" />, 
      title: { ko: '글로벌 특허 및 인증', zh: '全球专利与认证', ja: 'グローバル特許および認証' }, 
      desc: { ko: '미국, 중국, 한국 등 주요 시장 15개 이상의 핵심 기술 특허 보유', zh: '在美国、中国、韩国等主要市场拥有超过15项核心技术专利', ja: 'アメリカ、中国、韓国などの主要市場で15以上の核心技術特허を保有' }
    },
    { 
      icon: <FileText className="w-6 h-6" />, 
      title: { ko: '기술 리포트 아카이브', zh: '技术报告存档', ja: '技術レポートアーカイブ' }, 
      desc: { ko: '수년간 축적된 현장 분석 데이터 기반의 과학적 검증 체계', zh: '基于多年积累的现场分析数据的科学验证体系', ja: '数年間にわたり蓄積された現場分析データに基づく科学的検証体系' }
    },
  ];

  return (
    <section id="tech" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <span className="text-green-600 font-bold tracking-widest uppercase text-sm">{t('tech_tag')}</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-6">{t('tech_title')}</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              {t('tech_desc')}
            </p>
            <button className="px-6 py-3 border-2 border-slate-900 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all">
              {t('tech_btn')}
            </button>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 hover:bg-green-50 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h4 className="font-bold text-xl mb-3 text-slate-900">{f.title[language]}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc[language]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 grayscale opacity-50">
          <div className="flex items-center justify-center h-20 text-xl font-bold tracking-tighter text-slate-400 italic">Global Bio Cert</div>
          <div className="flex items-center justify-center h-20 text-xl font-bold tracking-tighter text-slate-400 italic">Eco-Green Lab</div>
          <div className="flex items-center justify-center h-20 text-xl font-bold tracking-tighter text-slate-400 italic">Soil Science Inst</div>
          <div className="flex items-center justify-center h-20 text-xl font-bold tracking-tighter text-slate-400 italic">Agri-Future Tech</div>
        </div>
      </div>
    </section>
  );
};

export default TechResearch;
