import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "the Tenix team",
  subject: "Could I please please (please) come work with you at Tenix?",
  greeting: "hey, I'm Zain.",
  video: "/video/tenix.mp4",
  cutout: true,
  poster: "/video/tenix.jpg",
  crop: [0.0596, 0.0028, 0.8642, 0.9972],
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 1.3, 20.0, 28.0, 65.2, 93.6, 108.2, 118.6, 118.9],
  paragraphs: [
    "so I was looking into Tenix, and from what I can tell, you guys handle the finance side for specialty care. and the thing that stood out to me on your site was that every figure traces back to the claim, or the contract, that it came from. which I thought was really interesting, because I spent about three years building a system around that same idea for an appliance contractor. so I figured I'd reach out.",
    "anyways, if you're seeing this, that means that you've seen my email. and like I said there, I'm a computer engineering student at [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me is that that contractor was Kasperia, which is an appliance contractor based out of Vancouver. and honestly, I kind of just did it all there. some days I was working on internal tooling and software, and others I was literally carrying appliances up stairs. but the main thing I built for them was their procurement system, which basically takes a project from the bid and the supplier quotes, all the way to the change orders and invoices. and the part that's closest to what you do is the checking. so every cost in it is a supplier's quote with the actual file attached, and there's an agent that goes through and reads that file, and checks it against what somebody typed in, line by line. so the price, freight, tariffs, all of it. and a person only has to look at what it flags.",
    "and then this past summer I was at [Leap Tools](https://www.leaptools.com/). their main product is Roomvo, which is basically the thing that, when you're on a flooring store's website, you upload a photo of your own room and it visualizes the new floor in it. I was on a small team there, where we worked on bespoke products. so I got to directly work with and talk to clients, which is pretty cool. I also got the opportunity to lead my own project, which was their surface designer. and that basically lets shoppers design and visualize their own tile patterns right in the browser, instead of the legacy approach, where everything had to go through a server.",
    "and honestly, when I first got there, my team's setup was slightly ancient. so I worked on my own harness, which I eventually got the whole team onto. and I'd like to think that it's better than not. although maybe I'm giving myself a bit too much credit here. but I don't think anyone's switched back yet.",
    "so anyways, I think working at Tenix would be really cool. and it's only four months, but I think I could get a lot of work done in that time. so if you're open to it, I'd really appreciate a quick chat, and you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
