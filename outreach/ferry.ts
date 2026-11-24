import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Mehul and Keyur",
  subject: "Could I please please (please) come work with you at Ferry?",
  greeting: "hey Mehul and Keyur, I'm Zain.",
  paragraphs: [
    "I saw that Ferry's agents actually call the clinic and sit through the phone tree to book the appointment, because most offices don't have any other way in. I've built a couple of things in that direction, a voice agent and an assistant for dental patients, so I figured I'd reach out.",
    "anyways, if you're seeing this, that means you've seen my email. and like I said there, I'm a computer engineering student at the University of [Waterloo](https://uwaterloo.ca/), and I'm looking for an internship from january to april.",
    "so, the voice agent was [otto](https://github.com/7kzaincode/otto), which I built with a few friends at a hackathon. it's basically a voice assistant: you tell it what you want, and it creates the calendar event, sends the email, or summarizes your GitHub for you. and we ended up winning first place in the LiveKit track.",
    "and the other one was [toothfairy](https://github.com/7kzaincode/toothfairy), which I built with a team at a hackathon. it's basically an assistant for dentists that reads X-rays and clinical notes, and turns them into a treatment plan with the procedure codes and costs.",
    "and this past summer I was at [Leap Tools](https://www.leaptools.com/), where I led the rebuild of their surface designer from plan to production. it's basically the thing that lets shoppers design their own tile patterns, and it's live in over 80 countries.",
    "anyways, I'd really like to work on Ferry this winter. so if you have room for an intern, I'd really appreciate a quick chat. you can book a time with me right below this, if you'd like.",
  ],
  signoff: ["Thank you.", "Zain"],
};

export default letter;
