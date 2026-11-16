import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Melanie",
  subject: "Could I please please (please) come work with you at Tesla?",
  greeting: "hey Melanie, I'm Zain.",
  video: "/video/melanie.mp4",
  cutout: true,
  poster: "/video/melanie.jpg",
  crop: [0.1175, 0.0516, 0.7895, 0.911],
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 1.8, 10.4, 20.7, 32.7, 44.1, 70.2, 80.9, 81.3],
  paragraphs: [
    "I saw that you recruit software engineers at Tesla, and I just so happen to be one in the making, looking for an internship this winter. so I figured I'd reach out directly.",
    "anyways, if you're seeing this, that means you've seen my email. like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me: this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "I also set up some internal tooling for the team, which I'd like to think made everyone work a little faster. although maybe that's giving myself a bit too much credit. but I don't think anyone's switched back so far, so I'll take that.",
    "before Leap Tools, I spent almost three years at Kasperia, which is an appliance contracting firm based out of Vancouver, and I was the sole engineer there. so some days I was building internal tools and software, and other days I was the guy carrying appliances up the stairs. I kind of did it all. the main thing I built was a system that takes a project from the bid to supplier quotes, all the way to pricing and orders. basically, it automated all the manual, boring, error-prone work in between.",
    "anyways, if software teams are still taking interns for the winter, I'd love to be considered. and if interns aren't your area, I'd really appreciate being pointed to whoever handles them. and you can book a time with me right below this.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
