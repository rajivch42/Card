import type { Metadata } from "next";
import "./globals.css";
import { invitationConfig } from "@/config/invitation";

const { couple, city, state } = invitationConfig;
const groomFirst = couple.groom.name.en.split(" ")[0]; // Vipul
const brideFirst = couple.bride.name.en.split(" ")[0]; // Sejal
const location = `${city.en} • ${state.en}`;

const shareTitle = `${groomFirst} & ${brideFirst} | 11 December 2026 | ${location}`;
const shareDescription = `You're invited to celebrate the wedding of ${groomFirst} & ${brideFirst} on 11 December 2026 at ${location}. View the complete invitation, explore the wedding events, and RSVP on our website.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://card-omega-amber.vercel.app"),
  title: shareTitle,
  description: shareDescription,
  applicationName: `${groomFirst} & ${brideFirst} Wedding`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: shareTitle,
    description: shareDescription,
    url: "https://card-omega-amber.vercel.app",
    siteName: `${groomFirst} & ${brideFirst} Wedding Invitation`,
    type: "website",
    locale: "en_US",
    alternateLocale: "hi_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Montserrat:wght@300;400;500;600;700&family=Noto+Serif+Devanagari:wght@400;500;600;700;800&family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600&family=Rozha+One&family=Tiro+Devanagari+Hindi:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-jali-pattern min-h-screen text-[#2A1A1A] antialiased selection:bg-[#C9A24B] selection:text-white">
        {children}
      </body>
    </html>
  );
}
