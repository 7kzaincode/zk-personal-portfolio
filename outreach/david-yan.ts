import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "David",
  subject: "Could I please please (please) come work with you at Tesla?",
  greeting: "hey David, I'm Zain.",
  video: "/video/david-yan.mp4",
  cutout: true,
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 2.1, 14.2, 26.6, 38.8, 49.3, 72.5, 83.6, 92.9, 93.4],
  paragraphs: [
    "so I saw that you're an engineering manager on Autopilot, on the AI tooling side. and I actually spent part of my summer building tooling for my own team, obviously on a way smaller scale, so I figured that I'd just reach out and say hi.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and currently I'm looking for an internship from january to april, ideally on your team.",
    "a little bit about me: this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that just lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "I also set up some internal tooling for the team, which I'd like to think made everyone faster. although maybe that's just me giving myself a bit too much credit, but I haven't seen anyone switch back yet, so I'll take that.",
    "before that, I also spent three years as the only engineer at Kasperia, which is an appliance contracting company in Vancouver. some days I was just working on the internal tooling, and other days I was just the guy carrying some appliances up the stairs. I kind of just did all of it. and on top of that, I built them a system that takes a project from bid to supplier quotes, all the way to pricing and orders, and its whole gist is basically just automating the manual, boring, error-prone work in between.",
    "I was also on [WATonomous](https://www.watonomous.ca/), which is Waterloo's self-driving team, where I wrote ROS 2 nodes across perception, planning, and control for the autonomous car. so that's probably the closest I've gotten to real vehicle software so far.",
    "anyways, that's pretty much the kind of work I'd love to do. so if you've got any spots for interns on your team this winter, I'd really appreciate a quick chat, and you can book a time with me right below this.",
  ],
  signoff: ["Thanks.", "Zain"],
};

export default letter;
