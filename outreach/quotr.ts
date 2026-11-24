import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "the Quotr team",
  subject: "Could I please please (please) come work with you at Quotr?",
  greeting: "hey, I'm Zain.",
  video: "/video/quotr.mp4",
  cutout: true,
  poster: "/video/quotr.jpg",
  crop: [0.0744, 0.0, 0.8667, 1.0],
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 1.4, 15.7, 23.9, 62.5, 73.0, 82.5, 91.4, 91.7],
  paragraphs: [
    "so I was looking at Quotr, and I saw that you guys take contractors' plans and turn them into a priced estimate, and also handle the supplier quotes and bid comparisons. and interestingly enough, I spent about three years building something pretty similar for an appliance contractor. so I figured I'd reach out.",
    "anyways, if you're seeing this, that means that you've seen my email. and like I said there, I'm a computer engineering student at [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me: that contractor was Kasperia, which is an appliance contracting company based out of Vancouver. and I kind of just did it all there. some days I was working on internal tooling, and others I was literally the guy carrying appliances up the stairs. but the main thing I built was their procurement system, which basically takes a project from the bid and the supplier quotes, all the way to change orders and invoices. and funny enough, the first version actually worked off the building's drawings. so you'd load in the plans and draw each room right on top of them. and where it's at right now, every cost in it is a supplier's quote with the actual file attached, and there's an agent that goes and checks what somebody typed in against that file.",
    "and then this past summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries now.",
    "I also moved the team onto some internal tooling that I'd like to think sped everyone up. although maybe I'm giving myself a little bit too much credit. but hey, I don't think anyone's switched back yet.",
    "so anyways, I'd really like to work at Quotr this winter. so if you have room for an intern, I'd really appreciate a quick chat, and you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
