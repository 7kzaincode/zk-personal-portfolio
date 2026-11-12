import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Hassan",
  subject: "Could I please please (please) come work with you at Argos Research?",
  greeting: "hey Hassan, I'm Zain.",
  paragraphs: [
    "word on the street is that Argos is on WaterlooWorks. most of what I've built with models ends in a program, not a prediction, so 'intelligence as programs' caught my attention.",
    "like I said in my email, I'm a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I'm interested in programmatic AI.",
    "I built [extgen](https://github.com/7kzaincode/the-extension), a Chrome side panel that turns a sentence into an installable extension, using a small team of agents that plan, write, check, and package it.",
    "on the research side, I've been building ADEPT at UBC, a model that predicts which genes cancer cells can't live without. it outperforms DeepDep, and I'm writing the paper now.",
    "this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's the thing that lets shoppers design their own tile patterns, and it's live in 80+ countries.",
    "I also moved the team onto AI coding agents with pre-commit gates, so nothing an agent wrote got committed without passing the checks.",
    "if you're interested, please book a time with me below!",
  ],
};

export default letter;
