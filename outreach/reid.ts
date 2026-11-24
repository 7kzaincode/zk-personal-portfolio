import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Reid",
  subject: "Could I please please (please) come work with you at Tesla?",
  greeting: "hey Reid, I'm Zain.",
  video: "/video/reid.mp4",
  cutout: true,
  poster: "/video/reid.jpg",
  crop: [0.0707, 0.0, 0.8667, 1.0],
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 2.0, 19.5, 29.0, 41.3, 50.4, 76.9, 88.7, 112.1, 112.5],
  paragraphs: [
    "and your profile says to reach out if I want to talk about sports, employment opportunities, or whatever. now, I haven't really watched any football games, although interestingly enough, I have looked into John Urschel's proofs, and he did play for your Ravens. but I'm mostly here for the employment part.",
    "anyways, if you're seeing this, that means that you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me is that this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "I also moved the team onto some internal tooling that I'd like to think sped everyone up. although maybe I'm giving myself a bit too much credit. I don't think anyone's switched back yet.",
    "and before that, I spent almost three years as the only engineer at Kasperia, which is an appliance contracting company based out of Vancouver, where some days I was working on internal tooling and software, and others I was literally the guy carrying appliances up the stairs. I kind of just did it all. on top of that, I built them a system that takes a project from bid to supplier quotes, all the way to pricing and orders, and its whole gist is basically just automating the manual, boring, error-prone work in between.",
    "and the closest I've actually gotten to writing vehicle software so far is ROS 2 nodes across planning, perception, and control for the autonomous car at [WATonomous](https://www.watonomous.ca/), which is Waterloo's self-driving team.",
    "anyways, I've already applied to a couple of the winter internships: the fullstack one on Fleetnet, and the software developer one on Integration Tools. so if either of those, or anything in vehicle software or Autopilot, still has a spot, I'd love to be considered. and if you're not the right person for interns, I'd really appreciate it if you could pass this along to whoever is. and also, if you're interested, you can book a time with me right below this.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
