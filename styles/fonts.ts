import { EB_Garamond, Source_Serif_4, Bricolage_Grotesque, JetBrains_Mono, Caveat } from "next/font/google";

export const fontDisplay = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const fontBody = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const fontAnnotation = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-annotation",
  display: "swap",
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const fontScript = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});
