import { Playfair_Display, Inter, Geist } from "next/font/google";

export const fontPlayfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const fontGeist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

