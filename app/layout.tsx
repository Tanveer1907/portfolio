import type { Metadata } from "next";
import { fontDisplay, fontBody, fontAnnotation, fontMono, fontScript } from "@/styles/fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "The Build Log — An Engineer's Journal",
  description:
    "An interactive engineering journal documenting how a software engineer thinks, learns, and builds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontAnnotation.variable} ${fontMono.variable} ${fontScript.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
