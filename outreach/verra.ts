import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Kashyap",
  subject: "Could I please please (please) come work with you at Verra?",
  greeting: "hey Kashyap, I'm Zain.",
  paragraphs: [
    "I saw that Verra just announced its seed, and that it writes first drafts for consulting firms out of their own past work, with every claim cited back to where it came from. I spent three years building a contractor's system around the same rule: every cost has the supplier's quote attached, and every change has to say why it was made. so I figured I'd reach out.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "so, that company was Kasperia, which is an appliance contracting company based out of Vancouver. some days I was working on internal tooling, and others I was just the guy carrying appliances up the stairs. I kind of just did it all. the main thing I built was a procurement system that takes a project from the bid and the supplier quotes, through pricing and every change order, all the way to deliveries and invoices. every cost in it is a supplier's quote with the file attached, and there's an agent that checks what was typed in against that file. it can also draft the changes and the emails, but a person approves them before anything goes out. so every number in it traces back to where it came from.",
    "and then this past summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "I also moved the team onto some internal tooling that I'd like to think sped everyone up. although maybe I'm just giving myself a bit too much credit. but hey, nobody's switched back yet.",
    "anyways, I'd really like to work on Verra this winter. so if you have room for an intern, I'd really appreciate a quick chat. you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
