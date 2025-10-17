import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AffiliationsStrip from '@/components/ui/affiliations-strip';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import HumanizedSection from '@/components/HumanizedSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GoogleReviewsSection from '@/components/GoogleReviewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <AffiliationsStrip />
        <SpecialtiesSection />
        <HumanizedSection />
        <TestimonialsSection />
        <GoogleReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
