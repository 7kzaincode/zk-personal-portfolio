import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Milo and Owen",
  subject: "Could I please please (please) come work with you at Pangolin?",
  greeting: "hey Milo and Owen, I'm Zain.",
  paragraphs: [
    "word on the street is that Pangolin does open networking and security for teams, AI agents, and infra. conveniently, I moved a team onto AI coding agents this summer and then had to decide what they were allowed to do.",
    "like I said in my email, I'm a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I'm interested in infrastructure and access for agents.",
    "this summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production (it's live in 80+ countries), and shipped backend features across six other production apps.",
    "I also moved the team onto AI coding agents with pre-commit gates, so nothing an agent wrote got committed without passing the checks.",
    "before that I spent almost three years as the only engineer at Kasperia, an appliance contracting company (and, on some days, the guy carrying the appliances up the stairs). I built them a system that takes a project from bid to supplier quotes to pricing to orders, and its whole gist is automating the manual, boring, error-prone work in between.",
    "if you're interested, please book a time with me below!",
  ],
};

export default letter;
