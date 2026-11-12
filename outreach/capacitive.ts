import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Rohan",
  subject: "Could I please please (please) come work with you at Capacitive?",
  greeting: "hey Rohan, I'm Zain.",
  paragraphs: [
    "word on the street is that Capacitive is the data gateway for agents. conveniently, every agent I've built spent most of its effort just getting at the data it needed.",
    "like I said in my email, I'm a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I'm interested in getting agents the data they need.",
    "at a hackathon my team and I built [otto](https://github.com/7kzaincode/otto), a voice assistant that turns what you say into calendar events, sent emails, and GitHub summaries. we won 1st in the LiveKit track (after the demo nearly died mid-pitch, because Google tokens expire every hour).",
    "I also spent almost three years as the only engineer at Kasperia, an appliance contracting company (and, on some days, the guy carrying the appliances up the stairs). I built them a system that takes a project from bid to supplier quotes to pricing to orders, and its whole gist is automating the manual, boring, error-prone work in between.",
    "this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's the thing that lets shoppers design their own tile patterns, and it's live in 80+ countries.",
    "I also moved the team onto AI coding agents with pre-commit gates, so nothing an agent wrote got committed without passing the checks.",
    "if you're interested, please book a time with me below!",
  ],
};

export default letter;
