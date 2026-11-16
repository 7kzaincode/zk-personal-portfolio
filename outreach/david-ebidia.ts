import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "David",
  subject: "Could I please please (please) come work with you at Tesla?",
  greeting: "hey David, I'm Zain.",
  video: "/video/david-ebidia.mp4",
  cutout: true,
  poster: "/video/david-ebidia.jpg",
  crop: [0.1017, 0.0398, 0.8322, 0.9602],
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 2.1, 10.6, 26.6, 41.8, 53.9, 77.1, 88.4, 89.0],
  paragraphs: [
    "I saw you studied computer engineering at [Waterloo](https://uwaterloo.ca/), and I just happen to be in the same program as well, so I figured that was a good enough excuse to reach out.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm looking for an internship from january to april. I actually saw your post a while back about your team hiring interns to build tools for engineers across Tesla, in React and TypeScript, and I guess that's pretty much what I spent my whole summer writing.",
    "so, a bit about what I've done: this past summer I worked at [Leap Tools](https://www.leaptools.com/), where I ended up leading the rebuild of their surface designer, from the first plan all the way to production. it's basically what lets shoppers design their own tile patterns, and it's live in over 80 countries now.",
    "I also set up some internal tooling for the team, which I'd like to think made everyone a little faster. although maybe that's just me giving myself a bit too much credit. although I haven't heard of anyone switching back just yet, so I'll take it.",
    "anyways, before Leap I spent almost three years at Kasperia, which is an appliance contracting company in Vancouver, and I was the only engineer there. some days I was building internal tools, and other days I was just the guy carrying appliances up the stairs. I kind of did it all. but the main thing I built was a system that takes a project from bid to supplier quotes, all the way to pricing and orders. basically, it just automated all the manual, boring, error-prone work in between.",
    "anyways, that's me. and honestly, your team is where I'd love to intern. I know that the post was for summer, but if there's any room for an intern this winter, I'd appreciate even a short chat, and there's a calendar link right below this.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
