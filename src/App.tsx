import { AboutHuts } from '@/components/AboutHuts';
import { Amenities } from '@/components/Amenities';
import { AccessAndStay } from '@/components/AccessAndStay';
import { BookingCta } from '@/components/BookingCta';
import { ExploreAround } from '@/components/ExploreAround';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Footer } from '@/components/Footer';
import { GuestExperiences } from '@/components/GuestExperiences';
import { Hero } from '@/components/Hero';
import { HutSection } from '@/components/HutSection';
import { Navbar } from '@/components/Navbar';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-sand-100">
      <Navbar />
      <main>
        <Hero />
        <AboutHuts />
        <HutSection />
        <Amenities />
        <AccessAndStay />
        <ExploreAround />
        <GuestExperiences />
        <BookingCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
