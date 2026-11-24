import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "the Modern Industrials team",
  subject: "Could I please please (please) come work with you at Modern Industrials?",
  greeting: "hey, I'm Zain.",
  video: "/video/modern-industrials.mp4",
  cutout: true,
  poster: "/video/modern-industrials.jpg",
  crop: [0.1149, 0.0521, 0.8215, 0.9479],
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 1.3, 17.9, 26.5, 49.0, 68.5, 78.7, 88.5, 99.0, 99.5],
  paragraphs: [
    "so I was looking into Modern Industrials, and I saw that you guys build agents for manufacturers and distributors. and so the quoting, the order entry, the vendor management. and interestingly enough, I spent about three years building pretty much that for one company, an appliance contractor. so I figured I'd reach out.",
    "anyways, if you're seeing this, that means that you've seen my email. and like I said there, I'm a computer engineering student at [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me: that contractor was Kasperia, which is an appliance contracting company based out of Vancouver. and I kind of just did it all there. some days I was working on internal tooling, and others I was literally the guy carrying appliances up the stairs. the main thing I built for them was their procurement system, which basically takes a project from the bid and the supplier quotes, all the way to change orders and invoices.",
    "and the part I think you guys probably care about the most is the agent side. so every cost in it is a supplier's quote with the actual file attached. and there's an agent that goes in and checks what somebody typed in against that file. and then there's another one built into every project, which can do basically anything a person can do in that app. but it has to ask before it changes anything.",
    "and this past summer, I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. and it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries now.",
    "I also moved the team onto some internal tooling that I'd like to think sped everyone up. although maybe I'm giving myself a bit too much credit here, but I don't think anyone's switched back yet.",
    "so anyways, I'd really like to work at Modern Industrials this winter. so if you have room for an intern, I'd really appreciate a quick chat, and you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
