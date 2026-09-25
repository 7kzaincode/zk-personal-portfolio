
import { Project, SocialLink } from './types';

export interface DetailedProject extends Project {
  why: string;
  award?: string;
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
import teachar from './images/teachar.jpg';


export const NAME = "zain khan";
export const SUBTITLE = "comp-eng @uwaterloo";
export const BIO = "I'm a second-year Computer Engineering student at the University of Waterloo. I like building software that is simple to look at and actually useful to use.";

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
    id: "leaptools",
    company: "Leap Tools",
    role: "Software Engineering Intern",
    period: "2026",
    description: "Shipped shopper-facing commerce work on the Roomvo AR visualizer in TypeScript, React, and Next.js, and prototyped Surface Designer, a client-side alternative to the C++ pattern-generation backend.",
    tags: ["TypeScript", "Next.js", "React", "Redux Toolkit", "Tailwind CSS", "PostHog"],
    link: "https://www.leaptools.com/"
  },
  {
    id: "watonmous",
    company: "WATonomous",
    role: "Robotics Software Engineer, EVE Autonomy",
    period: "2025",
    description: "Autonomous navigation in C++ and ROS 2: costmaps, A* path planning, and Pure Pursuit control.",
    tags: ["C++", "ROS 2", "Path Planning", "Controls"],
    link: "https://www.watonomous.ca/"
  },
  {
    id: "kasperia",
    company: "Kasperia",
    role: "Software Developer (Frontend & Data)",
    period: "2023",
    description: "Cold-pitched them a prototype, then stayed on contract building React dashboards and automated data pipelines that cut manual reporting time 40%.",
    tags: ["React", "JavaScript", "SQL", "Chart.js"],
    link: "https://kasperia.ca/"
  }
];

export const PROJECTS: DetailedProject[] = [
  {
    id: "otto",
    title: "OTTO",
    award: "1st place · LiveKit Track @ NexHACKS (CMU)",
    description: "An AI voice agent that automates GitHub, Gmail, and Google Calendar workflows through natural speech commands.",
    why: "I wanted to build something that felt like having a real assistant, not another chatbot you have to type at, but something you could just talk to while your hands are busy coding. So I made jarvis for developers :) and won 1st place LiveKit track @ NEXhacks (Carnegie Mellon University, 1500+ hackers) ",
    tags: ["Next.js", "TypeScript", "Python", "LiveKit WebRTC", "Deepgram", "Gemini 2.5 Flash", "Supabase", "Token Compression"],
    link: "https://github.com/7kzaincode/otto", // update with actual link
    image: otto // update with actual image variable
  },
  {
    id: "teachar",
    title: "teachAR",
    description: "A mixed-reality tutor for Meta Quest that lets an expert record a physical task once, then guides learners with translucent ghost hands in their own workspace.",
    why: "Most how-tos stop at a video — pause, rewind, squint at someone else's hands. teachAR (Trail) flips that: you record the motion in WebXR, then follow articulated ghosts and checkpoints at your own pace on a Quest 3S, with voice coaching when you ask if you're doing it right. Built as a TypeScript monorepo spanning Quest Browser, Three.js, and Fastify backends for pairing, vision, and live coaching.",
    tags: ["WebXR", "Three.js", "TypeScript", "Fastify", "Meta Quest"],
    link: "https://github.com/7kzaincode/teachAR",
    image: teachar
  },
  {
    id: "toothfairy",
    title: "toothfairy",
    description: "An AI-native dentistry assistant that brings X-ray analysis, clinical notes extraction, and treatment planning into a single intelligent workspace for both dentists and patients.",
    why: "Dentists deal with too many disconnected tools — imaging viewers, paper charts, CDT code references — and none of them talk to each other. Meanwhile, patients leave the office with zero understanding of what's wrong. We built toothfairy at GenAi Genesis 2026 to give clinicians and patients the same complete picture: current findings, treatment history, and what comes next.",
    tags: ["Next.js", "TypeScript", "Python", "FastAPI", "Three.js", "TensorFlow", "Google Gemini"],
    link: "https://github.com/7kzaincode/toothfairy",
    image: toothfairy
  },
  {
    id: "extgen",
    title: "the extension",
    description: "A Chrome side panel that turns plain-English requests into installable browser extensions, generating the content scripts, files, and a packaged ZIP for you.",
    why: "Building a browser extension should feel as quick as describing one, so extgen handles the boilerplate, validation, and packaging while you stay in the browser.",
    tags: ["React", "TypeScript", "Chrome Extensions", "FastAPI"],
    link: "https://github.com/7kzaincode/the-extension",
    image: ""
  },
  {
    id: "sketchy",
    title: "Sketchy",
    description: "Turns hand-drawn wireframes into deployable websites in under a minute using multimodal AI.",
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
    description: "A universal barcode interaction platform delivered as an App Clip. Scan any product barcode in-store to get a tailored experience for that product and merchant.",
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
  { label: "resume", url: "/zainkhanresumesept.pdf" }
];

export const ARTWORK = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
];