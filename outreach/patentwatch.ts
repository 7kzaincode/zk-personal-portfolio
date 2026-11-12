import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Alexander",
  subject: "Could I please please (please) come work with you at Patent Watch?",
  greeting: "hey Alexander, I'm Zain.",
  paragraphs: [
    "word on the street is that Patent Watch uses AI to detect patent infringements. most of what I've built comes down to reading something dense and pulling out the one finding that matters, so it felt familiar.",
    "like I said in my email, I'm a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I'm interested in getting models to find the right thing for the right reason.",
    "I built [toothfairy](https://github.com/7kzaincode/toothfairy), an assistant that remembers your dental history better than you do. it reads X-rays and clinical notes and turns them into a treatment plan with procedure codes and costs.",
    "I also built [extgen](https://github.com/7kzaincode/the-extension), a Chrome side panel that turns a sentence into an installable extension, using a small team of agents that plan, write, check, and package it.",
    "I also spent almost three years as the only engineer at Kasperia, an appliance contracting company (and, on some days, the guy carrying the appliances up the stairs). I built them a system that takes a project from bid to supplier quotes to pricing to orders, and its whole gist is automating the manual, boring, error-prone work in between.",
    "if you're interested, please book a time with me below!",
  ],
};

export default letter;
