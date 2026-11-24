import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Lucia",
  subject: "Could I please please (please) come work with you at Tesla?",
  greeting: "hey Lucia, I'm Zain.",
  video: "/video/lucia.mp4",
  cutout: true,
  poster: "/video/lucia.jpg",
  crop: [0.0738, 0.0, 0.8667, 1.0],
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 2.2, 10.2, 20.6, 39.6, 48.5, 74.0, 88.1, 88.5],
  paragraphs: [
    "I saw that you recruit for Tesla's energy software teams, and I just so happen to be looking for a software internship this winter, so I figured I'd reach out directly.",
    "anyways, if you're seeing this, that means you've also seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "to give you an idea of what I do: I spent this summer at [Leap Tools](https://www.leaptools.com/), where I rebuilt their surface designer from start to finish. that's basically the tool that shoppers use to design their own tile patterns, and it's being used in over 80 countries. on top of that, I worked on the backend for six of their other apps, so services, databases, APIs.",
    "I also moved the team onto some internal tooling that I'd like to think sped everyone up. although maybe I'm giving myself a bit too much credit. but hey, I don't think anyone's going to switch back yet.",
    "before Leap, I spent almost three years at Kasperia, which is an appliance contracting company, and I was the sole engineer there. so some days I was building internal tools and software, and some days I was the guy carrying appliances up the stairs. I kind of did it all. the main thing I built was a system that takes a project from the bid to supplier quotes, all the way to pricing and orders. basically, it just automated all the manual, boring, error-prone work in between.",
    "anyways, I know you hire full-time, but if any energy software teams are taking interns this winter, I'd love to be considered. if interns aren't your area, I'd really appreciate being pointed to whoever handles them. anyways, you can book a time with me right below this.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
