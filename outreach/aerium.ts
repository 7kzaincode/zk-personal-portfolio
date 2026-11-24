import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Adam and Michael",
  subject: "Could I please please (please) come work with you at Aerium?",
  greeting: "hey Adam and Michael, I'm Zain.",
  paragraphs: [
    "I saw that Aerium builds quotes for manufacturers straight from their drawings and their past jobs, and that you're a small team based in Toronto. I'm just down the 401 at Waterloo, and I spent almost three years building the quoting system for a contractor. so I figured I'd reach out.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "so, that company was Kasperia, which is an appliance contracting company based out of Vancouver. some days I was working on internal tooling, and others I was just the guy carrying appliances up the stairs. I kind of just did it all. the main thing I built was a system that takes a project from the bid and the supplier quotes, through pricing and every change order, all the way to deliveries and invoices. every cost in it is a supplier's quote with the file attached, and there's an agent that checks what was typed in against that file. it can also draft the changes and the emails, but a person approves them before anything goes out. so every number in it traces back to where it came from.",
    "and then this past summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "I also moved the team onto some internal tooling that I'd like to think sped everyone up. although maybe I'm just giving myself a bit too much credit. but hey, nobody's switched back yet.",
    "anyways, I'd really like to work on Aerium this winter. so if you have room for an intern, I'd really appreciate a quick chat. you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
