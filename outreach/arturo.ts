import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Arturo",
  subject: "Could I please please (please) come work with you at Tesla?",
  greeting: "hey Arturo, I'm Zain.",
  video: "/video/arturo.mp4",
  cutout: true,
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 2.6, 13.8, 24.2, 35.3, 47.0, 72.3, 87.5, 88.1],
  paragraphs: [
    "so I saw that you lead the teams behind Tesla's customer-facing apps and websites, and I actually spent my summer building a customer-facing web app, obviously on a way smaller scale, so I figured I'd reach out and say hi.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me: this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "while I was there, I also got the team onto some internal tooling. I'd like to think that it sped everyone up, although I might just be giving myself a bit too much credit. but hey, nobody's gone back to the old way just yet.",
    "and before that, I was the only engineer at Kasperia for almost three years, and they're an appliance contracting firm in Vancouver. so some days I was working on internal tooling, and other days I was literally just carrying appliances up the stairs. I kind of just did it all. but the big thing was the system I built that takes a project from bid to supplier quotes, all the way to pricing and orders, and its whole gist is basically just automating the manual, boring, error-prone work in between.",
    "anyways, that's pretty much the kind of work I'd love to do. I'm not sure if your team takes interns, but if they do, I'd love to be considered. and if not, I'd really appreciate it if you could point me to someone who does. either way, you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
