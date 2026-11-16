import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Cassie",
  subject: "Could I please please (please) come work with you at Tesla?",
  greeting: "hey Cassie, I'm Zain.",
  video: "/video/cassie.mp4",
  cutout: true,
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 2.4, 12.2, 21.8, 36.5, 47.3, 74.4, 84.6, 92.4, 92.8],
  paragraphs: [
    "I saw you recruit interns for Tesla AI, on the Optimus side, and I just so happen to be a student who has wanted to work on robots for quite a long time, so I figured you're the person to talk to.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "so, a bit about what I've done: this past summer I worked at [Leap Tools](https://www.leaptools.com/), and I ended up leading the rebuild of their surface designer, from the first plan all the way to production. it's basically what lets shoppers design their own tile patterns, and it's live in over 80 countries now.",
    "I also set up some internal tooling for the team, which I'd like to think made everyone faster. although maybe that's just me giving myself a bit too much credit. but I don't think anyone's switched back just yet, so I'll take that.",
    "and before that, I spent almost three years as the sole engineer at Kasperia, which is an appliance contracting firm based out of Vancouver. some days I was working on internal tooling and software, and other days I was just the guy carrying appliances up the stairs. I kind of just did it all. on top of that, I built them a system that takes a project from bid to supplier quotes, all the way to pricing and orders, and its whole gist is basically just automating the manual, boring, error-prone work in between.",
    "and the closest I've gotten to an actual robot so far is I've written ROS 2 nodes for perception, planning, and control on the autonomous car at [WATonomous](https://www.watonomous.ca/), which is Waterloo's self-driving team.",
    "anyways, if any Tesla AI or Optimus software teams still have intern spots for january, I'd love to be considered, and you can book a time with me right below this.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
