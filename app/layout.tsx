import type { Metadata } from "next";
import { fontPlayfair, fontInter, fontGeist } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanveer Singh — Computer Science Student & Developer",
  description:
    "Personal engineering portfolio showcasing software projects, technical journey, and web development work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontPlayfair.variable} ${fontInter.variable} ${fontGeist.variable} scroll-smooth`}
    >
      <body className="bg-[#11110F] text-[#F1EDE3] antialiased selection:bg-[#C86B4A] selection:text-[#11110F]">
        {children}
      </body>
    </html>
  );
}
