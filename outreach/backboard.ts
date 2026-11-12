import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Rob and Nir",
  subject: "Could I please please (please) come work with you at Backboard?",
  greeting: "hey Rob and Nir, I'm Zain.",
  paragraphs: [
    "your co-op page says you judge people on what they've built, not their coursework, which is a relief given my coursework. so here's what I've built.",
    "like I said in my email, I'm a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I'm interested in memory for AI apps.",
    "I built [toothfairy](https://github.com/7kzaincode/toothfairy), an assistant that remembers your dental history better than you do. it reads X-rays and clinical notes and turns them into a treatment plan with procedure codes and costs.",
    "I also built [otto](https://github.com/7kzaincode/otto) with my team at a hackathon: a voice assistant that turns what you say into calendar events, sent emails, and GitHub summaries. we won 1st in the LiveKit track (after the demo nearly died mid-pitch, because Google tokens expire every hour).",
    "I also spent almost three years as the only engineer at Kasperia, an appliance contracting company (and, on some days, the guy carrying the appliances up the stairs). I built them a system that takes a project from bid to supplier quotes to pricing to orders, and its whole gist is automating the manual, boring, error-prone work in between.",
    "this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's the thing that lets shoppers design their own tile patterns, and it's live in 80+ countries.",
    "if you're interested, please book a time with me below!",
  ],
};

export default letter;
