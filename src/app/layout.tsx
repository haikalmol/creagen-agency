import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creagen | Elite Tech Agency",
  description: "We don't just build apps. We build intelligent systems. AI-driven workflows, custom web & mobile apps, and automated powerhouses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
