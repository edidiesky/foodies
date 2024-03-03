// layout.tsx
import { Metadata } from 'next';
import './globals.css';
import { Montserrat, Karla } from 'next/font/google'

export const karla = Karla({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-karla',

})
export const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mont',
})


export const metadata: Metadata = {
  title: 'True Origin Foods',
  description: 'Series of thought I share on web development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // console.log(roboto.className)
  return (
    <>
      <body className={`${karla.variable} ${montserrat.variable} font-sans`}>
        {children}
      </body>
    </>
  );
}
