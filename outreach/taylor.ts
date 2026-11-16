import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Taylor",
  subject: "Could I please please (please) come work with you at Tesla?",
  greeting: "hey Taylor, I'm Zain.",
  video: "/video/taylor.mp4",
  cutout: true,
  // the second each line starts in the recording, taken from its transcript
  cues: [0.5, 2.4, 13.3, 23.4, 35.3, 45.1, 71.6, 79.3, 86.5, 86.8],
  paragraphs: [
    "I heard you're the university recruiter for vehicle software at Tesla, and I just so happen to be a university student who wants to work on vehicle software, so I figured you're probably the best person to talk to.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me: I spent this summer at [Leap Tools](https://www.leaptools.com/), where I rebuilt their surface designer from start to finish. that's basically the tool that shoppers use to design their own tile patterns, and it's being used in over 80 countries.",
    "I also set up some internal tooling for the team, which I'd like to think made everyone work a little bit faster. maybe that's giving myself a bit too much credit, but nobody's switched back just yet, so I'll take that.",
    "and before that, I spent almost three years as the only engineer at Kasperia, which is an appliance contracting company based out of Vancouver. there were some days I was working on internal tooling, and other days I was just the guy carrying appliances up the stairs. I kind of just did it all. on top of that, I built them a system that takes a project from bid to supplier quotes, all the way to pricing and orders, and its whole gist is basically just automating the manual, boring, error-prone work in between.",
    "the closest I've actually gotten to vehicles so far is that I wrote ROS 2 nodes across perception, planning, and control for the autonomous car at [WATonomous](https://www.watonomous.ca/).",
    "anyways, if any vehicle software teams still have intern spots for january, I'd love to be considered, and you can book a time with me right below this.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
