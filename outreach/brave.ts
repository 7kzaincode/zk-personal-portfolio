import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Tiffany",
  subject: "Could I please please (please) come work with you at Brave?",
  greeting: "hey Tiffany, I'm Zain.",
  paragraphs: [
    "I saw Brave has a posting written specifically for Waterloo students in the winter term. and, well, I'm a Waterloo student, and it's almost winter. so here I am.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "so, a little bit about me: I built [extgen](https://github.com/7kzaincode/the-extension), which is a Chrome side panel where you type what you want in a sentence, and it builds you an extension you can actually install.",
    "and this past summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries. the big change was moving the pattern rendering off a server and into the browser, so when you edit a pattern it just updates live.",
    "and before that, I spent almost three years as the only engineer at Kasperia, which is an appliance contracting company. some days I was just working on internal tooling, and others I was just the guy carrying appliances up the stairs. I kind of just did it all. on top of that, I built them a system that takes a project from the bid and the supplier quotes, through pricing and every change order, all the way to deliveries and invoices, and its whole gist is basically just automating the manual, boring, error-prone work in between.",
    "anyways, if any engineering teams at Brave still have intern spots for january, I'd love to be considered. you can book a time with me right below this.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
