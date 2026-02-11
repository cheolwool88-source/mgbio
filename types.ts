
import React from 'react';

export type Language = 'ko' | 'zh' | 'ja';

export interface BusinessArea {
  id: string;
  title: { [key in Language]: string };
  description: { [key in Language]: string };
  icon: React.ReactNode;
  imageUrl: string;
}

export interface SuccessStory {
  id: number;
  location: { [key in Language]: string };
  title: { [key in Language]: string };
  challenge: { [key in Language]: string };
  solution: { [key in Language]: string };
  result: { [key in Language]: string };
  imageUrl: string;
  metrics?: { label: { [key in Language]: string }; value: string }[];
}

export interface MetricData {
  name: { [key in Language]: string };
  value: number;
  unit: string;
}
