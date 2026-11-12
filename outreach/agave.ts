import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Tom",
  subject: "Can I please please (please) intern at Agave?",
  greeting: "hey Tom,",
  paragraphs: [
    "I heard Agave hired three waterloo co-ops this fall and is keeping all three, which is either a very good sign or a very high bar. (yes, this is a cold email with its own url.)",
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), looking for a co-op from january to april.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I shipped features across seven production apps (Python/Django services over gRPC, Postgres, AWS) and led the rebuild of their surface designer from plan to production. a good chunk of that was APIs serving other companies' storefronts.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built the system that runs their projects from bid to supplier quotes, pricing, and orders.",
    "where I think I'd help: integrations: the patient work of making two systems that disagree agree.",
    "would love to chat if you're open to it, and to hear whether you're running a winter cohort.",
  ],
};

export default letter;
