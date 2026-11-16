import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Msgana",
  subject: "Could I please please (please) come work with you at Tesla?",
  greeting: "hey Msgana, I'm Zain.",
  video: "/video/msgana.mp4",
  cutout: true,
  // the second each line starts in the recording, taken from its transcript
  cues: [0.4, 3.1, 14.1, 23.8, 41.5, 52.0, 75.1, 83.2, 83.6],
  paragraphs: [
    "I saw your post about the winter 2027 fullstack internship on Applications Engineering. I just so happen to be a fullstack developer looking for a winter internship, so I figured I'd reach out to the person who posted it.",
    "anyways, if you're seeing this, that means you've seen my email. like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me: this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries. on top of that, I worked on the backend for six of their other apps, so services, databases, APIs.",
    "I also set up some internal tooling for the team, which I'd like to think made everyone work a bit faster. maybe that's just me giving myself a bit too much credit, but hey, nobody's switched back yet, so I'll take it.",
    "before Leap Tools, I spent almost three years at Kasperia, which is an appliance contracting company based out of Vancouver, where I was the sole engineer. so some days I was building internal tooling, and other days I was just the guy carrying appliances up the stairs, and kind of just did it all. the main thing I built was a system that takes a project from the bid to supplier quotes, all the way to pricing and orders, basically just automating all the manual, boring, error-prone work in between.",
    "anyways, if that fullstack role, or any other software team, still has intern spots for january, I'd love to be considered, and you can book a time with me right below this.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
