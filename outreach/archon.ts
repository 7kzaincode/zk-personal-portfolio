import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "George",
  subject: "Can I please please (please) intern at Archon?",
  greeting: "hey George,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I spent almost three years building the system an appliance contractor uses to bid on projects, so I have real sympathy for anyone staring at procurement paperwork.",
    "that was at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders (and carried appliances up strangers' stairs on the days I wasn't coding).",
    "it kept separate histories for quotes, payments, and deliveries so every price and lead time traced back to its source, and had agents draft supplier follow-ups and payment emails straight from live project state.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I led the rebuild of their surface designer from plan to production. shoppers in 80+ countries use it to design custom tile and flooring patterns.",
    "where I think I'd help: the document-heavy plumbing, where a bid has to line up with a dozen requirements and somebody has to prove it does.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
