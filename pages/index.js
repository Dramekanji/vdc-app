import Head from "next/head";
import Hero from "@/components/Hero";
import Navtab from "@/components/Navtab";
import HomeCards from "@/components/HomeCards";
import HomeTiles from "@/components/HomeTiles";
import BottomBanner from "@/components/BottomBanner";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  return (
    <div>
      <Head>
        <title>VDC Telecom</title>
        <meta name="description" content="Generated by kanjī."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Hero /> */}
      <HeroCarousel />
      <Navtab />
      <HomeCards />
      <HomeTiles />
      <BottomBanner />
    </div>
  );
}
