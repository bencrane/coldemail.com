import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ColdEmail.com - Coming Soon",
  description: "The comprehensive directory for cold email tools and software. Launching soon.",
  metadataBase: new URL("https://coldemail.com"),
  alternates: {
    canonical: "https://coldemail.com",
  },
  openGraph: {
    title: "ColdEmail.com - Coming Soon",
    description: "The comprehensive directory for cold email tools and software. Launching soon.",
    url: "https://coldemail.com",
    siteName: "ColdEmail.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ColdEmail.com - Coming Soon",
    description: "The comprehensive directory for cold email tools and software. Launching soon.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/icon", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script defer data-domain="coldemail.com" src="https://plausible.io/js/script.js"></script>
      </head>
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
