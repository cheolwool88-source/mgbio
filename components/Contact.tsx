
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-green-600 text-white overflow-hidden relative">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/50 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">지속 가능한 내일을 위한<br />첫 걸음, MG Bio Serve</h2>
            <p className="text-xl text-green-50/80 mb-12">
              환경 솔루션 도입이 고민이신가요? <br />
              현장 전문가가 직접 방문하여 맞춤 분석을 진행해 드립니다.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm opacity-60">이메일 문의</div>
                  <div className="text-lg font-bold">contact@mgbioserve.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm opacity-60">대표 전화</div>
                  <div className="text-lg font-bold">02-1234-5678</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm opacity-60">본사 위치</div>
                  <div className="text-lg font-bold">서울특별시 강남구 테헤란로 바이오 빌딩 8층</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">상담 및 분석 신청</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500">담당자 성함</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all" placeholder="성함 입력" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500">기업/기관명</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all" placeholder="회사명" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500">연락처</label>
                <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all" placeholder="010-0000-0000" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500">문의 내용</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all resize-none" placeholder="문의하실 내용을 간단히 입력해주세요."></textarea>
              </div>
              <button className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2">
                신청하기 <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
