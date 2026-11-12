import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Alex and Nam",
  subject: "Could I please please (please) come work with you at truthsystems?",
  greeting: "hey Alex and Nam, I'm Zain.",
  paragraphs: [
    "word on the street is that truthsystems blocks risky behavior with real-time governance agents. conveniently, I spent part of my summer stopping coding agents from committing anything that failed checks.",
    "like I said in my email, I'm a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I'm interested in keeping agents inside the lines.",
    "this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's the thing that lets shoppers design their own tile patterns, and it's live in 80+ countries.",
    "I also moved the team onto AI coding agents with pre-commit gates, so nothing an agent wrote got committed without passing the checks.",
    "I also built [extgen](https://github.com/7kzaincode/the-extension), a Chrome side panel that turns a sentence into an installable extension, using a small team of agents that plan, write, check, and package it.",
    "I also spent almost three years as the only engineer at Kasperia, an appliance contracting company (and, on some days, the guy carrying the appliances up the stairs). I built them a system that takes a project from bid to supplier quotes to pricing to orders, and its whole gist is automating the manual, boring, error-prone work in between.",
    "if you're interested, please book a time with me below!",
  ],
};

export default letter;
