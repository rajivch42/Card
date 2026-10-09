# Build Phases

## Phase 0: Decisions and content (1–2 days)
- Choose the city in Uttar Pradesh and the theme (see `themes.md`).
- Collect names, parents, grandparents, the enabled event list with dates, times, venues and Maps links.
- Write the blessing line and any short text in both English and Hindi; have a family member proofread the Hindi.
- Decide the music track and confirm you can use it.

**Done when:** the config has real text for every placeholder.

## Phase 1: Artwork (3–7 days, can run alongside Phase 2)
- Commission or generate original artwork from the image briefs: hero background, venue painting, couple illustration, event cards, ornament SVGs, monogram, Open Graph image.
- Export to WebP/AVIF at the sizes in `themes.md`.

**Done when:** every image listed in the config exists and looks right on a phone.

## Phase 2: Foundation (1 day)
- Next.js project, Tailwind, fonts, design tokens, theme files.
- Shared pieces: `Reveal`, `PetalLayer`, `MuteButton`, `LangToggle`.
- Typed bilingual config and section order.

**Done when:** a blank page shows the chosen theme's colors, fonts, petals and mute button.

## Phase 3: Gate, opening and hero (2 days)
- Gate and `/api/unlock`.
- Theme opening animation (skippable).
- Hero blessing card and date block with staggered reveals and name write-in.

**Done when:** a guest can unlock, watch the opening, and read the hero in both languages.

## Phase 4: Save the Date (1–2 days)
- Scratch hearts, tap fallback, confetti, countdown.

**Done when:** it works on a real phone and the countdown is correct.

## Phase 5: Ceremonies (2 days)
- Event card component and carousel.
- Per-event micro-animations (Lottie or CSS).
- Venue and Maps buttons, add-to-calendar.

**Done when:** all enabled events display, swipe smoothly and show correct details.

## Phase 6: Venue, travel and RSVP (1–2 days)
- Venue and travel section with station, airport, parking and contacts.
- RSVP form and storage.

**Done when:** a test RSVP appears in the sheet or database.

## Phase 7: Closing and polish (1 day)
- Closing screen, parallax tuning, timing pass, reduced-motion behaviour.

**Done when:** the whole scroll feels continuous with no jarring jumps.

## Phase 8: QA and launch (1 day)
- Test on a small Android phone, iPhone Safari, desktop Chrome and Firefox.
- Check Lighthouse, image weights, audio on first tap, Hindi text rendering, and the WhatsApp preview.
- Proofread names, dates and times with two family members.
- Deploy to Vercel, set environment keys, connect a domain if wanted.
- Send a test link to a few people before the main release.

## Risks
| Risk | Mitigation |
|---|---|
| Browsers block autoplay audio | Start from the gate click; keep the toggle visible |
| Heavy artwork and Lottie slow old phones | Compress, lazy-load, set size budgets, reduce particles |
| Hindi text errors | Proofread by a native reader before launch |
| Scratch canvas slow on low-end devices | Lower resolution, tap fallback |
| Using someone else's artwork | Commission or generate original images only |
| Dates or venue change | Everything lives in one config; redeploy takes minutes |
