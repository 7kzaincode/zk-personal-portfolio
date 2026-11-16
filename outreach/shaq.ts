import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Shaq",
  subject: "Could I please please (please) come work with you at Tesla?",
  greeting: "hey Shaq, I'm Zain.",
  video: "/video/shaq.mp4",
  cutout: true,
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 2.5, 9.9, 20.0, 32.1, 43.0, 69.3, 75.6, 76.0],
  paragraphs: [
    "I saw your posts about Tesla's software and AI internships, and I just so happen to be looking for one, so I figured I'd reach out directly.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me: this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "while I was there, I also got the team onto some internal tooling that I'd like to think sped everyone up. although maybe I'm just giving myself a bit too much credit. but hey, no one's gone back to the old way just yet.",
    "before Leap Tools, I spent almost three years at Kasperia, which is an appliance contracting firm based out of Vancouver, where I was the only engineer. so some days I was building internal tools, and other days I was just the guy carrying appliances up the stairs. I kind of did it all. the main thing that I did build was a system that takes a project from the bid to supplier quotes, all the way to pricing and orders, basically just automating all the manual, boring, error-prone work in between.",
    "anyways, if any software teams are still taking interns for the winter, I'd love to be considered, and you can book a time with me right below this.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
