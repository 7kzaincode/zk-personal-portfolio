import type { OutreachLetter } from '../components/OutreachPage';

const letter: OutreachLetter = {
  to: "Amanda",
  subject: "Can I please please (please) intern at Cockroach Labs?",
  greeting: "hey Amanda,",
  paragraphs: [
    "word on campus is that Cockroach Labs has been taking waterloo co-ops for years, so I'd like to be one of them. (this is a cold email, it just happens to live on my website.)",
    "I'm Zain, a computer engineering student @ [waterloo](https://uwaterloo.ca/), looking for a co-op from january to april.",
    "I should be honest that so far I've been a database's user, not its author. this summer at [Leap Tools](https://www.leaptools.com/) I shipped features across seven production apps (Python/Django services over gRPC, Postgres, AWS) and led the rebuild of their surface designer from plan to production. that included a Postgres migration.",
    "on [WATonomous](https://www.watonomous.ca/), waterloo's autonomous vehicle team, I wrote C++ ROS 2 nodes across perception, planning, and control (costmaps, A*, pure pursuit), enough to get a robot across a room without hitting anyone.",
    "before that I was the only engineer at Kasperia, an appliance contracting company, where I built KPM, an agentic system that runs projects from bid to supplier quotes, pricing, and orders.",
    "would you be open to a 15-minute chat? I'll try to make it worth all 15 (or at least the first 10), and I'd love to hear which teams take second-year co-ops.",
  ],
};

export default letter;
