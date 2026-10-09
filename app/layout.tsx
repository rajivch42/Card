import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wedding-invitation-vipul-sejal.vercel.app"),
  title: "विपुल संग सेजल — पावन परिणय सूत्र (11 दिसंबर 2026)",
  description: "विपुल चौरसिया एवं सेजल चौरसिया के पावन विवाह समारोह का स्नेह निमंत्रण — पट्टी, प्रतापगढ़ (उत्तर प्रदेश)",
  openGraph: {
    title: "विपुल संग सेजल — शुभ विवाह निमंत्रण पत्र",
    description: "11 दिसंबर 2026 | पट्टी, प्रतापगढ़, उत्तर प्रदेश",
    images: [
      {
        url: "/images/radha_krishna.jpg",
        width: 1200,
        height: 1200,
        alt: "विपुल एवं सेजल शुभ विवाह",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" suppressHydrationWarning>
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
