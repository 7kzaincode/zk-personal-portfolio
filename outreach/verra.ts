import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "the Verra team",
  subject: "Could I please please (please) come work with you at Verra?",
  greeting: "hey, I'm Zain.",
  video: "/video/verra.mp4",
  cutout: true,
  poster: "/video/verra.jpg",
  crop: [0.0633, 0.0, 0.8667, 1.0],
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 1.1, 20.3, 27.0, 64.1, 91.1, 106.5, 116.9, 117.2],
  paragraphs: [
    "so I was looking into Verra, and from what I can tell, you guys basically write the first draft for consulting firms, out of all the work that they've already done. and the part that stood out to me is that every claim in it gets cited back to where it actually came from. which I thought was really interesting, because I spent roughly three years building a system around that same idea for an appliance contractor. so I figured I'd reach out.",
    "anyways, if you're seeing this, that means that you've seen my email. and like I said there, I'm a computer engineering student at [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me: that contractor was Kasperia, which is an appliance contracting company based out of Vancouver. and I kind of just did it all there. some days I was working on internal tooling, and others I was literally carrying appliances up stairs. but the main thing I built for them was their procurement system, which basically takes a project from the bid and the supplier quotes, all the way to the change orders and invoices. and that's the part that's closest to what you guys do, which is the checking. so every cost in it is a supplier's quote with the actual file attached, and there's an agent that goes and reads that file, and checks it against what somebody typed in, line by line. so the price, the freight, the tariff, all of it. and a person only has to really look at what gets flagged.",
    "and then this past summer I was at [Leap Tools](https://www.leaptools.com/). their main product is Roomvo, which is the thing that you use when you're on a flooring store's website, and you upload a photo of your own room and it visualizes the new floor in it. I was on a small team there, where we worked on bespoke products. so I got to directly work with and talk to clients, which is pretty cool. and I also got the opportunity to lead my own project, which was their surface designer. it basically lets shoppers design their own tile patterns right in the browser, instead of the legacy approach, where everything had to go through a server.",
    "and I also got my whole team onto my own harness. their setup was slightly ancient, so when I showed up, I shared mine, and everyone ended up on it. and I'd like to think that it's better than not. although maybe I'm giving myself a bit too much credit here. but I don't think anyone's switched back yet. so it's a win.",
    "anyways, I think working at Verra would be really cool. and it's only four months, but I think I could get a lot done in that time. so if you're open to it, I'd really appreciate a quick chat, and you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
