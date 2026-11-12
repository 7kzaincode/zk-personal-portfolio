import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Krishang and Aarav",
  subject: "Can I please please (please) intern at Aegis?",
  greeting: "hey Krishang and Aarav,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I built an assistant that turns dental X-rays and clinical notes into treatment plans with procedure codes and costs. I've since realised that's the easy half, since nobody had to approve mine.",
    "that's [toothfairy](https://github.com/7kzaincode/toothfairy). it reads X-rays and clinical notes, pulls out the findings, builds a treatment plan with procedure codes and costs, and keeps each patient's history across visits.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders. its agents drafted supplier follow-ups and payment emails from live project state.",
    "where I think I'd help: getting an agent to write the appeal from what's actually in the record, and knowing where each line came from.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
