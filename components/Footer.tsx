
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                MG Bio Serve
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              자연에서 찾은 답으로 지구의 내일을 그리는 <br />
              글로벌 바이오 솔루션 파트너입니다.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#about" className="hover:text-green-600">회사소개</a></li>
              <li><a href="#tech" className="hover:text-green-600">기술연구</a></li>
              <li><a href="#" className="hover:text-green-600">공지사항</a></li>
              <li><a href="#" className="hover:text-green-600">채용안내</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Business</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#business" className="hover:text-green-600">토양 개선</a></li>
              <li><a href="#business" className="hover:text-green-600">폐기물 처리</a></li>
              <li><a href="#business" className="hover:text-green-600">동애등애 시스템</a></li>
              <li><a href="#business" className="hover:text-green-600">기술 컨설팅</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#contact" className="hover:text-green-600">문의하기</a></li>
              <li><a href="#" className="hover:text-green-600">자료실</a></li>
              <li><a href="#" className="hover:text-green-600">개인정보처리방침</a></li>
              <li><a href="#" className="hover:text-green-600">이용약관</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2024 MG Bio Serve Inc. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600">Linkedin</a>
            <a href="#" className="hover:text-slate-600">Youtube</a>
            <a href="#" className="hover:text-slate-600">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
