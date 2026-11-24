import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Will and Colin",
  subject: "Could I please please (please) come work with you at Tenix?",
  greeting: "hey Will and Colin, I'm Zain.",
  paragraphs: [
    "I was reading the Tenix site, and one line really stood out to me: every figure traces back to the claim, or the contract, that it came from. I spent three years building a contractor's system around a similar rule: every change has to say why it was made. so I figured I'd reach out.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "so, that company was Kasperia, which is an appliance contracting company based out of Vancouver. some days I was working on internal tooling, and others I was just the guy carrying appliances up the stairs. I kind of just did it all. the main thing I built was a system that takes a project from the bid and the quote, through every change order, all the way to deliveries and invoices. it also has an agent built into every project, which drafts the changes and the emails, and then a person approves them before anything goes out. and every change has to come with a reason, so you can always tell why a number moved.",
    "I also built [toothfairy](https://github.com/7kzaincode/toothfairy) with a team at a hackathon. it's basically an assistant for dentists that reads X-rays and clinical notes, and turns them into a treatment plan with the procedure codes and costs.",
    "and this past summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "anyways, I'd really like to work on Tenix this winter. so if you have room for an intern, I'd really appreciate a quick chat. you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
