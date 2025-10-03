import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ColdEmail.com - Cold Email Tools & Resources",
  description: "Your comprehensive directory for cold email tools, software, and resources. Discover the best solutions for your outreach campaigns.",
  metadataBase: new URL("https://coldemail.com"),
  openGraph: {
    title: "ColdEmail.com - Cold Email Tools & Resources",
    description: "Your comprehensive directory for cold email tools, software, and resources. Discover the best solutions for your outreach campaigns.",
    url: "https://coldemail.com",
    siteName: "ColdEmail.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ColdEmail.com - Cold Email Tools & Resources",
    description: "Your comprehensive directory for cold email tools, software, and resources.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
