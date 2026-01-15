
import { Project, SocialLink } from './types';

// Adding custom fields for honesty/readability
export interface DetailedProject extends Project {
  why: string;
}

export const NAME = "zain khan";
export const SUBTITLE = "compeng @uwaterloo";
export const BIO = "I'm a first-year Computer Engineering student at the University of Waterloo. I like building software that is simple to look at and actually useful to use.";

export const HELLOS = [
  "Hello", "Bonjour", "Hola", "Ciao", "Konnichiwa", 
  "Namaste", "Annyeong", "Hallo", "Olá", "Szia", "Hej", "Ahoj", "Zdravo"
];

export const TECH_STACK = [
  "C/C++", "Python", "React", "TypeScript", "JavaScript", 
  "Supabase", "PostgreSQL", "Tailwind CSS", "ARM Assembly", 
  "Verilog", "Node.js", "Git", "Google Gemini API", "PHP", "SQL"
];

export const PROJECTS: DetailedProject[] = [
  {
    id: "inventory",
    title: "inven[s]tory",
    description: "An app that helps you organize your physical stuff by mapping items to specific locations in your house.",
    why: "I built this because I kept losing my engineering tools and expensive components. I needed a way to visually 'search' my own room for things I'd put in boxes months ago.",
    tags: ["React", "TypeScript", "Supabase", "Gemini API"],
    link: "https://inven-s-tory.vercel.app/",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "kasperia",
    title: "Kasperia",
    description: "A custom data management system for a mid-sized equipment distribution company.",
    why: "My family's business was still using paper forms and messy spreadsheets for inventory and orders. I built this to modernize their workflow and make their daily data entry much faster.",
    tags: ["JavaScript", "Python", "SQL", "PHP"],
    link: "https://kasperia.ca/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    id: "ascii",
    title: "Image to ASCII",
    description: "A simple web tool that converts any uploaded photo into text-based art.",
    why: "I've always loved the retro look of 70s and 80s computer terminal graphics. I wanted to see if I could write an algorithm that translates pixel brightness into the right text characters effectively.",
    tags: ["Python", "JavaScript", "Image Processing"],
    link: "https://image-to-ascii-art.netlify.app/",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "linkedin", url: "https://www.linkedin.com/in/zainkkhan/" },
  { label: "github", url: "https://github.com/7kzaincode" },
  { label: "mail", url: "mailto:kn.zain@hotmail.com" },
  { label: "twitter", url: "https://x.com/sevenkzain" }
];

export const ARTWORK = [
  "images/photo1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
  "images/photo5.jpg",
  "images/photo6.jpg",
  "images/photo7.jpg",
  "images/photo8.jpg"
];
