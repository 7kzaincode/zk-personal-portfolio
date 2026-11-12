import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Angelica and Luca",
  subject: "Can I please please (please) intern at Nucleo?",
  greeting: "hey Angelica and Luca,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and lately I've been teaching a transformer which genes cancer cells can't live without, which felt worth mentioning to a company building an agentic platform for oncology.",
    "that's ADEPT, an attention-based model I've been building at UBC that predicts cancer cell-line gene dependencies from expression data. it outperforms DeepDep, and I'm writing the paper now.",
    "I also built [toothfairy](https://github.com/7kzaincode/toothfairy), which reads dental X-rays and clinical notes, builds a treatment plan with procedure codes and costs, and keeps each patient's history across visits.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I led the rebuild of their surface designer from plan to production. shoppers in 80+ countries use it to design custom tile and flooring patterns.",
    "where I think I'd help: turning messy biological and clinical data into something a model or an agent can actually use.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
