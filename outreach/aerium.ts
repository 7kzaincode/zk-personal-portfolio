import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "the Aerium team",
  subject: "Could I please please (please) come work with you at Aerium?",
  greeting: "hey, I'm Zain.",
  video: "/video/aerium.mp4",
  cutout: true,
  poster: "/video/aerium.jpg",
  crop: [0.0738, 0.0, 0.8667, 1.0],
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 1.7, 17.5, 25.9, 65.9, 77.3, 86.5, 95.0, 95.5],
  paragraphs: [
    "so I was looking into Aerium, and I saw that you build quotes for manufacturers straight from their drawings and their past jobs, and that you guys are a pretty small team based out of Toronto. and interestingly enough, I spent roughly three years building the system an appliance contractor quotes their jobs with. so I figured I'd reach out.",
    "anyways, if you're seeing this, that means that you've seen my email. and like I said there, I'm a computer engineering student at [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me: that contractor I was talking about earlier was Kasperia, which is an appliance contracting company based out of Vancouver. and I kind of just did it all there. some days I was working on internal tooling, and others I was literally the guy carrying appliances up the stairs. but the main thing I built was their procurement system, which basically takes a project from the bid and the supplier quotes, all the way to the change orders and invoices. and funny enough, the first version actually worked off of the building's drawings. so you'd load in the plan and draw each room right on top of them. and where it's sitting at right now, every cost in it is a supplier's quote with the actual file attached. and there's an agent that goes and checks what somebody typed in against that file.",
    "and then this past summer, I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. and it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "I also moved the team onto some internal tooling that I'd like to think sped everyone up. although maybe I'm giving myself a bit too much credit here, but hey, I don't think anyone's switched back yet.",
    "so anyways, I'd really like to work on Aerium this winter. so if you have room for an intern, I'd really appreciate a quick chat, and you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
