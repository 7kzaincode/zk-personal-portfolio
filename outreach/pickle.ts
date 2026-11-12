import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Daniel and Sanio",
  subject: "Can I please please (please) intern at Pickle?",
  greeting: "hey Daniel and Sanio,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I built a personal agent that sends your emails and books your calendar when you talk to it, mostly so I wouldn't have to. a network of personal agents is the same laziness at scale, and I mean that kindly.",
    "at NexHacks my team and I built [otto](https://github.com/7kzaincode/otto), a voice-first assistant that turns what you say into calendar events, sent emails, and GitHub summaries. we won 1st in the LiveKit track.",
    "the AI was the easy part. our demo nearly died because Google tokens expire every hour, which is a fun thing to discover mid-pitch. we fixed it with silent refresh.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders.",
    "where I think I'd help: the reliability under a personal agent, since people stop trusting one the first time it drops something.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
