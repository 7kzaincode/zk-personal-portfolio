import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Justin",
  subject: "Can I please please (please) intern at Phoebe?",
  greeting: "hey Justin,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and the last time my software failed live it was in the middle of a hackathon pitch, so an immune system for software is something I'd have liked that day.",
    "at NexHacks my team and I built [otto](https://github.com/7kzaincode/otto), a voice-first assistant that turns what you say into calendar events, sent emails, and GitHub summaries. we won 1st in the LiveKit track. the AI was the easy part. our demo nearly died because Google tokens expire every hour, which is a fun thing to discover mid-pitch. we fixed it with silent refresh.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I moved my team onto agent harnesses with pre-commit gates, so nothing an agent wrote got committed without passing the checks.",
    "I also shipped features across seven production apps (Python/Django services over gRPC, Postgres, AWS) and led the rebuild of their surface designer from plan to production.",
    "where I think I'd help: the agent platform itself, plus a steady supply of my own bugs for it to practise on.",
    "would love to chat if you're open to it. I saw the software engineer intern role lists winter 2027, and january to april is exactly my term.",
  ],
};

export default letter;
