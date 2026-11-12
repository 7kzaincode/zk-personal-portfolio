import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Tiantian",
  subject: "Can I please please (please) intern at Andy?",
  greeting: "hey Tiantian,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I've built two things that sit on either side of what Andy does: one turns speech into finished tasks, and the other turns clinical notes into structured plans.",
    "at NexHacks my team and I built [otto](https://github.com/7kzaincode/otto), a voice-first assistant that turns what you say into calendar events, sent emails, and GitHub summaries. we won 1st in the LiveKit track.",
    "I also built [toothfairy](https://github.com/7kzaincode/toothfairy), which reads dental X-rays and clinical notes, builds a treatment plan with procedure codes and costs, and keeps each patient's history across visits.",
    "where I think I'd help: the gap between what a nurse says out loud and the form nobody wants to fill in afterwards.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
