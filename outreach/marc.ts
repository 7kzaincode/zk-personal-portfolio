import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "the MARC team",
  subject: "Could I please please (please) come work with you at MARC?",
  greeting: "hey, I'm Zain.",
  video: "/video/marc.mp4",
  cutout: true,
  poster: "/video/marc.jpg",
  crop: [0.0999, 0.0521, 0.8215, 0.9479],
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 1.3, 21.7, 30.2, 74.8, 85.5, 94.5, 107.8, 108.1],
  paragraphs: [
    "so I was looking at MARC a little bit, and from what I can tell, you guys basically read through all of a building's vendor contracts, and check the invoices that actually come in against what was actually signed. and you only end up really bugging someone if something's off. which I thought was pretty cool, because interestingly enough, I spent about three years building something pretty similar for an appliance contractor. so I figured I'd reach out.",
    "anyways, if you're seeing this, that means that you've seen my email. and like I said there, I'm a computer engineering student at [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me: that contractor was Kasperia, which is an appliance contracting company based out of Vancouver. and I kind of just did it all there. some days I was working on internal tooling, and others I was literally carrying appliances up stairs. but the main thing that I built for them was their procurement system, which basically takes a project from the bid and the supplier quotes, all the way to change orders and invoices. and the part that's probably closest to what you guys do is the checking. so every cost in it is a supplier's quote with the actual file attached, and there's an agent that goes through and reads that file, and checks it against what somebody typed in, line by line. so that's the price, the freight, the tariffs, all of it. and a person only has to go and check what was actually flagged.",
    "and then this past summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. and that's basically the thing that lets shoppers design their own tile patterns, and it's actually live in over 80 countries now.",
    "I also moved the team onto some internal tooling that I'd like to think sped everyone up. I don't think anyone's switched back yet.",
    "so anyways, I think working at MARC could be really cool. and it's only four months, but I think I can get a lot done in that time. so if you're open to it, I'd really appreciate a quick chat, and you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
