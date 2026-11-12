import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Charlie and Corey",
  subject: "Can I please please (please) intern at Bystreet?",
  greeting: "hey Charlie and Corey,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I spent almost three years building software that sits between a business and the suppliers it depends on, which seems to be roughly where Bystreet lives for hotels.",
    "that was at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders (and carried appliances up strangers' stairs on the days I wasn't coding).",
    "this summer at [Leap Tools](https://www.leaptools.com/) I shipped features across seven production apps (Python/Django services over gRPC, Postgres, AWS) and led the rebuild of their surface designer from plan to production.",
    "where I think I'd help: the product plumbing: integrations, data models, and whatever's currently being done in a spreadsheet.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
