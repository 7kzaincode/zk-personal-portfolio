import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Vladyslav",
  subject: "Could I please please (please) come work with you at Botpress?",
  greeting: "hey Vladyslav, I'm Zain.",
  paragraphs: [
    "word on the street is that Botpress has two software intern postings for winter 2027. conveniently, I've built three agent systems the hard way, without a platform, so I'm motivated.",
    "like I said in my email, I'm a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I'm interested in platforms for building agents.",
    "at a hackathon my team and I built [otto](https://github.com/7kzaincode/otto), a voice assistant that turns what you say into calendar events, sent emails, and GitHub summaries. we won 1st in the LiveKit track (after the demo nearly died mid-pitch, because Google tokens expire every hour).",
    "I also built [extgen](https://github.com/7kzaincode/the-extension), a Chrome side panel that turns a sentence into an installable extension, using a small team of agents that plan, write, check, and package it.",
    "this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's the thing that lets shoppers design their own tile patterns, and it's live in 80+ countries.",
    "I also moved the team onto AI coding agents with pre-commit gates, so nothing an agent wrote got committed without passing the checks.",
    "if you're interested, please book a time with me below!",
  ],
};

export default letter;
