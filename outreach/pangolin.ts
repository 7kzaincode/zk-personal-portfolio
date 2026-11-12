import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Milo and Owen",
  subject: "Can I please please (please) intern at Pangolin?",
  greeting: "hey Milo and Owen,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and this summer I moved a team onto AI coding agents and then had to decide what they were allowed to do. so I think I've been your user.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I moved my team onto agent harnesses with pre-commit gates, so nothing an agent wrote got committed without passing the checks.",
    "I also shipped features across seven production apps (Python/Django services over gRPC, Postgres, AWS) and led the rebuild of their surface designer from plan to production.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders.",
    "where I think I'd help: the agent side of access: what they connect to, and what happens when they shouldn't.",
    "would love to chat if you're open to it (also looking for an intern position for w27, january to april, if that's on the table).",
  ],
};

export default letter;
