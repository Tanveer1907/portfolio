import type { Metadata } from "next";
import { fontPlayfair, fontInter, fontGeist, fontMono } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanveer Singh — Portfolio",
  description:
    "Software developer passionate about building scalable systems and intuitive experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontPlayfair.variable} ${fontInter.variable} ${fontGeist.variable} ${fontMono.variable} dark scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-[#0A0A09] text-[#e6e2df] antialiased selection:bg-[#f5eee0] selection:text-[#0A0A09]">
        {children}
      </body>
    </html>
  );
}

