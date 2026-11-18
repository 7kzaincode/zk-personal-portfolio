import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Elizabeth",
  subject: "Could I please please (please) come work with you at Tesla?",
  greeting: "hey Elizabeth, I'm Zain.",
  video: "/video/elizabeth.mp4",
  cutout: true,
  poster: "/video/elizabeth.jpg",
  crop: [0.0809, 0.0, 0.8667, 1.0],
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 2.4, 13.5, 24.0, 36.1, 46.3, 71.5, 83.9, 98.8, 99.2],
  paragraphs: [
    "I saw a couple of Tesla interns thank you in their posts for getting them in, and I just so happen to be hoping to write one of those posts for myself this winter. so I figured I'd go straight to you.",
    "anyways, if you're seeing this, that means that you've seen my email. and like I said there, I'm a computer engineering student at [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me is that this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. and that's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "I also moved the team onto some internal tooling that I'd like to think sped everyone up. although maybe I'm giving myself a little bit too much credit here. but hey, I haven't seen anyone switch back yet, so.",
    "and before that, I spent almost three years as the sole engineer at Kasperia, which is an appliance contracting company. some days I was working on internal tooling, and other days I was the guy carrying appliances up the stairs. I kinda just did it all. on top of that, I built them a system that takes a project from bid to supplier quotes, all the way to pricing and orders, and its whole gist is basically just automating the manual, boring, error-prone work in between.",
    "the closest I've actually gotten to actual car software so far is writing ROS 2 nodes for perception, planning, and control on the autonomous car at [WATonomous](https://www.watonomous.ca/), which is Waterloo's self-driving team.",
    "anyways, I've already applied to a couple of the winter internships: the fullstack one on Fleetnet, and the software developer one on Integration Tools. so if either of them, or anything in software, still has a spot, I'd love to be considered. and you can also book a time with me right below this, if you're interested.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
