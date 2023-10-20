import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Navtab from "@/components/Navtab";
import HomeCards from "@/components/HomeCards";
import HomeTiles from "@/components/HomeTiles";
import BottomBanner from "@/components/BottomBanner";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />

      <Hero />
      <Navtab />
      <HomeCards />
      <HomeTiles />
      <BottomBanner />
    </div>
  );
}
