import Navbar from "../components/navbar";
import HeroSection from "../components/herosection";
import MissionSection from "../components/missionsection";
import AboutSection from "../components/aboutsection";
import MenuSection from "../components/menusection";
import NewsSection from "../components/newssection";
import GallerySection from "../components/gallerysection";
import PartnerSection from "../components/partnersection";
import ReservationSection from "../components/reservationsection";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection></HeroSection>
        <AboutSection />
        <MissionSection />
        <MenuSection />
        <GallerySection />
        <NewsSection />
        <PartnerSection />
        <ReservationSection />
      </main>
      <Footer />
    </div>
  );
}
