import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Tim",
  subject: "Can I please please (please) intern at Zus Health?",
  greeting: "hey Tim,",
  paragraphs: [
    "Zus has platform and data acquisition co-ops posted for winter 2027, and I've spent a fair bit of time getting health data into a shape software can use, so I'm writing to the person who designed the platform.",
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), looking for a software internship from january to april.",
    "[toothfairy](https://github.com/7kzaincode/toothfairy) reads dental X-rays and clinical notes, pulls out the findings, and keeps each patient's history across visits.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I shipped features across seven production apps (Python/Django services over gRPC, Postgres, AWS) and led the rebuild of their surface designer from plan to production.",
    "before that I was the only engineer at Kasperia, where I designed a data model so every value in the system traces back to its source.",
    "where I think I'd help: the data acquisition side, where records arrive in whatever shape the last system left them.",
    "would you be open to a 15-minute chat? I'll try to make it worth all 15 (or at least the first 10), and I'd love to hear what the two co-op roles actually involve.",
  ],
};

export default letter;
