import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Hanyang and Junzhe",
  subject: "Could I please please (please) come work with you at Quotr?",
  greeting: "hey Hanyang and Junzhe, I'm Zain.",
  paragraphs: [
    "I saw that Quotr takes a contractor's plans and turns them into a priced estimate, and then handles the supplier quotes and the bid comparison too. and that second part is almost exactly what I spent three years building for an appliance contractor. so I figured I'd reach out.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "so, that company was Kasperia, which is an appliance contracting company based out of Vancouver. some days I was working on internal tooling, and others I was just the guy carrying appliances up the stairs. I kind of just did it all. the main thing I built was a system that takes a project from bid to supplier quotes, all the way to pricing and orders. it has agents that draft the supplier follow-ups and the payment emails, and every number in it traces back to where it came from.",
    "and then this past summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries. the big change was moving the rendering off a server and into the browser, so when you edit a pattern it just updates live. which, from what I can tell, isn't too far from marking up a plan.",
    "I also moved the team onto some internal tooling that I'd like to think sped everyone up. although maybe I'm just giving myself a bit too much credit. but hey, nobody's switched back yet.",
    "anyways, I'd really like to work on Quotr this winter. so if you have room for an intern, I'd really appreciate a quick chat. you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
