import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Rob and Nir",
  subject: "Could I please please (please) come work with you at Backboard?",
  greeting: "hey Rob and Nir, I'm Zain.",
  paragraphs: [
    "I was reading your co-op page, and it says you care more about what people have built than their coursework. so I figured, instead of sending a resume, I'd just tell you what I've built.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "so, a little bit about me: I built [toothfairy](https://github.com/7kzaincode/toothfairy) with a team at a hackathon. it's basically an assistant for dentists that reads X-rays and clinical notes, and turns them into a treatment plan with the procedure codes and costs. and the part I think you'd care about is that it remembers each patient's history, so it isn't starting from zero every visit.",
    "I also built [otto](https://github.com/7kzaincode/otto) with a few friends at a hackathon. it's basically a voice assistant: you tell it what you want, and it creates the calendar event, sends the email, or summarizes your GitHub for you. and we ended up winning first place in the LiveKit track.",
    "and this past summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "and before that, I spent almost three years as the only engineer at Kasperia, which is an appliance contracting company. some days I was just working on internal tooling, and others I was just the guy carrying appliances up the stairs. I kind of just did it all. on top of that, I built them a procurement system that takes a project from the bid and the supplier quotes, through pricing and every change order, all the way to deliveries and invoices, and its whole gist is basically just automating the manual, boring, error-prone work in between.",
    "anyways, I'd really like to work at Backboard this winter. so if you have a spot for an intern, I'd really appreciate a quick chat. you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
