import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Aaron and Alberto",
  subject: "Could I please please (please) come work with you at MARC?",
  greeting: "hey Aaron and Alberto, I'm Zain.",
  paragraphs: [
    "I saw that MARC reads a building's vendor contracts and checks every invoice against them before it gets paid, like the HVAC bill on your site that came in a thousand dollars over the signed rate. checking what got typed in against what the supplier's quote actually says is what I spent three years building for an appliance contractor. so I figured I'd reach out.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "so, that company was Kasperia, which is an appliance contracting company based out of Vancouver. some days I was working on internal tooling, and others I was just the guy carrying appliances up the stairs. I kind of just did it all. the main thing I built was a procurement system that takes a project from the bid and the supplier quotes, through pricing and every change order, all the way to deliveries and invoices. every cost in it is a supplier's quote with the file attached, and there's an agent that checks what was typed in against that file. it can also draft the changes and the emails, but a person approves them before anything goes out. and the invoices are tied to the deliveries they're for, so you can always see what a charge is actually for.",
    "and then this past summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "I also moved the team onto some internal tooling that I'd like to think sped everyone up. although maybe I'm just giving myself a bit too much credit. but hey, nobody's switched back yet.",
    "anyways, I'd really like to work on MARC this winter. so if you have room for an intern, I'd really appreciate a quick chat. you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
