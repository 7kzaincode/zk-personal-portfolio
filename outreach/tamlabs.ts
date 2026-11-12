import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Joshua and Ben",
  subject: "Can I please please (please) intern at TamLabs?",
  greeting: "hey Joshua and Ben,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I built a small team of agents where one plans, one writes, one checks, and one packages, and learned that most of the work is getting them to hand things to each other properly.",
    "that's [extgen](https://github.com/7kzaincode/the-extension), a Chrome side panel that turns a plain-english request into an installable extension.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders. its agents drafted supplier follow-ups and payment emails from live project state.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I moved my team onto agent harnesses with pre-commit gates, so nothing an agent wrote got committed without passing the checks.",
    "where I think I'd help: the handoffs between agents, which is where complex work usually falls over.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
