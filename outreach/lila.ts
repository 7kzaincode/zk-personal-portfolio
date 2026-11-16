import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Lila",
  subject: "Could I please please (please) come work with you at Tesla?",
  greeting: "hey Lila, I'm Zain.",
  video: "/video/lila.mp4",
  cutout: true,
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 2.2, 10.7, 20.6, 32.5, 44.4, 72.6, 81.2, 81.6],
  paragraphs: [
    "I saw that you're on Tesla's internship recruiting team, and I just so happen to be looking for an internship, so I figured that makes you exactly the person to talk to.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm currently looking for an internship from january to april.",
    "to give you an idea of what I do: I spent the summer at [Leap Tools](https://www.leaptools.com/), where I rebuilt their surface designer from start to finish. that's basically the tool that shoppers use to design their own tile patterns, and it's being used in over 80 countries.",
    "while I was there, I also got the team onto some internal tooling. I'd like to think that it sped everyone up, although maybe I'm giving myself a bit too much credit. but hey, I don't think anyone's gone back to the old way just yet.",
    "and before that, I spent almost three years as the only engineer at Kasperia, which is an appliance contracting company based out of Vancouver. some days I was just working on internal tooling and software, and other days I was the guy carrying appliances up the stairs. I just did it all. on top of that, I built them a system that takes a project from bid to supplier quotes, all the way to pricing and orders, and its whole gist is basically just automating the manual, boring, error-prone work in between.",
    "anyways, I know a lot of the focus is on summer right now, but if any software teams still have intern spots for january, I'd love to be considered, and you can book a time with me right below this.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
