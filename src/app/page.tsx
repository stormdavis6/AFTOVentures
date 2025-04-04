import Navbar from './components/navbar';
import HeroSection from "./components/HeroSection";
import AppList from "./components/AppList";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
      <div id="home">
        <Navbar />
        <HeroSection />
        <AppList />
        <AboutSection />
        <ContactSection />
      </div>
  );
}
