
import React from 'react';
import { Microscope, Award, FileText, Activity } from 'lucide-react';

const TechResearch: React.FC = () => {
  const features = [
    { icon: <Microscope className="w-6 h-6" />, title: '독자 미생물 배양 기술', desc: '극한 환경에서도 높은 활성도를 유지하는 균주 선별 및 배양 노하우' },
    { icon: <Activity className="w-6 h-6" />, title: '실시간 현장 분석 시스템', desc: 'IoT 기반 센싱을 통한 토양/폐기물 처리 상태 실시간 모니터링' },
    { icon: <Award className="w-6 h-6" />, title: '글로벌 특허 및 인증', desc: '미국, 중국, 한국 등 주요 시장 15개 이상의 핵심 기술 특허 보유' },
    { icon: <FileText className="w-6 h-6" />, title: '기술 리포트 아카이브', desc: '수년간 축적된 현장 분석 데이터 기반의 과학적 검증 체계' },
  ];

  return (
    <section id="tech" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <span className="text-green-600 font-bold tracking-widest uppercase text-sm">Tech & Research</span>
            <h2 className="text-4xl font-bold mt-4 mb-6">근거 있는 과학,<br />검증된 결과</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              MG Bio Serve는 이론에만 머무르지 않습니다. 자체 R&D 센터를 통해 매달 수천 개의 샘플을 테스트하며, 
              실제 현장에서 가장 강력한 미생물의 힘을 구현합니다.
            </p>
            <button className="px-6 py-3 border-2 border-slate-900 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all">
              기술 자료실 바로가기
            </button>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 hover:bg-green-50 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h4 className="font-bold text-xl mb-3 text-slate-900">{f.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
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
