import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Ishan and Ishan",
  subject: "Can I please please (please) intern at Nimbic AI?",
  greeting: "hey Ishan and Ishan,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I spent my summer deciding what's allowed to happen on every commit, so docs that update themselves on every commit sounds like the part I didn't get to.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I moved my team onto agent harnesses with pre-commit gates, so nothing an agent wrote got committed without passing the checks.",
    "I also built [extgen](https://github.com/7kzaincode/the-extension), a Chrome side panel that turns a plain-english request into an installable extension, with a small pipeline of agents that plan, write, validate, and package it.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders.",
    "where I think I'd help: the commit-time plumbing, and being a test case for whether the docs it writes are ones an engineer would keep.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
