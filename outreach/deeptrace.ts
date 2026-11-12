import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Andy",
  subject: "Can I please please (please) intern at Deeptrace?",
  greeting: "hey Andy,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and the last time something of mine broke at the worst possible moment, it was mid-pitch at a hackathon, so I have a personal interest in AI agents for on-call.",
    "at NexHacks my team and I built [otto](https://github.com/7kzaincode/otto), a voice-first assistant that turns what you say into calendar events, sent emails, and GitHub summaries. we won 1st in the LiveKit track. the AI was the easy part. our demo nearly died because Google tokens expire every hour, which is a fun thing to discover mid-pitch.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I moved my team onto agent harnesses with pre-commit gates, so nothing an agent wrote got committed without passing the checks.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders.",
    "where I think I'd help: building and breaking the agent against real incidents, and the tooling that tells you why it did what it did.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
