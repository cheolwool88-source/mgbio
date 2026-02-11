
import React from 'react';
import { Leaf, Recycle, Bug, FlaskConical } from 'lucide-react';
import { BusinessArea, SuccessStory, MetricData } from './types';

export const BUSINESS_AREAS: BusinessArea[] = [
  {
    id: 'soil',
    title: { ko: '토양 개선 & 복원', zh: '土壤改良与修复', ja: '土壌改良・復元' },
    description: { ko: '미생물 기반 토양개선제를 통해 산업 오염을 정화하고 농경지의 비옥도를 복원합니다.', zh: '通过基于微生物的土壤改良剂净化工业污染并恢复农田肥力。', ja: '微生物ベースの土壌改良剤を通じて産業汚染を浄化し、農地の肥沃度を復元します。' },
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1592919016381-f07ecd5a8c91?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'waste',
    title: { ko: '유기성 폐기물 처리', zh: '有机废弃物处理', ja: '有機廃棄物処理' },
    description: { ko: '음식물 쓰레기 등 유기성 폐기물을 미생물 분해 기술로 환경 부담 없이 처리합니다.', zh: '利用微生物分解技术处理厨余垃圾等有机废弃物，且不造成环境负担。', ja: '生ごみなどの有機廃棄物を微生物分解技術で環境負荷なく処理します。' },
    icon: <Recycle className="w-8 h-8 text-emerald-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bsf',
    title: { ko: '동애등애 자원화', zh: '黑水虻资源化', ja: 'アメリカミズアブ資源化' },
    description: { ko: 'Black Soldier Fly(BSF)를 활용한 Bioconversion 시스템으로 폐기물을 고단백 사료로 전환합니다.', zh: '利用黑水虻 (BSF) 生物转化系统将废弃物转化为高蛋白饲料。', ja: 'アメリカミズアブ(BSF)を活用したバイオコンバージョンシステムで廃棄物を高タンパク飼料に転換します。' },
    icon: <Bug className="w-8 h-8 text-lime-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'consulting',
    title: { ko: '기술 컨설팅', zh: '技术咨询', ja: '技術コンサルティング' },
    description: { ko: '현장 맞춤형 분석을 통해 최적의 미생물 솔루션 도입과 운영을 가이드합니다.', zh: '通过现场定制化分析，指导最佳微生物解决方案的引入和运营。', ja: '現場カスタマイズされた分析を通じて、最適な微生物ソリューションの導入と運用をガイドします。' },
    icon: <FlaskConical className="w-8 h-8 text-cyan-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800'
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 1,
    location: { ko: '중국 산시성 프로젝트', zh: '中国山西省项目', ja: '中国山西省プロジェクト' },
    title: { ko: '대규모 산업 오염 토양 복원', zh: '大规模工业污染土壤修复', ja: '大規模産業汚染土壌復元' },
    challenge: { ko: '장기적인 산업 오염 및 지력 저하로 농작물 생산성이 40% 이상 감소한 상태였습니다.', zh: '由于长期的工业污染和地力下降，农作物生产力下降了40%以上。', ja: '長期的な産業汚染および地力低下により、農作物の生産性が40%以上減少した状態でした。' },
    solution: { ko: '특수 배양 미생물 토양개선제 투입 및 단계별 모니터링 시스템 구축.', zh: '投入特种培养微生物土壤改良剂并建立分阶段监测系统。', ja: '特殊培養微生物土壌改良剤の投入および段階別モニタリングシステムの構築。' },
    result: { ko: '토양 내 유기물 함량 2.5배 증가 및 생태 건강성 완전 회복.', zh: '土壤中有机物含量增加2.5倍，生态健康完全恢复。', ja: '土壌内の有機物含有量が2.5倍増加し、生態系の健全性が完全に回復。' },
    imageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800',
    metrics: [
      { label: { ko: '유기물 증가', zh: '有机物增加', ja: '有機物増加' }, value: '150%' },
      { label: { ko: '수확량 증대', zh: '产量增加', ja: '収穫量増大' }, value: '35%' }
    ]
  },
  {
    id: 2,
    location: { ko: '국내 대형 급식소', zh: '韩国大型食堂', ja: '国内大型給食施設' },
    title: { ko: '음식물 폐기물 자원 선순환', zh: '厨余垃圾资源良性循环', ja: '生ごみ資源の好循環' },
    challenge: { ko: '매일 발생하는 방대한 음식물 쓰레기의 높은 처리 비용과 환경 악취 문제.', zh: '每日产生的大量厨余垃圾处理成本高，且存在环境异味问题。', ja: '毎日発生する膨大な生ごみの高い処理費用と環境悪臭の問題。' },
    solution: { ko: '동애등애 Bioconversion 시스템 도입을 통한 고단백 사료 및 비료 전환.', zh: '通过引入黑水虻生物转化系统，将其转化为高蛋白饲料和肥料。', ja: 'アメリカミズアブバイ오コンバージョンシステムの導入を通じた高タンパク飼料および肥料への転換。' },
    result: { ko: '폐기물 처리 비용 60% 절감 및 고품질 사료화 성공.', zh: '废物处理成本降低60%，并成功转化为高质量饲料。', ja: '廃棄物処理費用を60%削減し、高品質な飼料化に成功。' },
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
    metrics: [
      { label: { ko: '비용 절감', zh: '成本降低', ja: '費用削減' }, value: '60%' },
      { label: { ko: '자원 재활용', zh: '资源回收', ja: '資源再利用' }, value: '98%' }
    ]
  }
];

export const IMPACT_METRICS: MetricData[] = [
  { name: { ko: '토양 기능 개선', zh: '土壤功能改善', ja: '土壌機能改善' }, value: 85, unit: '%' },
  { name: { ko: '폐기물 처리량', zh: '废物处理量', ja: '廃棄物処理量' }, value: 12000, unit: '톤/년' },
  { name: { ko: '처리 비용 절감', zh: '处理成本降低', ja: '処理費用削減' }, value: 45, unit: '%' },
  { name: { ko: '부산물 활용률', zh: '副产品利用率', ja: '副産物活用率' }, value: 92, unit: '%' }
];
