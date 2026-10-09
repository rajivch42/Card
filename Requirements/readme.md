# Wedding Invitation Website (Uttar Pradesh)

A mobile-first, bilingual (English and Hindi) digital wedding invitation with a VIP-key entry, a themed opening animation, a blessing card, scratch-to-reveal Save the Date, a swipeable ceremonies carousel, venue and travel details, RSVP and a closing screen. Falling petals and optional music run throughout.

## Quick start
```bash
npm install
cp .env.example .env.local   # set VIP_KEYS and RSVP settings
npm run dev                  # http://localhost:3000
```

## Make it yours
Everything personal lives in `config/invitation.ts`:

```ts
export const invitation = {
  theme: "awadhi", // awadhi | kashi | mughal | braj | scroll
  defaultLang: "en",
  state: "Uttar Pradesh",
  city: "{{CITY}}",

  couple: { groom: "{{GROOM_NAME}}", bride: "{{BRIDE_NAME}}", monogram: "{{INITIALS}}" },

  family: {
    hostsLine: { en: "The {{HOST_FAMILY}} request the pleasure of your gracious presence at the wedding of", hi: "{{HINDI_TEXT}}" },
    groom: { parents: "{{GROOM_PARENTS}}", grandparents: "{{GROOM_GRANDPARENTS}}" },
    bride: { parents: "{{BRIDE_PARENTS}}", grandparents: "{{BRIDE_GRANDPARENTS}}" },
  },

  blessing: {
    shloka: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा",
    line: { en: "With the blessings of the Almighty & our respected elders, we joyfully request your presence at the wedding celebration of", hi: "{{HINDI_TEXT}}" },
  },

  events: [
    { key: "mehendi",   enabled: true,  name: { en: "Mehendi",   hi: "मेहंदी" },   date: "{{DATE}}", time: "{{TIME}}", venue: "{{VENUE}}", mapsUrl: "{{MAPS}}", image: "/images/mehendi.webp" },
    { key: "haldi",     enabled: true,  name: { en: "Haldi",     hi: "हल्दी" },    date: "{{DATE}}", time: "{{TIME}}", venue: "{{VENUE}}", mapsUrl: "{{MAPS}}", image: "/images/haldi.webp" },
    { key: "sangeet",   enabled: true,  name: { en: "Sangeet",   hi: "संगीत" },    date: "{{DATE}}", time: "{{TIME}}", venue: "{{VENUE}}", mapsUrl: "{{MAPS}}", image: "/images/sangeet.webp" },
    { key: "wedding",   enabled: true,  name: { en: "Wedding",   hi: "विवाह" },    date: "{{DATE}}", time: "{{TIME}}", venue: "{{VENUE}}", mapsUrl: "{{MAPS}}", image: "/images/wedding.webp" },
    { key: "reception", enabled: true,  name: { en: "Reception", hi: "प्रीति भोज" }, date: "{{DATE}}", time: "{{TIME}}", venue: "{{VENUE}}", mapsUrl: "{{MAPS}}", image: "/images/reception.webp" },
    // add or hide: tilak, baraat, vidaai ...
  ],

  saveTheDate: { reveals: ["{{DAY}}", "{{MONTH}}", "{{YEAR}}"], countdownTo: "{{ISO_DATETIME}}" },
  travel: { station: "{{STATION}}", airport: "{{AIRPORT}}", parking: "{{PARKING}}", contacts: ["{{PHONE_1}}", "{{PHONE_2}}"] },
  rsvp: { enabled: true, deadline: "{{DATE}}" },
  music: "/audio/theme.mp3",
  footer: { credit: "{{YOUR_CREDIT_OR_EMPTY}}" },
};
```

Set guest keys in `.env.local`:
```
VIP_KEYS=KEY1,KEY2,KEY3
```

## Themes
Change `theme` to switch the whole look: **awadhi** (Lucknow), **kashi** (Varanasi, Prayagraj, Ayodhya), **mughal** (Agra, Meerut), **braj** (Mathura, Vrindavan), **scroll** (monogram-led). Details, colors and image briefs are in `themes.md`.

## Sections (in order)
1. VIP Key gate
2. Themed opening animation
3. Blessing card and date block
4. Save the Date (scratch hearts, then countdown)
5. Sacred Ceremonies (carousel)
6. Venue and travel
7. RSVP
8. Closing screen

## Tech
Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lottie, Embla Carousel, canvas for petals and scratch hearts. Deployed on Vercel.

## Deploy
1. Push to GitHub and import the repo in Vercel.
2. Add `VIP_KEYS` and RSVP settings as environment variables.
3. Deploy, then test the gate, music, scratch hearts, Hindi text and RSVP on a real phone.

## Notes
- The VIP key keeps casual visitors out; it is not strong security.
- Music starts only after the guest taps "Open Invitation".
- Use only artwork, fonts and music you have the right to use. The sample invitations' illustrations are the original designers' work, so create or commission your own.

## Docs
- `prd.md`: what the site does and why
- `design.md`: colors, fonts, components, animation plan
- `themes.md`: five Uttar Pradesh themes and image briefs
- `architecture.md`: structure and technical decisions
- `phases.md`: build order and checks
