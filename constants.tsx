
import React from 'react';
import { Leaf, Recycle, Bug, FlaskConical } from 'lucide-react';
import { BusinessArea, SuccessStory, MetricData } from './types';

export const BUSINESS_AREAS: BusinessArea[] = [
  {
    id: 'soil',
    title: '토양 개선 & 복원',
    description: '미생물 기반 토양개선제를 통해 산업 오염을 정화하고 농경지의 비옥도를 복원합니다.',
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    imageUrl: 'https://picsum.photos/seed/soil/800/600'
  },
  {
    id: 'waste',
    title: '유기성 폐기물 처리',
    description: '음식물 쓰레기 등 유기성 폐기물을 미생물 분해 기술로 환경 부담 없이 처리합니다.',
    icon: <Recycle className="w-8 h-8 text-emerald-600" />,
    imageUrl: 'https://picsum.photos/seed/waste/800/600'
  },
  {
    id: 'bsf',
    title: '동애등애 자원화',
    description: 'Black Soldier Fly(BSF)를 활용한 Bioconversion 시스템으로 폐기물을 고단백 사료로 전환합니다.',
    icon: <Bug className="w-8 h-8 text-lime-600" />,
    imageUrl: 'https://picsum.photos/seed/bsf/800/600'
  },
  {
    id: 'consulting',
    title: '기술 컨설팅',
    description: '현장 맞춤형 분석을 통해 최적의 미생물 솔루션 도입과 운영을 가이드합니다.',
    icon: <FlaskConical className="w-8 h-8 text-cyan-600" />,
    imageUrl: 'https://picsum.photos/seed/lab/800/600'
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 1,
    location: '중국 산시성 프로젝트',
    title: '대규모 산업 오염 토양 복원',
    challenge: '장기적인 산업 오염 및 지력 저하로 농작물 생산성이 40% 이상 감소한 상태였습니다.',
    solution: '특수 배양 미생물 토양개선제 투입 및 단계별 모니터링 시스템 구축.',
    result: '토양 내 유기물 함량 2.5배 증가 및 생태 건강성 완전 회복.',
    imageUrl: 'https://picsum.photos/seed/china/800/500',
    metrics: [
      { label: '유기물 증가', value: '150%' },
      { label: '수확량 증대', value: '35%' }
    ]
  },
  {
    id: 2,
    location: '국내 대형 급식소',
    title: '음식물 폐기물 자원 선순환',
    challenge: '매일 발생하는 방대한 음식물 쓰레기의 높은 처리 비용과 환경 악취 문제.',
    solution: '동애등애 Bioconversion 시스템 도입을 통한 고단백 사료 및 비료 전환.',
    result: '폐기물 처리 비용 60% 절감 및 고품질 사료화 성공.',
    imageUrl: 'https://picsum.photos/seed/korea/800/500',
    metrics: [
      { label: '비용 절감', value: '60%' },
      { label: '자원 재활용', value: '98%' }
    ]
  }
];

export const IMPACT_METRICS: MetricData[] = [
  { name: '토양 기능 개선', value: 85, unit: '%' },
  { name: '폐기물 처리량', value: 12000, unit: '톤/년' },
  { name: '처리 비용 절감', value: 45, unit: '%' },
  { name: '부산물 활용률', value: 92, unit: '%' }
];
