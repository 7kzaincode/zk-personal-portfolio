import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Aryah and Ajay",
  subject: "Can I please please (please) intern at o11?",
  greeting: "hey Aryah and Ajay,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I built an agent that takes real actions on your behalf, and spent a surprising amount of that project worrying about what each request cost. so a wallet for agents makes sense to me.",
    "at NexHacks my team and I built [otto](https://github.com/7kzaincode/otto), a voice-first assistant that turns what you say into calendar events, sent emails, and GitHub summaries. we won 1st in the LiveKit track. along the way I cut tokens per request from 4000 to 1800.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I shipped features across seven production apps (Python/Django services over gRPC, Postgres, AWS) and led the rebuild of their surface designer from plan to production.",
    "where I think I'd help: the integration work: getting agents to pay for things without anyone being surprised by the bill.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
