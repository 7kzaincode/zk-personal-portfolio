import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Adam",
  subject: "Can I please please (please) intern at Bree?",
  greeting: "hey Adam,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I spent my summer on backend services and the three years before that making sure an appliance contractor's payments traced back to their source. so a backend co-op at a fintech seemed worth a webpage.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I shipped features across seven production apps (Python/Django services over gRPC, Postgres, AWS) and led the rebuild of their surface designer from plan to production.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders. it kept separate histories for quotes, payments, and deliveries so every price and lead time traced back to its source, and had agents draft supplier follow-ups and payment emails straight from live project state.",
    "where I think I'd help: backend work where the numbers have to be right the first time.",
    "would love to chat if you're open to it. I saw the backend co-op role, and I'm looking for january to april.",
  ],
};

export default letter;
