import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Mathieu and Georges",
  subject: "Could I please please (please) come work with you at Novoflow?",
  greeting: "hey Mathieu and Georges, I'm Zain.",
  paragraphs: [
    "word on the street is that Novoflow points computer-using agents at healthcare operations. conveniently, I built a tool that makes training data for computer-use agents, so I had to write.",
    "like I said in my email, I'm a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I'm interested in computer-use agents.",
    "I built [thinkaloud](https://github.com/7kzaincode/thinkaloud): you do a task on your computer while talking through why, and it turns that into training data for computer-use agents.",
    "I also built [toothfairy](https://github.com/7kzaincode/toothfairy), an assistant that remembers your dental history better than you do. it reads X-rays and clinical notes and turns them into a treatment plan with procedure codes and costs.",
    "this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's the thing that lets shoppers design their own tile patterns, and it's live in 80+ countries.",
    "if you're interested, please book a time with me below!",
  ],
};

export default letter;
