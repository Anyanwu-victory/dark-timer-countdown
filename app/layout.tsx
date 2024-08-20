import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Stars from '../public/images/bg-stars.svg';
import Nav from '@/app/components/Nav';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dark Countdown timer",
  description: "Generate your specialised timer designs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-t from-DarkdesaturatedBlue to-VeryDarkBlue">
        <Nav/>
        
        {children}
  
          
      </body>
    </html>
  );
}
