import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Jacob",
  subject: "Could I please please (please) come work with you at Waabi?",
  greeting: "hey Jacob, I'm Zain.",
  paragraphs: [
    "word on the street is that you went from waterloo CS to self-driving research at Waabi. that's roughly the trip I'd like to take, so I figured I'd ask how it's done.",
    "like I said in my email, I'm a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I'm interested in self-driving, on both the research and the software side.",
    "I wrote ROS 2 nodes across perception, planning, and control for the autonomous car at [WATonomous](https://www.watonomous.ca/), waterloo's autonomous vehicle team.",
    "on the research side, I've been building ADEPT at UBC, a model that predicts which genes cancer cells can't live without. it outperforms DeepDep, and I'm writing the paper now.",
    "this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's the thing that lets shoppers design their own tile patterns, and it's live in 80+ countries.",
    "if you're interested, please book a time with me below!",
  ],
};

export default letter;
