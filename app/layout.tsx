import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap"
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sheeladvisory.ca"),
  title: "Sheel Advisory | Owner Representative Services BC",
  description:
    "Expert owner representative services for municipalities, regional districts, school districts, and non-profits. Reliable promising project and risk management strategies.",
  keywords:
    "project management, risk management, owner representative, municipalities, public sector consulting",
  openGraph: {
    title: "Sheel Advisory Services",
    description: "Owner Representative Services for BC Public Sector",
    url: "https://sheeladvisory.ca",
  },
  twitter: {
    card: "summary",
    title: "Sheel Advisory Services",
    description: "Owner Representative Services for BC Public Sector",
  },
  verification: {
    google: "Eot1am3dltuYzgyTVjIKjNEZbnansbUJvRW5-SMYTHw",
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${urbanist.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
