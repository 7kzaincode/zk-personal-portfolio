import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Jimmy and Long",
  subject: "Could I please please (please) come work with you at IncidentFox?",
  greeting: "hey Jimmy and Long, I'm Zain.",
  paragraphs: [
    "word on the street is that IncidentFox is an AI SRE that triages and fixes production incidents. my hackathon project had exactly one incident, during the pitch, with me as the on-call, so you have my full support.",
    "like I said in my email, I'm a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I'm interested in agents that fix production.",
    "at a hackathon my team and I built [otto](https://github.com/7kzaincode/otto), a voice assistant that turns what you say into calendar events, sent emails, and GitHub summaries. we won 1st in the LiveKit track (after the demo nearly died mid-pitch, because Google tokens expire every hour).",
    "this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production (it's live in 80+ countries), and shipped backend features across six other production apps.",
    "I also moved the team onto AI coding agents with pre-commit gates, so nothing an agent wrote got committed without passing the checks.",
    "if you're interested, please book a time with me below!",
  ],
};

export default letter;
