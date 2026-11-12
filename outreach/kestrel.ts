import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Raman",
  subject: "Can I please please (please) intern at Kestrel?",
  greeting: "hey Raman,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and my summer was Django services over gRPC, AWS, a Postgres migration, and getting coding agents to stop committing things that failed checks. so agents for platform engineering sounds like help I would've taken.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I shipped features across seven production apps (Python/Django services over gRPC, Postgres, AWS) and led the rebuild of their surface designer from plan to production.",
    "I also moved my team onto agent harnesses with pre-commit gates, so nothing an agent wrote got committed without passing the checks.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders.",
    "where I think I'd help: writing the agent, then being the grumpy engineer it has to satisfy.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
