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
- The page is a plain top-left letter: a from/to/re header, then the text types itself out as the reader scrolls (the top of the letter types on load, and the last word lands exactly at the bottom of the scroll, with no empty space after the links; a letter short enough to fit on one screen just types itself out). It scrolls like a normal page, so they can scroll back up. Links (reply by email, resume, LinkedIn, site) fade in once everything is typed. It sets `noindex`.
- **Link preview.** `npm run og -- <slug>` photographs `/<slug>?card` into `public/og/<slug>.png` (needs the dev server on port 3000 and Google Chrome). At build, a plugin in `vite.config.ts` writes `dist/<slug>/index.html` with that person's title, description and picture, so the link shows a "for <Name>" card when pasted into LinkedIn, iMessage or Slack.
- **Open tracking.** `index.tsx` loads Vercel Web Analytics, so the Vercel dashboard (Analytics, then filter by page `/<slug>`) shows when a letter was opened. A browser that has visited any page with `?me` once is never counted (`?me=0` undoes it); that is how ZK keeps his own visits out.

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

It's a cold email that happens to live on a page, so everything in `zk-outreach` applies (swap test, meetup test, no glazing, no em dashes, casual lowercase, proper nouns kept). On top of that:

- **`subject`**: `Can I please please (please) intern at <Company>?` with their company's name, unless ZK gives a different one. It's shown after "re" and becomes the subject of their reply.
- **`greeting`**: `hey <Name>,`
- **The first paragraph is all a non-scroller is sure to see.** It must carry the hook and why he's writing to them specifically. One light, true admission that this is a cold email with its own page is fine, once.
- **One idea per paragraph, 1-3 sentences.** The reader scrolls to get each one typed, so each should be worth the scroll. 5-7 paragraphs total; under about 190 words.
- **Order**: hook and why them, who he is and the ask's dates, the most relevant proof, one or two more proofs, then the ask as the last paragraph (a 15-minute chat, intern spot for the term).
- **Lead with the proof closest to their work**, even if the draft didn't. Say so in the report when you reorder or add one.
- **Links**: `[text](url)` inside a paragraph. Link companies and projects he mentions, two or three at most. The resume and socials are already in the footer; don't repeat them.
- **`ps`**: optional, only for a real, specific observation ZK gave you.
- Leave `signoff` out (defaults to Thanks / Zain).

## Privacy

The repo is public and so is every letter in it. Keep letters to what he'd be fine with anyone reading: no private contact details for the recipient, no last names unless ZK asks, nothing about other companies he's talking to.
