# Design Spec

> Colors and fonts are close estimates from screenshots. Confirm against the original or color-pick before launch. Theme-specific looks are in `themes.md`.

## 1. Mood
Warm, romantic, traditional Indian wedding with a regional Uttar Pradesh character. Soft cream pages, terracotta, gold and burgundy accents, arches and florals, script lettering, falling petals.

## 2. Default tokens (Awadhi Royal base, close to the reference)
| Token | Hex | Use |
|---|---|---|
| `--cream` | `#FDF8F4` | Page background |
| `--card` | `#FFFFFF` at 90% | Hero card, venue cards |
| `--terracotta` | `#B05F48` | Headings, scratch hearts, buttons, mute button |
| `--terracotta-dark` | `#9A4D38` | Hover and pressed |
| `--gold` | `#C39A4A` | Eyebrow labels, dividers, brackets, closing names |
| `--gold-light` | `#E6C97E` | Gradient highlights, petals |
| `--rose` | `#D9A0A0` | Petals |
| `--burgundy` | `#552733` | Closing background |
| `--ink` | `#3A2A2A` | Body text |
| `--muted` | `#8A6F68` | Italic secondary text |

Name gradient: `#8E4A33` to `#C39A4A`.

**Theme system:** each theme overrides these tokens through `[data-theme="..."]` on the root element (see `architecture.md`). Components never hard-code colors.

## 3. Typography
| Role | Look | Font |
|---|---|---|
| Couple names | Thin, formal script | Pinyon Script or Great Vibes |
| Section headings | Bold brush script | Kaushan Script or Yellowtail |
| Body, blessing, parents | Elegant serif, italic | Cormorant Garamond |
| Eyebrows, buttons, dates | Small caps, wide tracking | Jost or Montserrat, 11–13px, 0.25em |
| Date numeral (large) | Warm serif numeral | Playfair Display or Cormorant, 48–72px |
| Hindi text | Serif Devanagari | Tiro Devanagari Hindi or Noto Serif Devanagari |
| Sanskrit shloka | Tracked Devanagari in terracotta | Noto Serif Devanagari |

Hindi lines are 10–15% taller than English lines; set line height to at least 1.6.

## 4. Components

### 4.1 Persistent layers
- **Petal layer:** fixed, full screen, pointer-events none; shape and colors from the theme (rose petals, marigold, lotus, feathers).
- **Mute button:** fixed bottom-right, round, terracotta, speaker icon with state.
- **Language toggle:** small pill at top right (EN / हिंदी).

### 4.2 Gate
Centred panel on cream or blurred floral. Eyebrow "✦ Exclusive Invitation ✦", heading "Welcome", instruction, key input, "Open Invitation" button, inline error.

### 4.3 Hero blessing card
Arched top (not just rounded), white card, gold corner brackets, Ganesha icon, shloka, italic blessing, groom name (gradient script), parent lines, divider with gold ampersand, bride name, parent lines. Background: soft watercolor florals fading to cream.

### 4.4 Date block
Month in small caps above, large numeral in terracotta between two thin lines, year below, time and city in a smaller line.

### 4.5 Save the Date
Eyebrow, "Reveal Our Big Day" in brush script, muted hint, three terracotta scratch hearts.

### 4.6 Ceremonies
Heading with star divider. Per event: date line, event name in script, illustrated portrait card (rounded 24px, soft shadow), white venue card with "VIEW ON MAPS", gold divider.

### 4.7 Venue and travel
Hand-painted venue scene, address, station and airport lines with small icons, contact buttons (call and WhatsApp).

### 4.8 RSVP
Soft card with simple inputs, large touch targets, terracotta submit button, thank-you animation.

### 4.9 Closing
Burgundy section, gold script names, heart divider, thank-you line.

## 5. Animation plan

| Where | Animation | Notes |
|---|---|---|
| Opening (by theme) | Doors open, diya lights, scroll unrolls, arch gate zooms, or peacock fan opens | 2–4 s, skip button, plays once per session |
| Gate to site | Fade and scale out | 700–900 ms |
| Hero card | Items fade up in sequence, 120 ms stagger; names mask-reveal as if written | |
| Hero florals | Parallax at 0.3x scroll; garlands sway | Off for reduced motion |
| Corner brackets | Stroke draws in | SVG |
| Petals | Continuous fall with sway and rotation | Canvas; cap on low-end phones |
| Date block | Numeral counts up or flips in | On scroll into view |
| Save the Date heading | Words slide up from a mask | |
| Scratch hearts | Gentle pulse and shimmer; confetti on completion | Tap fallback |
| Countdown | Digits flip | Shown after reveal |
| Event carousel | Swipe, snap, centred card larger, dots; autoplay after idle | One card on mobile, three on desktop |
| Per-event card | Micro-animation from `themes.md` (henna vines, marigold shower, twinkling lights, flickering flame, floating lanterns) | CSS or Lottie |
| Seven-steps motif (wedding card) | Seven small lights light up one by one | Optional |
| Venue scene | Layered parallax and slow ripple on water | |
| Buttons | Soft glow and lift | |
| Closing | Names appear letter by letter; gold shimmer once | |

All motion honours `prefers-reduced-motion`.

## 6. Spacing and shape
- Base unit 8px; section padding 80–120px desktop, 56–72px mobile.
- Card radius 24–40px; arches for hero and event cards; buttons fully rounded.
- Soft warm shadows, `0 12px 40px rgba(90, 50, 40, 0.12)`.

## 7. Assets needed
See the image briefs in `themes.md`. Use original or licensed artwork only; the sample invitations' illustrations belong to their designers.
