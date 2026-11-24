import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Emma",
  subject: "Could I please please (please) come work with you at Tesla?",
  greeting: "hey Emma, I'm Zain.",
  video: "/video/emma.mp4",
  cutout: true,
  poster: "/video/emma.jpg",
  crop: [0.0709, 0.0, 0.8667, 1.0],
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 2.1, 11.2, 21.2, 32.6, 41.5, 69.3, 81.5, 101.6, 102.0],
  paragraphs: [
    "I saw your post telling people not to get caught dead without an internship this winter. and, well, I'd rather not be haunted by my choices forever. so here I am.",
    "anyways, if you're seeing this, that means that you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me is that this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. and that's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "I also moved the team onto some internal tooling that I'd like to think sped everyone up. although maybe I'm giving myself just a bit too much credit. but hey, I don't think anyone's switched back just yet.",
    "so before that, I also spent roughly three years as the sole engineer at Kasperia, which is an appliance contracting company based out of Vancouver. some days I was just working on internal tooling, and others I was the guy carrying appliances up the stairs, and I kind of just did it all. on top of that, I built them a system that takes a project from bid to supplier quotes, all the way to pricing and orders, and its whole gist is basically just automating the manual, boring, error-prone work in between.",
    "and the closest I've actually gotten to writing vehicle software so far is ROS 2 nodes for perception, planning, and control on the autonomous car at [WATonomous](https://www.watonomous.ca/), which is Waterloo's self-driving team.",
    "anyways, I've already applied to a couple of the winter internships: the fullstack one on Fleetnet, and the software developer one on Integration Tools. so if either of those, or anything in software, still has a spot, I'd love to be considered. and if those aren't really yours, I'd really appreciate it if you could pass this along to whoever handles them. and if interested, you can book a time with me right below this.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
