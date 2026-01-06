import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden bg-vibe-black text-vibe-white">
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body> 
    </html>
  );
}
