import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://codenest.dev"),
  title: "CodeNest | Innovate. Build. Scale.",
  description:
    "Enterprise-grade software solutions, digital infrastructure, AI-driven automation, and premium systems custom-engineered for modern businesses.",
  keywords: [
    "CodeNest",
    "Software Engineering Agency",
    "Enterprise Digital Systems",
    "Custom Software Development",
    "AI Systems Design",
    "Web Application Development",
    "Cloud Architecture",
    "Kubernetes Microservices",
  ],
  authors: [{ name: "CodeNest Engineering Team" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "CodeNest | Innovate. Build. Scale.",
    description:
      "Enterprise-grade software solutions, digital infrastructure, AI-driven automation, and premium systems custom-engineered for modern businesses.",
    url: "https://codenest.dev",
    siteName: "CodeNest",
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: "CodeNest Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeNest | Innovate. Build. Scale.",
    description:
      "Enterprise-grade software solutions, digital infrastructure, AI-driven automation, and premium systems custom-engineered for modern businesses.",
    images: ["/icon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="font-sans bg-black text-gray-100 antialiased selection:bg-[#b8860b]/30 selection:text-[#d4af37]">
        <Navbar />
        <main className="min-h-screen pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
