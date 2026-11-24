import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "the Quotr team",
  subject: "Could I please please (please) come work with you at Quotr?",
  greeting: "hey, I'm Zain.",
  paragraphs: [
    "so I was looking into Quotr, and I saw that you take a contractor's plans and turn them into a priced estimate, and then you also handle the supplier quotes and the bid comparison. and interestingly enough, I spent about three years building something pretty similar for an appliance contractor. so I figured I'd reach out.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me: that contractor was Kasperia, which is an appliance contracting company based out of Vancouver. and I kind of just did it all there. some days I was working on internal tooling, and others I was literally the guy carrying appliances up the stairs. but the main thing I built was their procurement system, which basically takes a project from the bid and the supplier quotes, all the way to change orders and invoices. and funny enough, the first version actually worked off the building's drawings. so you'd load in the plans and draw each room right on top of them. and where it's at now, every cost in it is a supplier's quote with the actual file attached, and there's an agent that goes and checks what somebody typed in against that file.",
    "and then this past summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "I also moved the team onto some internal tooling that I'd like to think sped everyone up. although maybe I'm just giving myself a bit too much credit. but hey, nobody's switched back yet.",
    "anyways, I'd really like to work on Quotr this winter. so if you have room for an intern, I'd really appreciate a quick chat. you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
