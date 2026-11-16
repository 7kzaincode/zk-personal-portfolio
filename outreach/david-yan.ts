import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "David",
  subject: "Could I please please (please) come work with you at Tesla?",
  greeting: "hey David, I'm Zain.",
  video: "/video/david-yan.mp4",
  cutout: true,
  // the second each line starts in the recording, taken from its transcript
  cues: [0, 2.3, 12.8, 24.0, 36.4, 46.4, 72.3, 82.4, 82.8],
  paragraphs: [
    "so I saw you're an engineering manager on Autopilot, on the AI tooling side, and I actually spent part of my summer building tooling for my own team, obviously on a way smaller scale, so I figured I'd reach out and say hi.",
    "anyways, if you're seeing this, that means you've seen my email. like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm currently looking for an internship from january to april, ideally on your team.",
    "a little bit about me: this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. that's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "I also set up some internal tooling for the team, which I'd like to think made everyone work a bit faster. but maybe that's just me giving myself too much credit. although I don't think anyone's switched back just yet, so I'll take that.",
    "and before that, I spent three years as the only engineer at Kasperia, which is an appliance contracting company based out of Vancouver. some days I was just working on internal tooling and software, and others I was the guy carrying appliances up the stairs. I kind of just did it all. on top of that, I built them a system that takes a project from bid to supplier quotes, all the way to pricing and orders, and it's basically just automating the manual, boring, error-prone work in between.",
    "anyways, that's pretty much the kind of work I'd love to do. so if you've got any spots for interns on your team this winter, I'd really appreciate a quick chat, and you can book a time with me right below, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
