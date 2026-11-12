import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Mathieu and Georges",
  subject: "Can I please please (please) intern at Novoflow?",
  greeting: "hey Mathieu and Georges,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I built a tool that makes training data for computer-use agents, so a company pointing those agents at healthcare operations is one I had to write to.",
    "that's [thinkaloud](https://github.com/7kzaincode/thinkaloud): you do a task on your computer while talking through what you're doing and why, and it turns that into reviewed training data for computer-use agents.",
    "I also built [toothfairy](https://github.com/7kzaincode/toothfairy), which reads dental X-rays and clinical notes, builds a treatment plan with procedure codes and costs, and keeps each patient's history across visits.",
    "where I think I'd help: collecting and reviewing the examples your agents learn from, and finding the tasks where they quietly go wrong.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
