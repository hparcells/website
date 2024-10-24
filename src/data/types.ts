import { StaticImageData } from 'next/image';

export interface ArchiveItem {
  date: string;
  label: string;
  url?: string;
  secondaryText?: string;
  infoLink?: string;

  active?: boolean;
}

export interface Project {
  name: string;
  description: string;
  image: StaticImageData;

  demo?: string;
  github?: string;
  discord?: string;
}

export interface Question {
  id: string;
  answerId: string | null;
  timestamp: number;
  question: string;
  email: string | null;
}
export interface Answer {
  id: string;
  questionId: string;
  timestamp: number;
  answer: string;
}
export interface QnaItem {
  question: Question;
  answer: Answer;
}

export interface User {
  username: string;
  password: string;
  apiKey: string;
}
