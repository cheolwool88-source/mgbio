
import React from 'react';
import { SUCCESS_STORIES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const SuccessStories: React.FC = () => {
  return (
    <section id="cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-green-600 font-bold tracking-widest uppercase text-sm">Success Stories</span>
            <h2 className="text-4xl font-bold mt-4">글로벌 현장이 증명하는 성과</h2>
          </div>
          <p className="text-slate-500 max-w-md">중국 대규모 프로젝트부터 국내 스마트 팜까지, MG Bio Serve의 기술력은 실질적인 데이터로 증명됩니다.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {SUCCESS_STORIES.map((story, index) => (
          <div key={story.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-1/2 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src={story.imageUrl} alt={story.title} className="w-full aspect-video object-cover" />
              </div>
              {/* Floating Metrics */}
              <div className="absolute -bottom-8 right-8 flex gap-4">
                {story.metrics?.map((m) => (
                  <div key={m.label} className="bg-green-600 text-white p-4 rounded-2xl shadow-xl min-w-[120px]">
                    <div className="text-xs opacity-80">{m.label}</div>
                    <div className="text-2xl font-bold">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 space-y-8 p-4">
              <div className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-bold">
                Case #{story.id} — {story.location}
              </div>
              <h3 className="text-3xl font-bold text-slate-900">{story.title}</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-1.5 h-auto bg-red-400 rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-1">도전 (Challenge)</h4>
                    <p className="text-slate-600">{story.challenge}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 h-auto bg-green-500 rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-green-600 uppercase text-xs tracking-wider mb-1">솔루션 (Solution)</h4>
                    <p className="text-slate-600">{story.solution}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 h-auto bg-blue-500 rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-500 uppercase text-xs tracking-wider mb-1">성과 (Result)</h4>
                    <div className="flex items-center gap-2 text-slate-900 font-bold">
                      <CheckCircle2 className="text-green-500 w-5 h-5" />
                      {story.result}
                    </div>
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

export default SuccessStories;
