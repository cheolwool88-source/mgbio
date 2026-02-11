
import React from 'react';
import { Leaf, Recycle, Bug, FlaskConical } from 'lucide-react';
import { BusinessArea, SuccessStory, MetricData } from './types';

export const BUSINESS_AREAS: BusinessArea[] = [
  {
    id: 'soil',
    title: { 
      ko: '중국 토양개선 및 복원 사업', 
      zh: '中国土壤改良与修复业务',
      en: 'China Soil Improvement & Restoration'
    },
    description: { 
      ko: '염류집적, 유기물 고갈 등 중국 농경지의 난제를 미생물 기반 솔루션으로 해결합니다.', 
      zh: '利用基于微生物的解决方案解决中国农田面临的盐渍化、有机物耗盡等难题。',
      en: 'Solving challenges of Chinese farmland such as salinity accumulation and organic matter depletion with microbial solutions.'
    },
    detailsLabel: { ko: '적용 기술', zh: '应用技术', en: 'Applied Tech' },
    details: {
      ko: ['기능성 미생물 컨소시엄 설계', '토양 미생물 활성화 공정', 'pH 및 염도 개선 바이오 소재', '통기성·보수력 물리성 개선'],
      zh: ['功能性微生物财团设计', '土壤微生物激活工艺', 'pH及盐度改善生物材料', '透气性·保水力物理性能改善'],
      en: ['Functional Microbe Consortium Design', 'Soil Microbe Activation Process', 'pH & Salinity Bio-Materials', 'Aeration & Water Retention Improvement']
    },
    resultsLabel: { ko: '기대 성과', zh: '预期成果', en: 'Expected Results' },
    results: {
      ko: ['수확량 15~30% 증가', '화학비료 20% 절감', '지속 가능한 농업 기반 구축'],
      zh: ['产量增加 15-30%', '化肥减少 20%', '建立可持续农业基础'],
      en: ['15-30% Increase in Yield', '20% Reduction in Chemical Fertilizer', 'Sustainable Agriculture Foundation']
    },
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'waste',
    title: { 
      ko: '중국 유기성 폐기물 처리 사업', 
      zh: '中国有机废弃物处理业务',
      en: 'China Organic Waste Treatment'
    },
    description: { 
      ko: '음식물 쓰레기 및 농축산 부산물을 미생물 분해와 자동화 시스템으로 자원화합니다.', 
      zh: '通过微生物分解和自动化系统将厨余垃圾和农畜副产品资源化。',
      en: 'Transforming food waste and agricultural by-products into resources with microbial decomposition and automation.'
    },
    detailsLabel: { ko: '공정 흐름', zh: '工艺流程', en: 'Process Flow' },
    details: {
      ko: ['유기성 폐기물 수거/선별', '파쇄·수분조절 전처리', '미생물 발효 분해 공정', '퇴비/사료 원료화'],
      zh: ['有机废弃物收集/筛选', '破碎·水分调节前处理', '微生物发酵分解工艺', '堆肥/饲料原料化'],
      en: ['Waste Collection/Sorting', 'Pre-treatment (Crushing/Moisture)', 'Microbial Fermentation', 'Compost/Feed Raw Materialization']
    },
    resultsLabel: { ko: '기대 성과', zh: '预期成果', en: 'Expected Results' },
    results: {
      ko: ['악취 발생 최소화', '처리비용 30% 절감', '지역 순환자원 시스템 구축'],
      zh: ['异味产生最小化', '处理成本降低 30%', '建立区域循环资源系统'],
      en: ['Odor Minimization', '30% Reduction in Treatment Costs', 'Local Circular Resource System']
    },
    icon: <Recycle className="w-8 h-8 text-emerald-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bsf',
    title: { 
      ko: '동애등애(BSF) 자원화 설비', 
      zh: '黑水虻 (BSF) 资源化设备',
      en: 'BSF Resource Recovery Facility'
    },
    description: { 
      ko: '곤충 기반의 Bioconversion 시스템으로 유기성 폐기물을 고부가가치 사료로 전환합니다.', 
      zh: '通过基于昆虫的生物转化系统，将有机废弃物转化为高价值饲料。',
      en: 'Converting organic waste into high-value feed with insect-based Bioconversion systems.'
    },
    detailsLabel: { ko: '핵심 설비', zh: '核心设备', en: 'Core Facilities' },
    details: {
      ko: ['자동 온·습도 제어 사육실', '대량 사육 트레이 시스템', '유충·분변 자동 분리 장치', '단백질/유지 추출 설비'],
      zh: ['自动温湿度控制育婴室', '大量养殖托盘系统', '幼虫·粪便自动分离装置', '蛋白质/油脂提取设备'],
      en: ['Automatic Climate-Controlled Breeding', 'Mass Breeding Tray Systems', 'Auto Larvae/Waste Separators', 'Protein/Oil Extraction Facilities']
    },
    resultsLabel: { ko: '기대 성과', zh: '预期成果', en: 'Expected Results' },
    results: {
      ko: ['폐기물 감량률 최대 70%', '고단백 사료 원료 생산', '탄소배출 저감 및 ESG 가치'],
      zh: ['废物减量率高达 70%', '生产高蛋白饲料原料', '减少碳排放和 ESG 价值'],
      en: ['Up to 70% Waste Reduction', 'High-Protein Feed Production', 'Carbon Reduction & ESG Value']
    },
    icon: <Bug className="w-8 h-8 text-lime-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'consulting',
    title: { 
      ko: '기술 컨설팅 및 통합 솔루션', 
      zh: '技术咨询与集成解决方案',
      en: 'Tech Consulting & Integrated Solutions'
    },
    description: { 
      ko: '중국 현지 환경 규제 대응 경험을 바탕으로 운영 중심의 통합 컨설팅을 제공합니다.', 
      zh: '凭借应对中国当地环境法规의经验，提供以运营为中心的综合咨询。',
      en: 'Providing operation-focused integrated consulting based on experience with local environmental regulations.'
    },
    detailsLabel: { ko: '컨설팅 범위', zh: '咨询范围', en: 'Consulting Scope' },
    details: {
      ko: ['현장 진단 및 환경 분석', '설비 규모 산정 및 공정 설계', '미생물/동애등애 기술 이전', 'Pilot 운영 및 성능 검증'],
      zh: ['现场诊断与环境分析', '设备规模估算与工艺设计', '微生物/黑水虻技术转让', '试点运营与性能验证'],
      en: ['Site Diagnosis & Analysis', 'Facility Sizing & Process Design', 'Microbe/BSF Tech Transfer', 'Pilot Operations & Validation']
    },
    resultsLabel: { ko: '차별화 포인트', zh: '差异化优势', en: 'Differentiators' },
    results: {
      ko: ['중국 현지 규제 대응 노하우', '토양-폐기물-곤충 통합 시스템', '단순 공급 아닌 운영 중심'],
      zh: ['中国当地法规应对诀窍', '土壤-废物-昆虫集成系统', '以运营为中心而非简单供应'],
      en: ['Local Regulatory Know-how', 'Soil-Waste-Insect Integrated System', 'Operational-focused Support']
    },
    icon: <FlaskConical className="w-8 h-8 text-cyan-600" />,
    imageUrl: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800'
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 1,
    location: { ko: '중국 산시성 프로젝트', zh: '中国山西省项目', en: 'Shanxi Province, China' },
    title: { ko: '대규모 산업 오염 토양 복원', zh: '大规模工业污染土壤修复', en: 'Large-scale Industrial Soil Restoration' },
    challenge: { ko: '장기적인 산업 오염 및 지력 저하로 농작물 생산성이 40% 이상 감소한 상태였습니다.', zh: '由于长期的工业污染和地力下降，农作物生产力下降了40%以上。', en: 'Long-term industrial pollution and fertility loss had reduced crop productivity by over 40%.' },
    solution: { ko: '특수 배양 미생물 토양개선제 투입 및 단계별 모니터링 시스템 구축.', zh: '投入特种培养微生物土壤改良剂并建立分阶段监测系统。', en: 'Deployment of specialized microbial soil improvers and establishment of a phased monitoring system.' },
    result: { ko: '토양 내 유기물 함량 2.5배 증가 및 생태 건강성 완전 회복.', zh: '土壤中有机物含量增加2.5倍，生态健康完全恢复。', en: '2.5x increase in soil organic matter and full recovery of ecological health.' },
    imageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800',
    metrics: [
      { label: { ko: '유기물 증가', zh: '有机物增加', en: 'Organic Matter' }, value: '150%' },
      { label: { ko: '수확량 증대', zh: '产量增加', en: 'Yield Increase' }, value: '35%' }
    ]
  },
  {
    id: 2,
    location: { ko: '국내 대형 급식소', zh: '韩国大型食堂', en: 'Large Cafeteria, Korea' },
    title: { ko: '음식물 폐기물 자원 선순환', zh: '厨余垃圾资源良性循环', en: 'Food Waste Resource Recirculation' },
    challenge: { ko: '매일 발생하는 방대한 음식물 쓰레기의 높은 처리 비용과 환경 악취 문제.', zh: '每日产生的大量厨余垃圾处理成本高，且存在环境异味问题。', en: 'High disposal costs and environmental odor issues from massive daily food waste.' },
    solution: { ko: '동애등애 Bioconversion 시스템 도입을 통한 고단백 사료 및 비료 전환.', zh: '通过引入黑水虻生物转化系统，将其转化为高蛋白饲料和肥料。', en: 'Introduction of BSF Bioconversion system to convert waste into high-protein feed and fertilizer.' },
    result: { ko: '폐기물 처리 비용 60% 절감 및 고품질 사료화 성공.', zh: '废物处理成本降低60%，并成功转化为高质量饲料。', en: '60% reduction in disposal costs and successful high-quality feed conversion.' },
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800',
    metrics: [
      { label: { ko: '비용 절감', zh: '成本降低', en: 'Cost Savings' }, value: '60%' },
      { label: { ko: '자원 재활용', zh: '资源回收', en: 'Recycling Rate' }, value: '98%' }
    ]
  }
];

export const IMPACT_METRICS: MetricData[] = [
  { name: { ko: '토양 기능 개선', zh: '土壤功能改善', en: 'Soil Function Improvement' }, value: 85, unit: '%' },
  { name: { ko: '폐기물 처리량', zh: '废物处理量', en: 'Waste Treatment' }, value: 12000, unit: { ko: '톤/년', zh: '吨/年', en: 'tons/year' } },
  { name: { ko: '처리 비용 절감', zh: '处理成本降低', en: 'Cost Reduction' }, value: 45, unit: '%' },
  { name: { ko: '부산물 활용률', zh: '副产品利用率', en: 'By-product Utilization' }, value: 92, unit: '%' }
];
