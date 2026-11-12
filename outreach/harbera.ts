import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Sophia and Veronica",
  subject: "Can I please please (please) intern at Harbera?",
  greeting: "hey Sophia and Veronica,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I've built software for two kinds of paperwork: clinical records, and an appliance contractor's quotes and purchase orders. provider credentialing sounds like the two had a child.",
    "I also built [toothfairy](https://github.com/7kzaincode/toothfairy), which reads dental X-rays and clinical notes, builds a treatment plan with procedure codes and costs, and keeps each patient's history across visits.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders. every value in it traces back to its source.",
    "where I think I'd help: getting documents into a state where a person can verify them in seconds instead of re-reading everything.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
