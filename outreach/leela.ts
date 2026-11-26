import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "the Leela team",
  subject: "Could I please please (please) come work with you at Leela?",
  greeting: "hey, I'm Zain.",
  video: "/video/leela.mp4",
  cutout: true,
  poster: "/video/leela.jpg",
  crop: [0.0823, 0.0152, 0.8535, 0.9848],
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 1.2, 25.6, 33.0, 71.1, 97.8, 110.8, 121.6, 121.9],
  paragraphs: [
    "so I was looking into Leela, and from what I can tell, you guys basically take a company's policies and turn them into the actual things they have to do, and then go and do most of them. so I saw the one where 40 policies turned into like 260 obligations. and the thing that stood out to me the most was that the evidence gets attached to every single decision. which I thought was really interesting, because I spent about three years building a system around the same idea for an appliance contractor. so I figured I'd reach out.",
    "anyways, if you're seeing this, that means that you've seen my email. and like I said there, I'm a computer engineering student at [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me: that contractor was Kasperia, which is an appliance contractor based out of Vancouver. and honestly, I kind of just did it all there. some days I was working on internal tooling and software, and others I was literally carrying appliances up stairs. but the main thing I built for them was their procurement system, which basically takes a project from the bid and the supplier quotes, all the way to the change orders and invoices. and the part that's closest to what you do is the checking. so every cost in it is a supplier's quote with the actual file attached, and there's an agent that goes and reads that file, and then checks it against what somebody typed in, line by line. so that would be like the price, the freight, tariffs, all of it. and a person only really has to look at what it flags.",
    "and then this past summer I was at [Leap Tools](https://www.leaptools.com/). their main product is Roomvo, which is the thing that you use when you're on a flooring store's website, and then you upload a photo of your own room and it goes and visualizes it with the new floor. and I was on a small team there, where we worked on bespoke products. so I got to directly work with and talk to clients, which is pretty cool. and I also got the opportunity to lead my own project, which was their surface designer. and it basically lets shoppers design and visualize their own tile patterns right in the browser, instead of the legacy approach, where everything had to go through a server.",
    "and honestly, when I first got there, my team's setup was slightly ancient. so I worked on my own harness, and I eventually got the whole team onto it. and I'd like to think that it's better than not. although maybe that's a bit too much credit on my part. but hey, I don't think anyone's switched back yet.",
    "so anyways, I think working at Leela would be really cool. and it's only four months, but I think I could get a lot done in that time. so if you're open to it, I'd really appreciate a quick chat, and you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
