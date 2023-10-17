import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Navtab from "@/components/Navtab";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />

      <Hero />
      <Navtab />
    </div>
  );
}
