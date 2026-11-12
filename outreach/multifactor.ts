import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Vivek",
  subject: "Can I please please (please) intern at Multifactor?",
  greeting: "hey Vivek,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I learned about auth for AI agents the hard way: our voice agent's Google tokens expired in the middle of a hackathon pitch.",
    "at NexHacks my team and I built [otto](https://github.com/7kzaincode/otto), a voice-first assistant that turns what you say into calendar events, sent emails, and GitHub summaries. we won 1st in the LiveKit track. we fixed the tokens with silent refresh.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I moved my team onto agent harnesses with pre-commit gates, so nothing an agent wrote got committed without passing the checks.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders.",
    "where I think I'd help: building the agent-side integrations, since I've already hit a few of the ways they go wrong.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
