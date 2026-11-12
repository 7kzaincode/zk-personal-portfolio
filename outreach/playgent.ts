import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Neer and Aniruddh",
  subject: "Could I please please (please) come work with you at Playgent?",
  greeting: "hey Neer and Aniruddh, I'm Zain.",
  paragraphs: [
    "word on the street is that Playgent builds sandboxes for AI agents. conveniently, I've built a tool that records what computer-use agents should do, and gates on what coding agents are allowed to do.",
    "like I said in my email, I'm a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I'm interested in testing what agents actually do.",
    "I built [thinkaloud](https://github.com/7kzaincode/thinkaloud): you do a task on your computer while talking through why, and it turns that into training data for computer-use agents.",
    "this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's the thing that lets shoppers design their own tile patterns, and it's live in 80+ countries.",
    "I also moved the team onto AI coding agents with pre-commit gates, so nothing an agent wrote got committed without passing the checks.",
    "I also built [extgen](https://github.com/7kzaincode/the-extension), a Chrome side panel that turns a sentence into an installable extension, using a small team of agents that plan, write, check, and package it.",
    "if you're interested, please book a time with me below!",
  ],
};

export default letter;
