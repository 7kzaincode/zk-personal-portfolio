import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "the Viggle team",
  subject: "Could I please please (please) come work with you at Viggle?",
  greeting: "hey, I'm Zain.",
  paragraphs: [
    "I saw your posting for a co-op on the team behind the [Viggle](https://viggle.ai/) app, and since you're a video company, I figured a video would make more sense than a cover letter. so here I am.",
    "anyways, a little bit about me: I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "this past summer I worked at [Leap Tools](https://www.leaptools.com/), and I ended up leading the rebuild of their surface designer, from the first plan all the way to production. it's basically what lets shoppers design their own tile patterns, and it's live in over 80 countries now. the big change was moving the rendering off a server and into the browser, so when you edit a pattern it just updates live. it's all TypeScript and React.",
    "I also got the team set up with AI coding tools, with checks that have to pass before anything gets committed. I'd like to think that made everyone faster, although maybe I'm giving myself a bit too much credit. but hey, nobody's switched back just yet.",
    "on the mobile side, I built [Scanify](https://devpost.com/software/scanify-db2xms) with a few friends at Hack Canada. it's an App Clip written in Swift and SwiftUI, where you scan any product's barcode in a store and get an experience made for that exact product.",
    "and actually, this page is one of my projects too. the thing cutting me out of my background right now is a little pipeline I put together myself. so I've had a small taste of how hard video is, and I'd love to work on the real thing.",
    "and before that, I spent almost three years as the sole engineer at Kasperia, which is an appliance contracting company, so I'm used to owning something from start to finish, bugs included.",
    "anyways, I'd really like to work on the Viggle app this winter. if you'd like to chat, you can book a time with me right below this.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
