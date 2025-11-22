// RootLayout.tsx (Server Component)
import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dicky Darmawan",
  description: "Portfolio new using Next.JS",
};

// Server component that wraps the client layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />
      </head>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
