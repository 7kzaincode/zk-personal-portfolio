
import { Project, SocialLink } from './types';

export interface DetailedProject extends Project {
  why: string;
}

import photo1 from './images/photo1.jpg';
import photo2 from './images/photo2.jpg';
import photo3 from './images/photo3.jpg';
import photo4 from './images/photo4.jpg';
import photo5 from './images/photo5.jpg';
import sketchy from './images/sketchy.png';
import investory from './images/inven[s]tory.png';
import ascii from './images/ascii-art.png';


export const NAME = "zain khan";
export const SUBTITLE = "comp-eng @uwaterloo";
export const BIO = "I'm a first-year Computer Engineering student at the University of Waterloo. I like building software that is simple to look at and actually useful to use.";

export const HELLOS = [
  "Hello", "Bonjour", "Hola", "Ciao",
  "こんにちは",   // Japanese
  "안녕하세요",   // Korean
  "नमस्ते",      // Devanagari (Hindi/Sanskrit)
  "สวัสดี",        // Thai
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
    id: "sketchy",
    title: "Sketchy",
    description: "An AI-powered web app that transforms hand-drawn wireframes into production-ready websites.",
    why: "Built at DeltaHacks 2026 — we were curious if we could bridge the gap between a napkin sketch and a deployed website using multimodal AI. Turns out, you can.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Gemini API"],
    link: "https://sketchywebsite.tech/",
    image: sketchy
  },
  {
    id: "inventory",
    title: "inven[s]tory",
    description: "A full-stack spatial asset mapping system for digitally organizing physical possessions.",
    why: "Growing up playing games with inventory systems, I always thought — why don't we have this for real life? As a kid I could never find obscure things I owned. The vision is to evolve it into a Depop-style marketplace where you can trade, sell, and message others.",
    tags: ["React", "TypeScript", "Supabase", "Gemini API"],
    link: "https://inven-s-tory.vercel.app/",
    image: investory
  },
  {
    id: "ascii",
    title: "ASCII Art Studio",
    description: "A real-time media-to-ASCII converter with video/webcam processing and a brutalist terminal UI.",
    why: "I've always loved the retro look of 70s and 80s computer terminal graphics. I wanted to push beyond static images and build a full real-time processing pipeline — handling video frames at 24fps, integrating webcam feeds, and creating an animated Matrix-style ASCII rain background. Zero dependencies, pure vanilla JS.",
    tags: ["JavaScript", "Canvas API", "HTML5", "CSS3"],
    link: "https://image-to-ascii-art.netlify.app/",
    image: ascii
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "linkedin", url: "https://www.linkedin.com/in/zainkkhan/" },
  { label: "github", url: "https://github.com/7kzaincode" },
  { label: "mail", url: "mailto:kn.zain@hotmail.com" },
  { label: "twitter", url: "https://x.com/sevenkzain" },
  { label: "resume", url: "/zainkhanresume.pdf" }
];

export const ARTWORK = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
];