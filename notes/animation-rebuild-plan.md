# Ball and robot rebuild

## Intent

Keep the quiet cream-and-rust portfolio and its word-based ball story. Replace the tiny stick robots with readable humanoid machines and an authored duel. Prepare a tested local result for the owner to commit and push.

## Implementation

1. Separate the page layout, ball simulation, and robot choreography.
2. Give the ball a single timeline for the email tilt and launch, repeatable entrance arcs, time-based throwing, pointer capture, keyboard controls, and complete interruption handling.
3. Draw substantial articulated humanoids. Animate planted feet, body weight, guard, block, duck, counter, stagger, and a finish with a helping hand. Use an independent clock and exact contact beats.
4. Provide restrained replay/stop controls and development-only seek/slow-motion controls. Respect reduced motion and hidden tabs.
5. Verify type checking and production build; exercise both sequences at desktop and phone sizes, including replay, interruption, dragging, resize, keyboard, and reduced motion.

## Acceptance

- Robots read as humanoids at their actual displayed size.
- Punches meet the opponent at the intended contact point; limbs keep their lengths and feet plant during strikes.
- A complete 8–12 second duel runs and can be dismissed/replayed.
- The ball reaches each word, launches with the email tilt, and settles.
- Flick speed accounts for time; holding then releasing drops the ball.
- Ball can be caught during its entrance. Resize/navigation/reduced-motion changes clear scripted state safely.
- Ordinary links, text selection, and mobile scrolling continue to work.
- Hidden animation sections do not receive focus; controls have keyboard labels.
- Build, type check, and live checks pass. No remote publish or commit is implied by “ready to push + commit.”

## Implementation delivered

- `App.tsx` now delegates animation to `PortfolioPlayground`; existing portfolio copy and section layout are retained.
- `components/animation/ball.ts`: bounded entrance variants, measured word targets, one email/ball timeline, 120 Hz free physics, settled-loop sleeping, and bounded visual effects.
- `components/animation/fight.ts`: solid humanoids, paired pose choreography, independent 11.8-second playback, planted strike feet, reachable limbs, contact effects, and a helping-hand ending.
- `components/animation/geometry.ts`: shared limb solver and time-based release velocity.
- Pointer capture allows catching the ball during the intro and dragging outside its original hit area. A stale motion sample drops it instead of launching it.
- Escape, navigation, resize, late font loading, and preference changes clear incompatible animation state. Reduced motion offers a static robot pose on intentional activation.
- Public replay/stop controls and a keyboard-operable ball; development-only animation studio at `?animation-debug=1`.
- Short screens reserve a lower stage while the robots are present. The ball is hidden during the duel.
- Regression tests, ignored screenshots/videos, README instructions, and a source-scoped TypeScript configuration.

## Verification

- Six animation-math tests cover fixed limb lengths across every sampled frame, grounded contact poses, clasp contact through the lift, event-rate-independent flicks, and hold-to-drop.
- All 19 browser checks pass: desktop (1440×900), phone (390×844), real pointer capture, mouse flicks, keyboard bounce/Escape, touch dragging, full duel completion, replay, catapult contact, resizing, navigation, and reduced motion.
- Visual review additionally covers 375×568 and production rendering. The production preview has no animation studio or development window hook even with the debug query string.
- Type checking and the production build pass. Existing Tailwind Play CDN usage remains; migrating styling dependencies is outside this animation change.

## Handoff

The local source and build are prepared for owner review, commit, and push. No remote commit, push, or deployment has been performed. Earlier unrelated working changes and notes are preserved.
