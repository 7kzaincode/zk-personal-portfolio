import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Naga",
  subject: "Could I please please (please) come work with you at Tesla?",
  greeting: "hey Naga, I'm Zain.",
  video: "/video/naga.mp4",
  cutout: true,
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 2.4, 15.4, 25.6, 38.2, 47.1, 72.8, 86.9, 87.3],
  paragraphs: [
    "so I saw your posts about hiring for supply chain AI at Tesla, and I actually spent almost three years building a supply and ordering system for a contracting company, with a decent amount of AI automation in it, so I figured I'd reach out and say hi.",
    "anyways, if you're seeing this, that means you've seen my email. like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "to give you an idea of what I do: I spent this summer at [Leap Tools](https://www.leaptools.com/), where I rebuilt their surface designer from start to finish. that's basically the tool that shoppers use to design their own tile patterns, and it's been used in over 80 countries.",
    "I also moved the team onto some internal tooling that I'd like to think sped everyone up. although maybe I'm just giving myself a bit too much credit. but hey, no one's really switched back yet.",
    "before Leap Tools, I also spent three years at Kasperia, which is an appliance contracting company, where I was the only engineer. so some days I was building internal tooling, and other days I was just the guy carrying appliances up the stairs. I kind of just did it all. the main thing I did build was a system that takes a project from the bid to supplier quotes, all the way to pricing and orders, basically just automating all the manual, boring, error-prone work in between.",
    "anyways, that's pretty much the kind of work I'd love to do. so I'm not sure if your team takes interns, but if it does, I'd love to be considered. and if not, I'd really appreciate it if you could point me to someone who does. either way, you can book a time with me right below, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
