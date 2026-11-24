import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "the Shackleton team",
  subject: "Could I please please (please) come work with you at Shackleton?",
  greeting: "hey, I'm Zain.",
  video: "/video/shackleton.mp4",
  cutout: true,
  poster: "/video/shackleton.jpg",
  crop: [0.099, 0.0398, 0.8322, 0.9602],
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 1.7, 18.4, 26.7, 68.3, 80.3, 91.7, 100.1, 100.6],
  paragraphs: [
    "so I was looking into Shackleton, and I saw that you guys started inside an actual construction company, and that you now run the paperwork behind more than a billion dollars of projects. and interestingly enough, I spent about three years building something like that for an appliance contractor, just on a much smaller scale. so I figured I'd reach out.",
    "anyways, if you're seeing this, that means that you've seen my email. and like I said there, I'm a computer engineering student at [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me: that contractor was Kasperia, which is an appliance contracting company based out of Vancouver. and I kind of just did it all there. some days I was working on internal tooling, and others I was literally the guy carrying appliances up the stairs. but the main thing I built was their procurement system, which basically takes a project from the bid and the supplier quotes, all the way to change orders and invoices. and every change order has to come with a reason. funny enough, the first version actually worked off of the building's drawings. so you'd load in the plans and draw each room right on top of them. and where it's at right now, every cost in it is a supplier's quote with the actual file attached, and there's an agent that goes and checks what somebody typed in against that file.",
    "and then this past summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries now.",
    "I also moved the team onto some internal tooling that I'd like to think sped everyone up. maybe I'm just giving myself a bit too much credit here, but I don't think anyone's switched back just yet. so that's a win.",
    "anyways, I'd really like to work at Shackleton this winter. so if you have room for an intern, I'd really appreciate a quick chat, and you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
