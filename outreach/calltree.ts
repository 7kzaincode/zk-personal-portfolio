import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Kun and Robertson",
  subject: "Can I please please (please) intern at Calltree?",
  greeting: "hey Kun and Robertson,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I've spent an unreasonable amount of time shaving milliseconds off a voice agent, so a company building AI support reps for call centers got my attention.",
    "at NexHacks my team and I built [otto](https://github.com/7kzaincode/otto), a voice-first assistant that turns what you say into calendar events, sent emails, and GitHub summaries. we won 1st in the LiveKit track. it gets from speech to action in under a second.",
    "the AI was the easy part. our demo nearly died because Google tokens expire every hour, which is a fun thing to discover mid-pitch. we fixed it with silent refresh, and I walked away convinced that for anything people rely on daily, 'it just works' beats 'it's smart'.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders.",
    "where I think I'd help: latency, reliability, and the long tail of things that only break on a live call.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
