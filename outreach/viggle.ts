import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "the Viggle team",
  subject: "Could I please please (please) come work with you at Viggle?",
  greeting: "hey, I'm Zain.",
  video: "/video/viggle.mp4",
  cutout: true,
  poster: "/video/viggle.jpg",
  crop: [0.0868, 0.0521, 0.8215, 0.9479],
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 2.1, 10.4, 16.8, 29.3, 45.9, 71.7, 83.3, 94.6, 95.0],
  paragraphs: [
    "I saw the posting for the MTS co-op on the [Viggle](https://viggle.ai/) app, and since you're a video company, I figured a video would make more sense than a cover letter. so here I am.",
    "anyways, a little bit about me is that I'm a computer engineering student at [Waterloo](https://uwaterloo.ca/), and I'm looking for a winter internship.",
    "this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. and it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries. it's all just in TypeScript and React.",
    "the way the team worked was slightly ancient when I got there, so I shared the harness that I set up for myself, and pretty soon everyone else was on it too. I'd like to think that it sped everyone up, and it had a pretty noticeable impact. although maybe I'm just giving myself a bit too much credit. but hey, I don't think anyone's switched back yet.",
    "before that, I spent almost three years as the sole engineer at Kasperia, which is an appliance contracting company based out of Vancouver, where some days I was working on internal tooling, and other days I was literally carrying appliances up the stairs. I kind of just did it all. on top of that, I built them a system that takes a project from bid to supplier quotes, all the way to pricing and orders, and its whole gist is basically just automating the manual, boring, error-prone work in between.",
    "on the mobile side, I built [Scanify](https://devpost.com/software/scanify-db2xms) with a couple of friends at Hack Canada. it's an App Clip written in Swift and SwiftUI, where you can scan any product's barcode in a store and get an experience made for that exact product.",
    "anyways, I've already applied on WaterlooWorks, and I'd like to work on the Viggle app this winter. so if you'd like to chat, you can book a time with me right below this. or just give me the WaterlooWorks interview. either works.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
