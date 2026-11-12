import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Alexander",
  subject: "Can I please please (please) intern at Patent Watch?",
  greeting: "hey Alexander,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and most of what I've built comes down to reading something dense and pulling out the one finding that matters, which I assume is most of spotting a patent infringement.",
    "that's [toothfairy](https://github.com/7kzaincode/toothfairy). it reads X-rays and clinical notes, pulls out the findings, builds a treatment plan with procedure codes and costs, and keeps each patient's history across visits.",
    "I also built [extgen](https://github.com/7kzaincode/the-extension), a Chrome side panel that turns a plain-english request into an installable extension, with a small pipeline of agents that plan, write, validate, and package it.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders.",
    "where I think I'd help: retrieval and evaluation: checking the model found the right thing for the right reason.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
