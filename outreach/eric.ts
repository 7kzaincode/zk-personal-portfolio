import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Eric",
  subject: "Could I please please (please) come work with you at Tesla?",
  greeting: "hey Eric, I'm Zain.",
  video: "/video/eric.mp4",
  cutout: true,
  poster: "/video/eric.jpg",
  crop: [0.0607, 0.0, 0.8667, 1.0],
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 2.6, 13.4, 23.3, 35.5, 45.3, 72.5, 83.6, 104.8, 105.2],
  paragraphs: [
    "I saw that we just connected on LinkedIn, and that you've got some resume tips for college students pinned on your profile. so, as a college student, I figured I'd go one step further and just send you a video.",
    "anyways, if you're seeing this, that means that you've seen my email. and like I said there, I'm a computer engineering student at [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me is this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. that's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "I also moved the team onto some internal tooling that I'd like to think sped everyone up. although maybe I'm just giving myself a bit too much credit. but I don't think anyone's switched back yet.",
    "and before that, I spent almost three years as the sole engineer at Kasperia, which is an appliance contracting company. some days I was working on internal tooling, and others I was carrying appliances up the stairs. I kind of just did it all. and on top of that, I built them a system that takes a project from bid to supplier quotes, all the way to pricing and orders, and its whole gist is basically automating the boring, manual, error-prone work in between.",
    "and the closest I've actually gotten to a vehicle so far is writing ROS 2 nodes for perception, planning, and control on the autonomous car at [WATonomous](https://www.watonomous.ca/), which is Waterloo's self-driving team.",
    "anyways, I've already applied to a couple of the winter internships: the fullstack one on Fleetnet, and the software developer one on Integration Tools. so if either of those, or anything in software, still has a spot, I'd love to be considered. and if that isn't really your space, I'd really appreciate it if you could pass this along to whoever handles them. and if interested, you could also book a time with me right below this.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
