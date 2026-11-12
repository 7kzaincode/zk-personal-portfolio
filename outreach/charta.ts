import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Scott",
  subject: "Can I please please (please) intern at Charta Health?",
  greeting: "hey Scott,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I built an assistant that reads clinical notes and turns them into treatment plans with procedure codes and costs, which I gather is a toy version of chart review.",
    "that's [toothfairy](https://github.com/7kzaincode/toothfairy). it reads X-rays and clinical notes, pulls out the findings, builds a treatment plan with procedure codes and costs, and keeps each patient's history across visits.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders. every value in it traces back to its source.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I led the rebuild of their surface designer from plan to production. shoppers in 80+ countries use it to design custom tile and flooring patterns.",
    "where I think I'd help: forward-deployed work: sitting with the messy charts and the customer until the model's output is something they'd sign.",
    "would love to chat if you're open to it. I heard you ran a january to april co-op for waterloo students last winter, and I'd like to be this winter's.",
  ],
};

export default letter;
