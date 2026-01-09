import { Camera } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-studio-charcoal text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Camera className="h-8 w-8 text-studio-gold" />
              <h3 className="text-2xl font-bold">
                Studio <span className="text-studio-gold">Letec</span>
              </h3>
            </div>
            <p className="text-white/80 max-w-md leading-relaxed">
              Pronájem fotografického a videografického studia. 
              Realizujeme vaši kreativní vizi s špičkovým vybavením 
              a flexibilními možnostmi rezervace.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-studio-gold mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-studio-gold transition-colors">Domů</a></li>
              <li><a href="#services" className="text-white/80 hover:text-studio-gold transition-colors">Služby</a></li>
              <li><a href="#gallery" className="text-white/80 hover:text-studio-gold transition-colors">Galerie</a></li>
              <li><a href="#about" className="text-white/80 hover:text-studio-gold transition-colors">O nás</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-studio-gold transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-studio-gold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-white/80">
              <li>Sládkova 376/3</li>
              <li>Praha 7, 170 00</li>
              <li className="pt-2">
                <a href="tel:+420734816896" className="hover:text-studio-gold transition-colors">
                  +420 734 816 896
                </a>
              </li>
              <li>
                <a href="mailto:info@studioletec.cz" className="hover:text-studio-gold transition-colors">
                  info@studioletec.cz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} Studio Letec. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;