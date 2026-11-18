import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Justin",
  subject: "Could I please please (please) come work with you at Phoebe?",
  greeting: "hey Justin, I'm Zain.",
  paragraphs: [
    "I saw Phoebe is building what you call an immune system for software, and that you have an intern role listed for this winter. the last time my software broke in front of people was in the middle of a hackathon pitch, so I really could have used you that day.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "that project was [otto](https://github.com/7kzaincode/otto), which I built with a few friends. it's basically a voice assistant: you tell it what you want, and it creates the calendar event, sends the email, or summarizes your GitHub for you. the demo nearly died mid-pitch because our Google tokens expired, but hey, we still ended up winning first place in the LiveKit track.",
    "and this past summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "I also moved the team onto some internal tooling that I'd like to think sped everyone up. although maybe I'm just giving myself a bit too much credit. but hey, nobody's switched back yet.",
    "anyways, I'd really like to work at Phoebe this winter. so if you have a spot for an intern, I'd really appreciate a quick chat. you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
