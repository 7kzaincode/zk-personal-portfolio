import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Jason",
  subject: "Could I please please (please) come work with you at Netic?",
  greeting: "hey Jason, I'm Zain.",
  paragraphs: [
    "I saw that Netic builds AI for home service businesses, and I just so happened to spend almost three years as the only engineer at one. so I figured I'd reach out and say hi.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "so, that company was Kasperia, which is an appliance contracting company. some days I was just working on internal tooling, and others I was just the guy carrying appliances up the stairs. I kind of just did it all. on top of that, I built them a system that takes a project from the bid and the supplier quotes, through pricing and every change order, all the way to deliveries and invoices, and its whole gist is basically just automating the manual, boring, error-prone work in between.",
    "and then this past summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "I also built [otto](https://github.com/7kzaincode/otto) with a few friends at a hackathon. it's basically a voice assistant: you tell it what you want, and it creates the calendar event, sends the email, or summarizes your GitHub for you. and we ended up winning first place in the LiveKit track.",
    "anyways, if any engineering teams at Netic still have intern spots for january, I'd love to be considered. you can book a time with me right below this.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
