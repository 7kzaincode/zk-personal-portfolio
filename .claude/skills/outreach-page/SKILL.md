---
name: outreach-page
description: Make a personal outreach page on zainkhan.dev for one person (zainkhan.dev/<their-name>) - an email-style letter that types itself out as they scroll. Use whenever ZK gives a name plus a rough draft or notes and asks for an outreach page, a "page for [person]", a personalised link, or says "do the outreach thing for [person]". Works with zk-voice and zk-outreach, which own the writing rules.
---

# Outreach page

ZK pastes a rough message for one person. You turn it into a page at `zainkhan.dev/<slug>` and tell him when it's ready. The whole job is one new file; the template already exists.

## How it's wired (don't rebuild this)

- `outreach/<slug>.ts` default-exports an `OutreachLetter`. That file is the page.
- `index.tsx` globs `outreach/*.ts` and renders `components/OutreachPage.tsx` when the URL path matches a file name. Anything else is the home page.
- `vercel.json` rewrites extensionless paths to `index.html` so the link works when opened directly.
- The page is a plain top-left letter: a from/to/re header, then the text types itself out as the reader scrolls (the top of the letter types on load, and the last word lands as the end of the letter reaches the bottom of the screen; his Calendly is embedded just below). It scrolls like a normal page, so they can scroll back up. Links (reply by email, resume, LinkedIn, site) fade in once everything is typed. It sets `noindex`.
- **Link preview.** `npm run og -- <slug>` photographs `/<slug>?card` into `public/og/<slug>.png` (needs the dev server on port 3000 and Google Chrome). At build, a plugin in `vite.config.ts` writes `dist/<slug>/index.html` with that person's title, description and picture, so the link shows a "for <Name>" card when pasted into LinkedIn, iMessage or Slack.

Only touch `OutreachPage.tsx` if ZK asks for a design change. A design change affects every letter already sent.

## Steps

1. **Get the inputs.** You need the person's first name and the draft. Company and role make the letter much better; if the draft doesn't say who they work for, ask once in the same message you deliver in, and don't block on it.
2. **Load `zk-voice` and `zk-outreach`** and follow them for the copy. Facts come only from the draft, `zk-outreach`'s `references/facts.md` and `phrasings.md`, or research you just did. Fill gaps in the draft (like "(what they do)") from those; never invent.
3. **Rewrite the draft** (rules below).
4. **Write `outreach/<slug>.ts`**, copying the shape of an existing letter.
5. **Make the preview picture.** With the `site` preview server running, `npm run og -- <slug>`, then look at `public/og/<slug>.png`: the subject must fit in two lines without crowding the footer. Shorten the subject if it doesn't.
6. **Check it.** `npm run typecheck`, then open `http://localhost:3000/<slug>` with the `site` preview config, scroll to the end, confirm everything types out and the links appear, then scroll back to the top. Check at phone width too.
7. **Commit** (the letter and its picture) as `Add outreach page for <Name>.` Push only when ZK has said to (pushing to `main` deploys). If he said "ship it" or similar in the request, push without asking again.
8. **Report** in a few lines: the URL, the final copy, and anything he should verify. No explanation of how it was written.

## Slug

Lowercase first name, letters, digits and hyphens only: `giliat`. If that file exists or the name is common, use `firstname-company` (`sam-tesla`). Never reuse or overwrite an existing slug; the old link is in someone's inbox.

## Writing the letter

The page is the script ZK reads out in a one-minute video, so it has to sound like him talking. Load `zk-voice` and `zk-outreach`; on top of those:

- **`subject`**: `Could I please please (please) come work with you at <Company>?` It's shown after "re", on the preview card, and is the email subject.
- **`greeting`**: `hey <Name>, I'm Zain.`
- **Shape, in this order.** Intro and outro are as short as possible; about 80% of the words are what he did.
  1. **Hook** (1-2 sentences), in the "word on the street is that… conveniently, I… so I figured…" voice, built on a real fact about them (a posting, their team, a school tie, what the company does).
  2. **One line**: `like I said in my email, I'm a computer engineering student @ waterloo, and I'm interested in <their area>.`
  3. **The work** (2-4 paragraphs), most relevant first: Leap Tools, the internal tooling, Kasperia, WATonomous, or a project (otto, toothfairy, thinkaloud, extgen, ADEPT, teachAR). Reuse the wording already in `outreach/giliat.ts` and other letters so every video says the same things the same way.
  4. **Outro**: `if you're interested, please book a time with me below!` The sign-off defaults to "Thank you." / "Zain", and the page embeds his Calendly under it.
- **Voice.** Conversational, lowercase, one aside per paragraph at most. Jokes about the situation are fine ("which I realise is not a strong negotiating position"); never undercut the work itself ("which I still find alarming" was rejected). No jargon like "agentic system" or "live project state".
- **Length**: 150-220 words, which is 60-90 seconds spoken.
- **Links**: `[text](url)` for the companies and projects he mentions. No "where I think I'd help" line and no separate ask paragraph.
- Facts come only from the draft or sheet, `zk-outreach`'s references, or research you just did. If a row has no description of the company, look it up; don't skip the row.

## Video

When ZK has recorded himself reading a page, put the file at `public/video/<slug>.mp4` (compress it first: about 480p, a few MB) and add `video: '/video/<slug>.mp4'` to the letter. The page then shows the video on the right and types the text on the left in time with it, and scrolling no longer drives anything. On video pages the name in the greeting gets a dotted underline, and hovering it shows "sorry if I said your name wrong". Check the spelling of the name against the source before publishing. If the typing drifts from his speech, add `cues`: the second at which each line starts (greeting, each paragraph, then the two sign-off lines).

## The email that carries the link

ZK sends this himself; fill in the connection from the row.

```
Subject: Could I please please (please) come work with you at <Company>?

Hi <name>! I'm Zain and I'm a computer engineering student at UWaterloo. I'm emailing you because, well, I need an internship, and I saw you <connection>. To prove this isn't just yet another generated email that I'm sure your inbox is inundated with, I recorded a quick little intro about myself and why I'd like to come work for you. That is, if you're taking on interns.

Take a look here: zainkhan.dev/<slug> (it's only around a minute long)

Anyway, I'd really appreciate any opportunity to chat if you have time. Or not, that's cool. It's not like I'm desperate or anything, haha...

Regards,
Zain!
```

Without a video, the middle sentence becomes: "In a time where your inbox is probably inundated with generated emails, I made a little webpage to show the care I put into my work, which I would likewise bring to your team." and the "(it's only around a minute long)" is dropped. The "Or not, that's cool…" sentence is set in small type in Gmail.

## Batches from a spreadsheet

When ZK gives a sheet of people instead of one draft, make one letter per row using only what the row says about the person (role, team, school tie, live posting) plus his facts. Lead each letter with the proof closest to that person's work, change the hook per person, and don't reuse the same opening for two people at one company. Engineers and managers get asked for a chat about the work; recruiters get the internship ask. Rows the sheet marks as unverified still get a page, flagged in the report. Finish by adding a tab to the sheet listing each person, their page URL, the angle used, and anything to check before sending.

## Privacy

The repo is public and so is every letter in it. Keep letters to what he'd be fine with anyone reading: no private contact details for the recipient, no last names unless ZK asks, nothing about other companies he's talking to.
