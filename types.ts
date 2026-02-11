
import React from 'react';

export interface BusinessArea {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface SuccessStory {
  id: number;
  location: string;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  imageUrl: string;
  metrics?: { label: string; value: string }[];
}

export interface MetricData {
  name: string;
  value: number;
  unit: string;
}