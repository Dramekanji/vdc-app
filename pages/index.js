import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import PricingPlans from "@/components/PricingPlans";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div>
      <Head>
        <title>VDC Telecom - Internet Haut Débit, IPTV & Téléphonie à Conakry</title>
        <meta
          name="description"
          content="VDC Telecom offre des services Internet fibre optique ultra-rapide, IPTV premium et téléphonie mobile à Conakry, Guinée. Plans à partir de 250,000 GNF/mois."
        />
        <meta name="keywords" content="Internet Conakry, Fibre optique Guinée, IPTV Conakry, VDC Telecom, Internet haut débit Guinée" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="VDC Telecom - Leader Internet en Guinée" />
        <meta property="og:description" content="Internet ultra-rapide, IPTV et téléphonie pour particuliers et entreprises" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vdctelecom.gn" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://vdctelecom.gn" />
      </Head>

      <main>
        <HeroSection />
        <Features />
        <PricingPlans />
        <Testimonials />
        <FAQ />
      </main>
    </div>
  );
}
