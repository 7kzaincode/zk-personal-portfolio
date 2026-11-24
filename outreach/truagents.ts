import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Majd and Korash",
  subject: "Could I please please (please) come work with you at TruAgents?",
  greeting: "hey Majd and Korash, I'm Zain.",
  paragraphs: [
    "I saw that TruAgents writes every email, text, and call individually for each customer, and that one agent writes it and another one reviews it before anything goes out. I liked that, because I've built an agent that drafts things on a company's behalf, and mine also has to wait for a person to approve it before anything goes out. so I figured I'd reach out.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "a little bit about me: I spent almost three years as the only engineer at Kasperia, which is an appliance contracting company based out of Vancouver. some days I was working on internal tooling, and others I was just the guy carrying appliances up the stairs. I kind of just did it all. the main thing I built was a system that takes a project from the bid and the quote, through every change order, all the way to deliveries and invoices. it also has an agent built into every project, which drafts the changes and the emails, and then a person approves them before anything goes out. and every change has to come with a reason, so you can always tell why a number moved.",
    "I also built [otto](https://github.com/7kzaincode/otto) with a few friends at a hackathon. it's basically a voice assistant: you tell it what you want, and it creates the calendar event, sends the email, or summarizes your GitHub for you. and we ended up winning first place in the LiveKit track.",
    "and this past summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "anyways, I'd really like to work on TruAgents this winter. so if you have room for an intern, I'd really appreciate a quick chat. you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
