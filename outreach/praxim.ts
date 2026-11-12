import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Richie and Frank",
  subject: "Can I please please (please) intern at Praxim?",
  greeting: "hey Richie and Frank,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I spent my summer rebuilding an editor that runs in the browser, and before that built an agent that writes software from a sentence. an agentic Word editor is close to both.",
    "the editor was the surface designer at [Leap Tools](https://www.leaptools.com/). I moved pattern generation out of a server-side render service and into the browser so edits happen live. shoppers in 80+ countries use it.",
    "I also built [extgen](https://github.com/7kzaincode/the-extension), a Chrome side panel that turns a plain-english request into an installable extension, with a small pipeline of agents that plan, write, validate, and package it.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders.",
    "where I think I'd help: editor internals, and getting an agent to make changes a person would actually accept.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
