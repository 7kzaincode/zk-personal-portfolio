import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Andres and Akshay",
  subject: "Can I please please (please) intern at item?",
  greeting: "hey Andres and Akshay,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I built an assistant that turns what you say into sent emails and calendar events, mostly because I didn't want to do those things myself. an AI-native CRM that works for you is the same instinct with a business model.",
    "at NexHacks my team and I built [otto](https://github.com/7kzaincode/otto), a voice-first assistant that turns what you say into calendar events, sent emails, and GitHub summaries. we won 1st in the LiveKit track.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders. it kept separate histories for quotes, payments, and deliveries so every price and lead time traced back to its source, and had agents draft supplier follow-ups and payment emails straight from live project state.",
    "where I think I'd help: the agents that actually do the work, and the boring reliability underneath them.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
