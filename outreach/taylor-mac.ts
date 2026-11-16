import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Taylor",
  subject: "Could I please please (please) come work with you at Tesla?",
  greeting: "hey Taylor, I'm Zain.",
  video: "/video/taylor-mac.mp4",
  cutout: true,
  poster: "/video/taylor-mac.jpg",
  crop: [0.0764, 0.0, 0.8642, 0.9972],
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 2.2, 12.8, 22.1, 33.2, 45.2, 72.5, 80.7, 88.3, 88.7],
  paragraphs: [
    "I saw your posts about Tesla's winter 2027 software internships, including the vehicle controls ones, and I just so happen to be looking for exactly that, so I figured I'd go straight to the person posting them.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me: this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. that's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "while I was there, I also got the team onto some internal tooling. I'd like to think that it sped everyone up, although maybe I'm giving myself a bit too much credit. but hey, I don't think anyone's gone back to the old way just yet.",
    "and before that, I was the only engineer at Kasperia for roughly three years. they're an appliance contracting company based out of Vancouver, so some days I was working on internal tooling and software, and other days I was literally carrying appliances up the stairs. I kinda just did it all. but the big thing was a system I built that takes a project from bid to supplier quotes, all the way to pricing and orders. its whole gist is basically just automating the manual, boring, error-prone work in between.",
    "and the closest I've actually gotten to a vehicle so far is that I wrote ROS 2 nodes across perception, planning, and control for the autonomous car at [WATonomous](https://www.watonomous.ca/).",
    "anyways, if any of those software teams still have intern spots for january, I'd love to be considered, and you can book a time with me right below this.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
