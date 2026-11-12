import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Yos and Timmy",
  subject: "Can I please please (please) intern at Amby?",
  greeting: "hey Yos and Timmy,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I built an assistant that remembers your dental history better than you do, although unlike yours it waits to be asked.",
    "that's [toothfairy](https://github.com/7kzaincode/toothfairy). it reads X-rays and clinical notes, pulls out the findings, builds a treatment plan with procedure codes and costs, and keeps each patient's history across visits.",
    "at NexHacks my team and I built [otto](https://github.com/7kzaincode/otto), a voice-first assistant that turns what you say into calendar events, sent emails, and GitHub summaries. we won 1st in the LiveKit track.",
    "where I think I'd help: memory and follow-through, the part where the coach remembers what you said last week and does something about it.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
