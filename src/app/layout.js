// app/layout.jsx

import "./globals.css";
import Header from "../components/Header";

import TopBar from "../components/TopBar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

       
       <Header />
      <TopBar />
      
        {/* All Pages */}
        {children}

       <Footer />
      </body>
    </html>
  );
}