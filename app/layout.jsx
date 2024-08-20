import { Montserrat } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollUp from "@/components/ScrollUp";
import ScrollProgress from "@/components/ScrollProgress";



const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Mstack Solutions",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <Header/>
        <Navbar/>
        <ScrollProgress/>
        {children}
        <Footer/>
        <ScrollUp/>
        </body>
    </html>
  );
}
