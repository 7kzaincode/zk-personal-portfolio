import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "the Unitbase team",
  subject: "Could I please please (please) come work with you at Unitbase?",
  greeting: "hey, I'm Zain.",
  video: "/video/unitbase.mp4",
  cutout: true,
  poster: "/video/unitbase.jpg",
  crop: [0.0754, 0.0152, 0.8535, 0.9848],
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 1.5, 23.1, 31.4, 66.1, 78.7, 90.0, 98.8, 99.3],
  paragraphs: [
    "so I was looking into Unitbase, and I watched the demo on your guys' site, where a manager asks to compare flooring prices across every property, and then the agent goes through a thousand lines and figures out who's overpaying. and interestingly enough, going through supplier prices line by line is pretty much what I spent three years building software for. and your seed post said you're hiring engineers, and to reach out, so here I am.",
    "anyways, if you're seeing this, that means that you've seen my email. and like I said there, I'm a computer engineering student at [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me: that software was for Kasperia, which is an appliance contracting company based out of Vancouver. and I kind of just did it all there. some days I was working on internal tooling, and others I was literally the guy carrying appliances upstairs. but the main thing I built was their procurement system, which basically takes a project from the bid and the supplier quotes, all the way to change orders and invoices. and it goes down to the unit. so every single appliance in a building is its own line, and every cost is a supplier's quote with the actual file attached. and there's an agent that goes and checks what somebody typed in against that file, so you can actually trust that number.",
    "and then this past summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries now.",
    "I also moved the team onto some internal tooling that I'd like to think sped everyone up. although maybe I'm giving myself a bit too much credit here, but hey, I don't think anyone's switched back yet. so it's a win.",
    "anyways, I'd really like to work at Unitbase this winter. so if you have room for an intern, I'd really appreciate a quick chat, and you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
