import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Mark",
  subject: "Could I please please (please) come work with you at Jooba?",
  greeting: "hey Mark, I'm Zain.",
  paragraphs: [
    "I saw that Jooba builds a separate sourcing agent for every open role, and that the outreach goes out under the founder's own name. and as someone currently doing his own outreach under his own name, I respect that. so I figured I'd reach out.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me: I built [otto](https://github.com/7kzaincode/otto) with a few friends at a hackathon. it's basically a voice assistant: you tell it what you want, and it creates the calendar event, sends the email, or summarizes your GitHub for you. and we ended up winning first place in the LiveKit track.",
    "I also spent almost three years as the only engineer at Kasperia, which is an appliance contracting company. some days I was working on internal tooling, and others I was just the guy carrying appliances up the stairs. I kind of just did it all. the main thing I built was a system that takes a project from the bid and the quote, through every change order, all the way to deliveries and invoices. it also has an agent built into every project, which drafts the changes and the emails, and then a person approves them before anything goes out. and every change has to come with a reason, so you can always tell why a number moved.",
    "and this past summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "anyways, I'd really like to work on Jooba this winter. so if you have room for an intern, I'd really appreciate a quick chat. you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
