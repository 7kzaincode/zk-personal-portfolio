import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Justin",
  subject: "Could I please please (please) come work with you at Phoebe?",
  greeting: "hey Justin, I'm Zain.",
  paragraphs: [
    "word on the street is that Phoebe is building an immune system for software, and has an intern role listed for winter 2027. the last time my software failed live was mid-pitch at a hackathon, so I'd have liked one that day.",
    "like I said in my email, I'm a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I'm interested in agents that fix software.",
    "at a hackathon my team and I built [otto](https://github.com/7kzaincode/otto), a voice assistant that turns what you say into calendar events, sent emails, and GitHub summaries. we won 1st in the LiveKit track (after the demo nearly died mid-pitch, because Google tokens expire every hour).",
    "this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's the thing that lets shoppers design their own tile patterns, and it's live in 80+ countries.",
    "I also moved the team onto AI coding agents with pre-commit gates, so nothing an agent wrote got committed without passing the checks.",
    "if you're interested, please book a time with me below!",
  ],
};

export default letter;
