
import { Project, SocialLink } from './types';

export interface DetailedProject extends Project {
  why: string;
}

import photo1 from './images/photo1.jpg';
import photo2 from './images/photo2.jpg';
import photo3 from './images/photo3.jpg';
import photo4 from './images/photo4.jpg';
import photo5 from './images/photo5.jpg';


export const NAME = "zain khan";
export const SUBTITLE = "compeng @uwaterloo";
export const BIO = "I'm a first-year Computer Engineering student at the University of Waterloo. I like building software that is simple to look at and actually useful to use.";

export const HELLOS = [
  "Hello", "Bonjour", "Hola", "Ciao",
  "こんにちは",   // Japanese
  "안녕하세요",   // Korean
  "नमस्ते",      // Devanagari (Hindi/Sanskrit)
  "שלום",        // Hebrew
  "你好",         // Chinese
  "Γειά",        // Greek
  "Здраво",     // Cyrillic
  "مرحبا"      // Arabic
];

export const TECH_STACK = [
  "C/C++", "Python", "React", "TypeScript", "JavaScript",
  "Supabase", "PostgreSQL", "Tailwind CSS", "ARM Assembly",
  "Verilog", "Node.js", "Git", "Google Gemini API", "PHP", "SQL"
];

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  link?: string;
}

export const EXPERIENCES: Experience[] = [
  {
    id: "kasperia",
    company: "Kasperia",
    role: "Full-Stack Developer",
    period: "2023 - Present",
    description: "Built and maintain a custom data management system for a mid-sized equipment distribution company, modernizing their workflow from paper forms to digital.",
    tags: ["JavaScript", "Python", "SQL", "PHP"],
    link: "https://kasperia.ca/"
  },
  {
    id: "watonmous",
    company: "WATonomous",
    role: "Software Team Member",
    period: "2025 - Present",
    description: "Contributing to the University of Waterloo's autonomous vehicle design team, working on perception and planning systems.",
    tags: ["Python", "ROS2", "C++", "Autonomous Systems"]
  }
];

export const PROJECTS: DetailedProject[] = [
  {
    id: "inventory",
    title: "inven[s]tory",
    description: "A full-stack spatial asset mapping system for digitally organizing physical possessions.",
    why: "I built this because I kept losing my engineering tools and expensive components. I needed a way to visually 'search' my own room for things I'd put in boxes months ago.",
    tags: ["React", "TypeScript", "Supabase", "Gemini API"],
    link: "https://inven-s-tory.vercel.app/",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2000&auto=format&fit=crop"
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
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
];