
import React from 'react';
import { BUSINESS_AREAS } from '../constants';
import { ArrowRight } from 'lucide-react';

const BusinessAreas: React.FC = () => {
  return (
    <section id="business" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <span className="text-green-600 font-bold tracking-widest uppercase text-sm">Business Area</span>
        <h2 className="text-4xl font-bold mt-4">차별화된 미생물 기반 환경 솔루션</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {BUSINESS_AREAS.map((area) => (
          <div key={area.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-100">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={area.imageUrl} 
                alt={area.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-2xl shadow-sm">
                {area.icon}
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-4 group-hover:text-green-600 transition-colors">{area.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                {area.description}
              </p>
              <button className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-green-600 transition-colors">
                상세 보기 <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessAreas;
