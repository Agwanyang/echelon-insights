import Analytics from "./analytics";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Principles from "./components/Principles";
import BuildSection from "./components/BuildSection";
import MeasureSection from "./components/MeasureSection";
import WorkSection from "./components/WorkSection";
import { company } from "./content";
import { SITE_URL } from "./site";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/company-mark.svg`,
    email: company.email,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.name,
    url: `${SITE_URL}/`,
    description: company.tagline,
  },
];

export default function App() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Analytics />
      <Navbar />
      <main id="top">
        <Hero />
        <About />
        <Principles />
        <BuildSection />
        <MeasureSection />
        <WorkSection />
      </main>
    </>
  );
}