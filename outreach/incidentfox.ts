import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Jimmy and Long",
  subject: "Can I please please (please) intern at IncidentFox?",
  greeting: "hey Jimmy and Long,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and my hackathon project had exactly one incident, during the pitch, with me as the on-call. so an AI SRE agent has my full support.",
    "at NexHacks my team and I built [otto](https://github.com/7kzaincode/otto), a voice-first assistant that turns what you say into calendar events, sent emails, and GitHub summaries. we won 1st in the LiveKit track. the AI was the easy part. our demo nearly died because Google tokens expire every hour, which is a fun thing to discover mid-pitch.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I shipped features across seven production apps (Python/Django services over gRPC, Postgres, AWS) and led the rebuild of their surface designer from plan to production.",
    "I also moved my team onto agent harnesses with pre-commit gates, so nothing an agent wrote got committed without passing the checks.",
    "where I think I'd help: pointing the agent at real failures and writing down honestly where it got them wrong.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
