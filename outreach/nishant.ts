import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Nishant",
  subject: "Could I please please (please) come work with you at Tesla?",
  greeting: "hey Nishant, I'm Zain.",
  video: "/video/nishant.mp4",
  cutout: true,
  poster: "/video/nishant.jpg",
  crop: [0.1574, 0.102, 0.6935, 0.8002],
  // the second each line starts in the recording, taken from its transcript
  cues: [0.5, 2.7, 16.7, 26.5, 48.6, 58.8, 83.3, 98.8, 99.4],
  paragraphs: [
    "so I saw a post about your team building the billing services for Robotaxi and Supercharging. I actually spent most of my summer working on the backend for e-commerce apps, obviously on a way smaller scale, so I figured I'd reach out and say hi.",
    "anyways, if you're seeing this, that means you've seen my email. like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "so, a bit about what I've done: this past summer I worked at [Leap Tools](https://www.leaptools.com/), and I ended up leading the rebuild of their surface designer, from the first plan all the way to production. it's basically what lets shoppers design their own tile patterns, and it's live in over 80 countries now. on top of that, I worked on the backend for six of their other apps, so services, databases, and APIs.",
    "I also set up some internal tooling for the team, which I'd like to think made everyone a bit faster. although maybe that's just me giving myself a bit too much credit. although I don't think anyone's switched back just yet, so I'll take it.",
    "and before that, I spent three years as the only engineer at Kasperia, which is an appliance contracting firm in Vancouver. some days I was just working on internal tooling, and others I was the guy carrying appliances up the stairs. I kind of just did it all. on top of that, I built them a system that takes a project from bid to supplier quotes, all the way to pricing and orders, and its whole gist is basically just automating the manual, boring, error-prone work in between.",
    "anyways, that's pretty much the kind of work I'd love to do. and I'm not sure if your team takes interns, but if it does, I'd love to be considered. and if not, I'd really appreciate it if you could point me to someone who does. either way, you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
