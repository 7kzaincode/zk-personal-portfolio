import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Vladyslav",
  subject: "Could I please please (please) come work with you at Botpress?",
  greeting: "hey Vladyslav, I'm Zain.",
  paragraphs: [
    "I saw Botpress has two software intern postings up for this winter. and I've built a few agents the hard way, without a platform, so I think I'd appreciate yours more than most.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "so, a little bit about me: I built [otto](https://github.com/7kzaincode/otto) with a few friends at a hackathon. it's basically a voice assistant: you tell it what you want, and it creates the calendar event, sends the email, or summarizes your GitHub for you. and we ended up winning first place in the LiveKit track.",
    "I also built [extgen](https://github.com/7kzaincode/the-extension), which is a Chrome side panel where you type what you want in a sentence, and it builds you an extension you can actually install.",
    "and this past summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "I also moved the team onto some internal tooling that I'd like to think sped everyone up. although maybe I'm just giving myself a bit too much credit. but hey, nobody's switched back yet.",
    "anyways, if any engineering teams at Botpress still have intern spots for january, I'd love to be considered. you can book a time with me right below this.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
