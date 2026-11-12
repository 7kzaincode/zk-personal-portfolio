import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Hassan",
  subject: "Can I please please (please) intern at Argos Research?",
  greeting: "hey Hassan,",
  paragraphs: [
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), and I saw Argos is on WaterlooWorks. most of what I've built with models ends in a program, not a prediction, so 'intelligence as programs' caught my attention.",
    "the clearest example is [extgen](https://github.com/7kzaincode/the-extension), a Chrome side panel that turns a plain-english request into an installable extension, with agents that plan, write, validate, and package the code.",
    "on the research side, I've been building ADEPT at UBC, an attention-based model that predicts which genes cancer cell lines depend on from expression data. it outperforms DeepDep, and I'm writing the paper now.",
    "this summer at [Leap Tools](https://www.leaptools.com/) I moved my team onto agent harnesses with pre-commit gates, so nothing an agent wrote got committed without passing the checks.",
    "where I think I'd help: building and evaluating the systems around the research, and running the experiments nobody else has time for.",
    "would love to chat if you're open to it (I'm looking for a co-op from january to april).",
  ],
};

export default letter;
