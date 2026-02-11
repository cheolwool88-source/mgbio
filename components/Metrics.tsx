
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { IMPACT_METRICS } from '../constants';

const Metrics: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/10 blur-[100px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-green-400 font-bold tracking-widest uppercase text-sm">Impact Metrics</span>
          <h2 className="text-4xl font-bold mt-4">숫자로 증명하는 친환경 가치</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-6">
            {IMPACT_METRICS.map((item) => (
              <div key={item.name} className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  {item.value.toLocaleString()}{item.unit}
                </div>
                <div className="text-slate-400 font-medium">{item.name}</div>
              </div>
            ))}
          </div>

          <div className="h-[400px] bg-white/5 p-8 rounded-3xl border border-white/10">
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              주요 부문별 개선 지표 (%)
            </h4>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={IMPACT_METRICS} layout="vertical" margin={{ left: 20, right: 30 }}>
                <XAxis type="number" hide />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  stroke="#94a3b8" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  width={100}
                />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
                />
                <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={24}>
                  {IMPACT_METRICS.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#10b981' : '#059669'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
