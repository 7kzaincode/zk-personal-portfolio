import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Shaunak and Rahul",
  subject: "Can I please please (please) intern at Dexto?",
  greeting: "hey Shaunak and Rahul,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I've now built three different agent systems and written the plumbing from scratch each time, which is a good way to appreciate anyone calling themselves AWS for AI agents.",
    "at NexHacks my team and I built [otto](https://github.com/7kzaincode/otto), a voice-first assistant that turns what you say into calendar events, sent emails, and GitHub summaries. we won 1st in the LiveKit track.",
    "I also built [extgen](https://github.com/7kzaincode/the-extension), a Chrome side panel that turns a plain-english request into an installable extension, with a small pipeline of agents that plan, write, validate, and package it.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I moved my team onto agent harnesses with pre-commit gates, so nothing an agent wrote got committed without passing the checks.",
    "where I think I'd help: being an annoying first user of the platform, then fixing whatever I complained about.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
