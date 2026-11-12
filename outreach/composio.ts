import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Balaji",
  subject: "Can I please please (please) intern at Composio?",
  greeting: "hey Balaji,",
  paragraphs: [
    "I hand-wrote the GitHub, Gmail, and calendar integrations for my last agent, which is the best argument for Composio I can think of. (this is a cold email, it just happens to live on my website.)",
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), looking for a software internship from january to april. I saw the fullstack engineering internship is open for winter 2027.",
    "at NexHacks my team and I built [otto](https://github.com/7kzaincode/otto), a voice-first assistant that turns what you say into calendar events, sent emails, and GitHub summaries. we won 1st in the LiveKit track. the AI was the easy part. our demo nearly died because Google tokens expire every hour, which is a fun thing to discover mid-pitch.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I shipped features across seven production apps (Python/Django services over gRPC, Postgres, AWS) and led the rebuild of their surface designer from plan to production.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders.",
    "would you be open to a 15-minute chat? I'll try to make it worth all 15 (or at least the first 10), and I'd love to hear whether the winter fullstack role is still open.",
  ],
};

export default letter;
