import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Neer and Aniruddh",
  subject: "Can I please please (please) intern at Playgent?",
  greeting: "hey Neer and Aniruddh,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I've built a tool that records what computer-use agents should do, and gates on what coding agents are allowed to do. sandboxes for agents sits neatly between the two.",
    "the first is [thinkaloud](https://github.com/7kzaincode/thinkaloud): you do a task on your computer while talking through what you're doing and why, and it turns that into reviewed training data for computer-use agents.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I moved my team onto agent harnesses with pre-commit gates, so nothing an agent wrote got committed without passing the checks.",
    "I also built [extgen](https://github.com/7kzaincode/the-extension), a Chrome side panel that turns a plain-english request into an installable extension, with a small pipeline of agents that plan, write, validate, and package it.",
    "where I think I'd help: building realistic tasks to run in the sandbox, and finding the ones where agents quietly misbehave.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
