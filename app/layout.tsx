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
      </head>
      <body className="bg-jali-pattern min-h-screen text-[#2A1A1A] antialiased selection:bg-[#C9A24B] selection:text-white">
        {children}
      </body>
    </html>
  );
}
