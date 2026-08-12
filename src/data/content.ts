import YAML from 'yaml';
import researchSource from './research.yaml?raw';
import experienceSource from './experience.yaml?raw';
import talksSource from './talks.yaml?raw';
import cvSource from './cv.yaml?raw';

export interface Publication {
  id: string;
  year: number;
  selected: boolean;
  label: string;
  title: string;
  authors: string[];
  venue: string;
  url: string;
  summary: string;
  metric?: string;
  tags: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  url?: string;
  featured: boolean;
  marker: string;
  summary: string;
  highlights: string[];
}

export interface Talk {
  title: string;
  event?: string;
  organization?: string;
  date: string;
  type?: string;
  url?: string;
  note?: string;
}

interface TalksData {
  external: Talk[];
  internal: Talk[];
  quant: Talk[];
}

interface Education {
  school: string;
  degree: string;
  period: string;
  details: string[];
}

interface CvData {
  education: Education[];
  service: string[];
  awards: string[];
  teaching: string[];
  skills: Record<string, string[]>;
}

export const publications = YAML.parse(researchSource) as Publication[];
export const experiences = YAML.parse(experienceSource) as Experience[];
export const talks = YAML.parse(talksSource) as TalksData;
export const cv = YAML.parse(cvSource) as CvData;

export const selectedPublications = publications.filter((publication) => publication.selected);
export const featuredExperiences = experiences.filter((experience) => experience.featured);
