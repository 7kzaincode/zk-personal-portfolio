import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Eric and Jae",
  subject: "Could I please please (please) come work with you at Sponge?",
  greeting: "hey Eric and Jae, I'm Zain.",
  paragraphs: [
    "word on the street is that Sponge is building financial infrastructure for the agent economy. conveniently, I built software that drafted an appliance contractor's payment emails, which is about as close to the agent economy as a contractor gets.",
    "like I said in my email, I'm a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I'm interested in agents that handle money.",
    "I spent almost three years as the only engineer at Kasperia, an appliance contracting company (and, on some days, the guy carrying the appliances up the stairs). I built them a system that takes a project from bid to supplier quotes to pricing to orders, and its whole gist is automating the manual, boring, error-prone work in between, while still being able to tell you where every number came from.",
    "I also built [otto](https://github.com/7kzaincode/otto) with my team at a hackathon: a voice assistant that turns what you say into calendar events, sent emails, and GitHub summaries. we won 1st in the LiveKit track (after the demo nearly died mid-pitch, because Google tokens expire every hour).",
    "this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production (it's live in 80+ countries), and shipped backend features across six other production apps.",
    "if you're interested, please book a time with me below!",
  ],
};

export default letter;
