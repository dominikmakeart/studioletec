import Navigation from "@/components/ui/navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StudioUpload from "@/components/StudioUpload";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <StudioUpload />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
