# PRD: Wedding Invitation Website (Uttar Pradesh)

## 1. Summary
A single-page, mobile-first digital wedding invitation for a wedding in Uttar Pradesh. Guests unlock it with a VIP key, enjoy a themed opening animation, then scroll through a family blessing, a scratch-to-reveal Save the Date, a swipeable set of ceremony cards, venue and travel details, RSVP, and a closing screen. Petals, soft music and elegant script typography run throughout.

All personal content (names, family, dates, venues, images, theme, language text) lives in one config file, so the site can be reused by any couple.

## 2. Goals
- Keep the look and flow of the reference invitation: cream, terracotta, gold and burgundy, script headings, floral hero, falling petals.
- Localise for Uttar Pradesh: UP rituals and event names, Awadhi, Kashi, Mughal-garden or Braj visual themes, Hindi plus English text, illustrations of UP venues.
- Feel premium through tasteful animation: opening sequences, text reveals, a carousel, parallax, per-event micro-animations.
- Let the couple change names, dates, venues, theme and artwork without touching component code.
- Load fast on mid-range phones, since most guests open it from WhatsApp.

## 3. Non-goals
- A full wedding-planning tool (seating, gifts, vendors).
- Real security. The VIP key is a guest-experience gate.

## 4. Users
| User | Need |
|---|---|
| Guest on a phone, arriving from a WhatsApp link | See what, when and where; get directions; RSVP; read in Hindi or English |
| Elder relatives | Large readable text, simple controls, Hindi option |
| Couple and family | Edit content easily; see responses |

## 5. Page flow

| # | Section | Content | Notes and upgrades |
|---|---|---|---|
| 0 | VIP Key gate | "Exclusive Invitation", "Welcome", key input, "Open Invitation", error text | Optional per-guest keys for a personal greeting; the click unlocks audio; language toggle EN / हिंदी |
| 1 | Opening animation | Theme-specific (doors, diya, scroll, arch gate, peacock fan) | 2–4 seconds, skippable |
| 2 | Blessing card (hero) | Floral background; arched white card with gold corner brackets; Ganesha icon; Sanskrit shloka; blessing line; groom name; his parents and grandparents; "&"; bride name; her parents and grandparents | Optional family-hosted line ("The {{FAMILY}} request the pleasure of your presence"); staggered text reveal; name write-in |
| 3 | Monogram and date strip | Couple monogram and a date block (month, large day, year) | Borrowed from the sample cards |
| 4 | Save the Date | "Reveal Our Big Day", three scratch hearts | Tap fallback; confetti; then a countdown |
| 5 | Sacred Ceremonies | One card per enabled event (Mehendi, Haldi, Sangeet, Tilak, Baraat, Wedding, Reception, and so on), each with date, time, themed illustration, venue card, Maps button | Swipeable carousel on mobile; add-to-calendar |
| 6 | Venue and travel | Hand-painted venue scene, address in {{CITY}}, Uttar Pradesh, nearest railway station and airport, parking, contact numbers | New section; helpful for out-of-town guests |
| 7 | Dress code and notes | Optional colour suggestions per event | Optional |
| 8 | RSVP | Name, number of guests, events attending, message | Optional; stored in a sheet or database |
| 9 | Closing | Burgundy screen, names in gold script, heart divider, thank-you line, optional credit | Names appear letter by letter |

Persistent on every section: a falling petal layer (shape and colour set by theme) and a floating mute button.

## 6. Content model (placeholders)
- `theme`: awadhi | kashi | mughal | braj | scroll
- `language`: default `en`, with `hi` supported
- `couple`: groom, bride, monogram
- `family`: hosts line, parents, grandparents for each side
- `blessing`: shloka, line (both languages)
- `events[]`: name, enabled, date, time, venueName, city (in Uttar Pradesh), mapsUrl, cardImage, theme overrides
- `saveTheDate`: three reveal values and countdown target
- `travel`: station, airport, parking, contacts
- `rsvp`: enabled, endpoint, deadline
- `music`: file
- `gate.keys[]`
- `footer.credit`

## 7. Functional requirements
1. Gate accepts the right key, rejects wrong keys with a clear message, and remembers the unlock for the session.
2. Music starts only after a user gesture; a mute toggle is always visible; state is remembered.
3. Scratch hearts work with mouse and touch and complete automatically at about 60% cleared; a tap fallback exists.
4. Each event card shows date, name, artwork, venue and a working Maps link.
5. Language switch changes all visible text without reloading.
6. Layout works from 320px wide to desktop; the main card stays centred and narrow on large screens.
7. RSVP submissions are validated and confirmed on screen.
8. WhatsApp share preview shows the couple's names, date and city.

## 8. Non-functional requirements
- Largest content paint under 2.5 s on 4G; images lazy-loaded in modern formats.
- Respect `prefers-reduced-motion`.
- Contrast meets WCAG AA; all controls labelled; pinch-zoom allowed.
- Hindi fonts load without layout jumps.

## 9. Improvements over the original
- Zoom allowed, labelled mute button, reduced-motion support.
- Added: opening animation, countdown, RSVP, add-to-calendar, travel and venue section, language toggle, theme system.
- Removed: the third-party credit line.
- Added per-event artwork and micro-animations instead of one generic style.

## 10. Open items to confirm
- Which city in Uttar Pradesh, to pick the theme and venue artwork.
- Which events are happening, with dates, times and venues.
- What the three hearts should reveal (assumed: day, month, year).
- Whether the original had extra sections not visible in the screenshots.
- Music track and licence.
