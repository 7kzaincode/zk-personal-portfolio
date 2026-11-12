import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Tamish and Archish",
  subject: "Can I please please (please) intern at cocreate?",
  greeting: "hey Tamish and Archish,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I spent my summer rebuilding a creative tool so it runs live in the browser instead of waiting on a server render, which I suspect is a problem video software knows well.",
    "that was the surface designer at [Leap Tools](https://www.leaptools.com/). I moved tile-pattern generation out of a server-side C++ render service and into the browser, so patterns can be edited live. shoppers in 80+ countries use it.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders.",
    "where I think I'd help: editor work: the rendering, state, and performance problems that decide whether a creative tool feels good.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
