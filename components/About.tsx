
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-green-600 font-bold tracking-widest uppercase text-sm">About Us</span>
            <h2 className="text-4xl font-bold mt-4 mb-8 leading-tight">
              환경 문제를 경제적 자원으로 전환하는<br />글로벌 바이오 혁신 파트너
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              MG Bio Serve Inc는 미생물 기반의 환경 문제 해결 솔루션을 개발하는 선도 바이오 기업입니다. 
              우리는 버려지는 폐기물에서 새로운 가치를 발견하고, 오염된 대지를 다시 생명의 땅으로 되돌리는 데 집중합니다.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-green-200 transition-colors">
                <div className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">01</div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Vision</h4>
                  <p className="text-slate-500">생태계와 공존하는 미래를 만들고, 환경 문제를 가치 있는 경제 자원으로 전환합니다.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-green-200 transition-colors">
                <div className="w-12 h-12 bg-green-600 text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">02</div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Mission</h4>
                  <p className="text-slate-500">자연 기반 미생물 솔루션으로 산업 및 농업 현장의 난제를 해결하고 지속 가능한 기술을 세계로 확산합니다.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://picsum.photos/seed/bio1/400/600" alt="Lab Work" className="rounded-3xl shadow-lg w-full h-[300px] object-cover" />
              <img src="https://picsum.photos/seed/bio2/400/400" alt="Soil Samples" className="rounded-3xl shadow-lg w-full h-[200px] object-cover" />
            </div>
            <div className="space-y-4 pt-8">
              <img src="https://picsum.photos/seed/bio3/400/400" alt="Nature" className="rounded-3xl shadow-lg w-full h-[200px] object-cover" />
              <img src="https://picsum.photos/seed/bio4/400/600" alt="Microbes" className="rounded-3xl shadow-lg w-full h-[300px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
