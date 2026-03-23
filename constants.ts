
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
import otto from './images/otto_removed.png';
import toothfairy from './images/toothfairy.png';
import scanifyImg from './images/scanify.png';


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
  "Swift", "Supabase", "PostgreSQL", "Tailwind CSS", "ARM Assembly",
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
    id: "otto",
    title: "OTTO",
    description: "An AI voice agent that automates GitHub, Gmail, and Google Calendar workflows through natural speech commands.",
    why: "I wanted to build something that felt like having a real assistant, not another chatbot you have to type at, but something you could just talk to while your hands are busy coding. So I made jarvis for developers :) and won 1st place LiveKit track @ NEXhacks (Carnegie Mellon University, 1500+ hackers) ",
    tags: ["Next.js", "TypeScript", "Python", "LiveKit WebRTC", "Deepgram", "Gemini 2.5 Flash", "Supabase", "Token Compression"],
    link: "https://github.com/7kzaincode/otto", // update with actual link
    image: otto // update with actual image variable
  },
  {
    id: "toothfairy",
    title: "toothfairy",
    description: "An AI-powered dentistry assistant that brings X-ray analysis, clinical notes extraction, and treatment planning into a single intelligent workspace for both dentists and patients.",
    why: "Dentists deal with too many disconnected tools — imaging viewers, paper charts, CDT code references — and none of them talk to each other. Meanwhile, patients leave the office with zero understanding of what's wrong. We built toothfairy at Hack Canada 2026 to give clinicians and patients the same complete picture: current findings, treatment history, and what comes next.",
    tags: ["Next.js", "TypeScript", "Python", "FastAPI", "Three.js", "TensorFlow", "Google Gemini"],
    link: "https://github.com/7kzaincode/toothfairy",
    image: toothfairy
  },
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
  },
  {
    id: "scanify",
    title: "Scanify",
    description: "A universal barcode interaction platform delivered as an App Clip — scan any product barcode in-store and get a tailored experience for that product and merchant.",
    why: "Every product already has a barcode, but they've only ever served inventory systems. We asked: what if we pointed them at the customer? One Clip, one scanner, infinite experiences — from Nike shopping flows to Sephora AR try-ons to drug interaction checks. Built at Hack Canada 2026.",
    tags: ["Swift", "SwiftUI", "ARKit", "SceneKit", "AVFoundation"],
    link: "https://devpost.com/software/scanify-db2xms",
    image: scanifyImg
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