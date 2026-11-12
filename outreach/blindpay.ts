import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Bernardo and Joao",
  subject: "Can I please please (please) intern at BlindPay?",
  greeting: "hey Bernardo and Joao,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I've never moved a stablecoin, but I spent my summer building APIs that other companies' storefronts depend on, which taught me how quickly somebody else's checkout becomes your problem.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I shipped features across seven production apps (Python/Django services over gRPC, Postgres, AWS) and led the rebuild of their surface designer from plan to production.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders. every payment in it traced back to its source.",
    "where I think I'd help: API and integration work, the kind where being boring and correct is the whole job.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
