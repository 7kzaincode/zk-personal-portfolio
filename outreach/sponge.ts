import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Eric and Jae",
  subject: "Can I please please (please) intern at Sponge?",
  greeting: "hey Eric and Jae,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I built agents that drafted an appliance contractor's payment emails, which is about as close to the agent economy as a contractor gets. financial infrastructure for the real thing sounds more useful.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders. every payment in it traced back to its source.",
    "at NexHacks my team and I built [otto](https://github.com/7kzaincode/otto), a voice-first assistant that turns what you say into calendar events, sent emails, and GitHub summaries. we won 1st in the LiveKit track. along the way I cut tokens per request from 4000 to 1800.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I shipped features across seven production apps (Python/Django services over gRPC, Postgres, AWS) and led the rebuild of their surface designer from plan to production.",
    "where I think I'd help: the integration layer, where an agent spending money has to be boring and correct.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
