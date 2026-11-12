import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Yos and Timmy",
  subject: "Could I please please (please) come work with you at Amby?",
  greeting: "hey Yos and Timmy, I'm Zain.",
  paragraphs: [
    "word on the street is that Amby is the health coach that texts you first. conveniently, I built an assistant that remembers your dental history better than you do, although mine waits to be asked.",
    "like I said in my email, I'm a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I'm interested in assistants that actually remember you.",
    "I built [toothfairy](https://github.com/7kzaincode/toothfairy), an assistant that remembers your dental history better than you do. it reads X-rays and clinical notes and turns them into a treatment plan with procedure codes and costs.",
    "I also built [otto](https://github.com/7kzaincode/otto) with my team at a hackathon: a voice assistant that turns what you say into calendar events, sent emails, and GitHub summaries. we won 1st in the LiveKit track (after the demo nearly died mid-pitch, because Google tokens expire every hour).",
    "this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's the thing that lets shoppers design their own tile patterns, and it's live in 80+ countries.",
    "if you're interested, please book a time with me below!",
  ],
};

export default letter;
