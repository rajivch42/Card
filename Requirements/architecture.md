# Architecture

## 1. Stack
| Concern | Choice | Why |
|---|---|---|
| Framework | Next.js (App Router), TypeScript | Easy on Vercel, image optimisation, route handlers |
| Styling | Tailwind CSS plus CSS variables | Fast iteration; themes via variables |
| Animation | Framer Motion (reveals), GSAP ScrollTrigger (parallax), Lottie (illustrated micro-animations) | Right tool for each job |
| Carousel | Embla Carousel | Light and touch-friendly |
| Petals and confetti | Canvas 2D | One draw loop, cheap |
| Scratch hearts | Canvas with `destination-out` erase and heart clip | Works with touch |
| Audio | HTML `<audio>` through a React context | Needs a user gesture |
| i18n | Simple dictionary (`en`, `hi`) in config | No heavy library needed |
| RSVP storage | Route handler writing to Google Sheets or a small database | Easy for family to read |
| Hosting | Vercel | Matches the reference |

## 2. Folder structure
```
/app
  layout.tsx             fonts, metadata, providers
  page.tsx               composes sections in order
  /api/unlock/route.ts   checks the VIP key, sets a cookie
  /api/rsvp/route.ts     validates and stores RSVPs
/components
  Gate.tsx  Opening.tsx  PetalLayer.tsx  MuteButton.tsx  LangToggle.tsx
  Hero.tsx  DateBlock.tsx  SaveTheDate.tsx  ScratchHeart.tsx  Countdown.tsx
  Ceremonies.tsx  EventCard.tsx  VenueTravel.tsx  Rsvp.tsx  Closing.tsx
  Reveal.tsx
/config
  invitation.ts          ALL content, in both languages
/themes
  awadhi.css  kashi.css  mughal.css  braj.css  scroll.css
  openings/              one opening animation component per theme
/public
  /images /lottie /audio /icons /ornaments
/styles
  globals.css            tokens and base styles
```

## 3. Theming
The root element carries `data-theme`. Each theme file redefines the CSS variables from `design.md`:

```css
:root[data-theme="kashi"] {
  --cream: #FFF4DC;
  --terracotta: #C8442F;
  --gold: #F5B82E;
  --burgundy: #1B1B3A;
  --petal-shape: "marigold";
}
```

Theme also picks: opening component, petal shape, ornament set (SVG), event card backgrounds, and fonts. Switching the `theme` config value changes the whole site.

## 4. Data flow
1. `config/invitation.ts` is the single source of content (typed, bilingual).
2. `page.tsx` renders: Gate, then Opening, PetalLayer, MuteButton, Hero, DateBlock, SaveTheDate, Ceremonies, VenueTravel, Rsvp, Closing.
3. Client state: `unlocked`, `lang`, `musicOn`, `heartsRevealed[3]`.
4. Events with `enabled: false` are skipped, so the carousel adapts to the number of events.

## 5. VIP key gate
- The client posts the key to `/api/unlock`; the server compares it with keys in an environment variable and sets a signed, short-lived cookie.
- If keys map to guests, the response includes the guest's display name for a greeting.
- This is a guest-experience gate, not strong security. Do not place private data behind it.

## 6. Audio
- The "Open Invitation" click calls `audio.play()`.
- Muted state persists in `localStorage`; audio pauses when the tab is hidden.
- Audio loads only after unlock.

## 7. Scratch heart
Each heart is a canvas painted with the theme colour and a "SCRATCH" label. Pointer events erase with a round brush; when about 60% is transparent, the rest fades and the heart is marked revealed. A tap or double-tap also reveals. After all three, confetti plays and the countdown mounts.

## 8. Carousel and scroll animation
- Embla with snap alignment and a dot indicator; autoplay pauses on touch.
- `Reveal` wraps elements with an intersection observer and Framer Motion variants, running once.
- Parallax uses transforms only, driven by one scroll listener or GSAP.
- Lottie files are lazy-loaded when their card nears the viewport.

## 9. Opening animations
One component per theme in `/themes/openings`, each receiving `onDone`. All are skippable and run once per session (flag in `sessionStorage`).

## 10. RSVP
- Form fields: name, guests, events, message.
- Route handler validates input, applies a basic rate limit, writes to the store, returns a friendly confirmation.
- Optional email or WhatsApp notification to the couple.

## 11. Performance
- Images through `next/image` in AVIF or WebP with fixed dimensions; hero background preloaded.
- Fonts through `next/font`, subset to Latin and Devanagari.
- Petal count reduced on low-power devices.
- Large illustrations split into layers only where parallax needs them.

## 12. Accessibility and SEO
- Zoom enabled; visible focus states; mute button has `aria-pressed`.
- Reduced motion turns parallax and long animations into simple fades.
- Open Graph image (names, date, city), title and description in the active language; `noindex` if the invite should stay private.
- Language attribute switches between `en` and `hi`.

## 13. Optional additions
- Add-to-calendar `.ics` per event.
- Guest open tracking, with the couple's consent.
- Photo gallery and a short love story.
