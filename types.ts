
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}
