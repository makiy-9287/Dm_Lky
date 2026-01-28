import { createContext } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  bannerUrl: string;
  icon: React.ReactNode;
  details: {
    description: string;
    longDescription: string;
    serviceLevels: {
      title: string;
      points: string[];
    }[];
    faqs: {
      q: string;
      a: string;
    }[];
  };
}

export interface Testimonial {
  name: string;
  company: string;
  quote: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  whatsappLink: string;
}
