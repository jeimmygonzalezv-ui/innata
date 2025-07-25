import { Header } from '@/components/header';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { AgendaSection } from '@/components/sections/agenda';
import { SpeakersSection } from '@/components/sections/speakers';
import { MasterclassSection } from '@/components/sections/masterclass';
import { PricingSection } from '@/components/sections/pricing';
import { SponsorsSection } from '@/components/sections/sponsors';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/footer';
import { StickyButton } from '@/components/ui/sticky-button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <AgendaSection />
        <SpeakersSection />
        <MasterclassSection />
        <PricingSection />
        <SponsorsSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyButton />
    </div>
  );
}
