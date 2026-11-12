import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Richie and Frank",
  subject: "Could I please please (please) come work with you at Praxim?",
  greeting: "hey Richie and Frank, I'm Zain.",
  paragraphs: [
    "word on the street is that Praxim is the agentic AI Word editor. conveniently, I spent my summer rebuilding an editor that runs in the browser, and before that built an agent that writes software from a sentence.",
    "like I said in my email, I'm a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I'm interested in editors, and agents that edit.",
    "this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. I moved its pattern rendering off a server and into the browser, so edits happen live, and shoppers in 80+ countries use it to design their own tile patterns.",
    "I also built [extgen](https://github.com/7kzaincode/the-extension), a Chrome side panel that turns a sentence into an installable extension, using a small team of agents that plan, write, check, and package it.",
    "I also spent almost three years as the only engineer at Kasperia, an appliance contracting company (and, on some days, the guy carrying the appliances up the stairs). I built them a system that takes a project from bid to supplier quotes to pricing to orders, and its whole gist is automating the manual, boring, error-prone work in between.",
    "if you're interested, please book a time with me below!",
  ],
};

export default letter;
