import { Inter, Nunito } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ['500'],
  display: 'swap',
  variable: "--font-inter",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ['400'],
  display: 'swap',
  variable: "--font-nunito",
});
const nunitoBold = Nunito({
  subsets: ["latin"],
  weight: ['700'],
  display: 'swap',
  variable: "--font-nunito",
});
export { inter, nunito, nunitoBold };
