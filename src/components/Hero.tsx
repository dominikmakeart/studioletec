import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Video } from "lucide-react";
const studioHeroUrl = "/lovable-uploads/624a3a2f-0252-4df8-9bc4-7b215c8787c1.png";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-right sm:bg-center bg-no-repeat" style={{
      backgroundImage: `url(${studioHeroUrl})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-center md:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-studio-gold/20 backdrop-blur-sm border border-studio-gold/30 rounded-full px-4 py-2 mb-8">
              <Camera className="h-4 w-4 text-studio-gold" />
              <span className="text-studio-gold font-medium">Pronájem fotografického studia</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Studio
              <span className="block text-studio-gold">Letec</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">Fotografické a videografické studio k pronájmu. Skvělé vybavení, perfektní osvětlení a kreativní atmosféra.</p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 mb-10 text-white/80">
              <div className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-studio-gold" />
                <span>Fotografické studio</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-studio-gold" />
                <span>Video produkce</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 bg-studio-gold rounded-full"></div>
                <span>Vybavení</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-studio-gold hover:bg-studio-gold/90 text-white font-semibold text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => window.open('https://studio-letec.reservio.com', '_blank')}>
                Rezervovat termín
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-studio-gold/50 text-studio-gold hover:bg-studio-gold hover:text-white backdrop-blur-sm font-semibold text-lg px-8 py-4 h-auto" onClick={() => window.open('https://calendar.google.com/calendar/embed?src=s90gqp6k5282is6nagn4iqduj0%40group.calendar.google.com&ctz=Europe%2FPrague', '_blank')}>
                Dostupné termíny
              </Button>
              <Button type="button" size="lg" variant="outline" className="border-studio-gold/50 text-studio-gold hover:bg-studio-gold hover:text-white backdrop-blur-sm font-semibold text-lg px-8 py-4 h-auto" onClick={e => {
              e.preventDefault();
              console.log('Gallery button clicked');
              const galleryElement = document.getElementById('gallery');
              console.log('Gallery element found:', galleryElement);
              if (galleryElement) {
                galleryElement.scrollIntoView({
                  behavior: 'smooth'
                });
                console.log('Scroll initiated');
              } else {
                console.error('Gallery element not found');
              }
            }}>
                Prohlédnout galerii
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;