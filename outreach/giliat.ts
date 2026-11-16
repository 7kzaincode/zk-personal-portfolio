import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Giliat",
  subject: "Could I please please (please) come work with you at Tesla?",
  greeting: "hey Giliat, I'm Zain.",
  video: "/video/giliat.mp4",
  cutout: true,
  poster: "/video/giliat.jpg",
  crop: [0.0737, 0.0, 0.8667, 1.0],
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 1.7, 10.6, 18.8, 29.9, 38.3, 61.0, 68.9, 71.5, 72.0],
  paragraphs: [
    "word on the street is that you're hiring interns for winter 2027, and I just so happen to be looking for an internship, so I figured I'd just skip past the street and go directly to the source.",
    "anyways, if you're seeing this, that means you've seen my email. like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm interested in vehicle software.",
    "a little bit about me: this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "I also moved the team onto some internal tooling that I'd like to think sped everyone up. although maybe I'm just giving myself a bit too much credit. but hey, nobody's switched back yet.",
    "and before that, I spent almost three years as the only engineer at Kasperia, which is an appliance contracting company. some days I was just working on internal tooling, and others I was just the guy carrying appliances up the stairs. I kind of just did it all. on top of that, I built them a system that takes a project from bid to supplier quotes, all the way to pricing and orders, and its whole gist is basically just automating the manual, boring, error-prone work in between.",
    "the closest I've actually gotten to vehicles so far is that I wrote ROS 2 nodes across perception, planning, and control for the autonomous car at [WATonomous](https://www.watonomous.ca/).",
    "anyways, if you're interested, please book a time with me below!",
  ],
  signoff: ["Thanks!", "Zain"],
};

export default letter;
