
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <main className="flex  flex-col min-h-screen bg-[#222831] dark:bg-[#EFEFEF]">
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
