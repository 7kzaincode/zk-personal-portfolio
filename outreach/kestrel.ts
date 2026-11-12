import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Raman",
  subject: "Could I please please (please) come work with you at Kestrel?",
  greeting: "hey Raman, I'm Zain.",
  paragraphs: [
    "word on the street is that Kestrel builds AI agents for platform engineering. my summer was Django services, AWS, and a Postgres migration, so that sounds like help I would've taken.",
    "like I said in my email, I'm a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I'm interested in platform engineering.",
    "this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production (it's live in 80+ countries), and shipped backend features across six other production apps.",
    "I also moved the team onto AI coding agents with pre-commit gates, so nothing an agent wrote got committed without passing the checks.",
    "before that I spent almost three years as the only engineer at Kasperia, an appliance contracting company (and, on some days, the guy carrying the appliances up the stairs). I built them a system that takes a project from bid to supplier quotes to pricing to orders, and its whole gist is automating the manual, boring, error-prone work in between.",
    "if you're interested, please book a time with me below!",
  ],
};

export default letter;
