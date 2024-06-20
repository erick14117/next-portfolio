
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#222831]">
      <link rel="icon" href="/images/favicon.ico" />
      <title>SuperNova</title>
         <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
