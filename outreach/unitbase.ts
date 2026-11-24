import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Arthur and Aditya",
  subject: "Could I please please (please) come work with you at Unitbase?",
  greeting: "hey Arthur and Aditya, I'm Zain.",
  paragraphs: [
    "I watched the demo on your site where a manager asks to compare flooring prices across every property, and the agent goes through over a thousand line items to find out who's overpaying. going through supplier quotes line by line is what I spent three years building software for at an appliance contractor. and your seed post said you're hiring engineers and to reach out, so here I am.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "so, that company was Kasperia, which is an appliance contracting company based out of Vancouver. some days I was working on internal tooling, and others I was just the guy carrying appliances up the stairs. I kind of just did it all. the main thing I built was a system that takes a project from the bid and the supplier quotes, through pricing and every change order, all the way to deliveries and invoices. every cost in it is a supplier's quote with the file attached, and there's an agent that checks what was typed in against that file. it can also draft the changes and the emails, but a person approves them before anything goes out. and every single appliance is its own line in it, so you can see exactly what changed and what it cost.",
    "and then this past summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "I also moved the team onto some internal tooling that I'd like to think sped everyone up. although maybe I'm just giving myself a bit too much credit. but hey, nobody's switched back yet.",
    "anyways, I'd really like to work on Unitbase this winter. so if you have room for an intern, I'd really appreciate a quick chat. you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
