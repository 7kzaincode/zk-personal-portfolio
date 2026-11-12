import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Kofi and Kristy",
  subject: "Can I please please (please) intern at Cenote?",
  greeting: "hey Kofi and Kristy,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I spent my summer building commerce features that shoppers in 80+ countries use, and before that building an agent that does things when you talk to it. Cenote looks like both at once.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I shipped features across seven production apps (Python/Django services over gRPC, Postgres, AWS) and led the rebuild of their surface designer from plan to production.",
    "at NexHacks my team and I built [otto](https://github.com/7kzaincode/otto), a voice-first assistant that turns what you say into calendar events, sent emails, and GitHub summaries. we won 1st in the LiveKit track.",
    "where I think I'd help: the join between the conversation and the store: catalog data, checkout edge cases, and agents that don't promise things the backend can't do.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
