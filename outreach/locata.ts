import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Alejandro and Joshua",
  subject: "Can I please please (please) intern at Locata?",
  greeting: "hey Alejandro and Joshua,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I've built an assistant that reads clinical notes and one that chases suppliers for follow-ups. referral automation for clinics looks like it needs a bit of both.",
    "I also built [toothfairy](https://github.com/7kzaincode/toothfairy), which reads dental X-rays and clinical notes, builds a treatment plan with procedure codes and costs, and keeps each patient's history across visits.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders. its agents drafted supplier follow-ups from live project state.",
    "where I think I'd help: the handoff: making sure a referral that leaves one system actually lands in the next one.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
