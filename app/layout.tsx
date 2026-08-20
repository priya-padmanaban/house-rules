import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "House Rules — Found a town",
  description: "Decide what is normal. See what kind of town moves in.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
