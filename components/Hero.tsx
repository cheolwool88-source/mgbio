
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-green-50 rounded-bl-[200px] -z-10 opacity-60" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Global Bio-Solution Leader
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-slate-900">
            Microbial solutions for a <span className="text-green-600">sustainable earth</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
            MG Bio Serve Inc는 생명 기반의 기술로 지구의 상처를 치유합니다. 
            토양 복원부터 자원 선순환까지, 미생물이 그리는 새로운 미래를 제안합니다.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 shadow-lg shadow-green-200 transition-all flex items-center gap-2">
              주요 실적 보기 <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
              프로젝트 문의
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10">
            <img 
              src="https://picsum.photos/seed/biohero/1200/900" 
              alt="Bio Technology Field" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[240px] border border-slate-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <Leaf className="text-green-600 w-5 h-5" />
              </div>
              <span className="font-bold text-slate-900">토양 복원율</span>
            </div>
            <div className="text-3xl font-bold text-green-600">92.4%</div>
            <div className="text-xs text-slate-400 mt-1">2024 중국 프로젝트 성과 기준</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-slate-300" />
      </div>
    </section>
  );
};

const Leaf = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
);

export default Hero;
