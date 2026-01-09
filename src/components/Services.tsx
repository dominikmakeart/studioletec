import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Video, Clock, Users, Star, MapPin, Lightbulb } from "lucide-react";
import kurzySviceni from "@/assets/kurzy-sviceni.jpg";
const photographyService = "/lovable-uploads/80162f68-7352-4cf9-b794-ae4c9aadaed3.png";
const videographyService = "/lovable-uploads/31e97124-da28-4dbb-a971-dee9ee58f4b5.png";

const Services = () => {
  const services = [
    {
      title: "Fotografické studio",
      description: "Fotografické studio s osvětlovacím vybavením a pozadími.",
      image: photographyService,
      icon: Camera,
      features: [
        "Profesionální osvětlení",
        "Více možností pozadí", 
        "Rekvizity a doplňky"
      ],
      price: "Od 833 Kč/hodina",
      link: "https://studio-letec.reservio.com"
    },
    {
      title: "Video produkce & Fotografové", 
      description: "Video produkce a služby zkušených fotografů na míru vašim potřebám.",
      image: videographyService,
      icon: Video,
      features: [
        "Video produkce",
        "Zkušení fotografové",
        "Focení na míru",
        "Komplexní služby"
      ],
      price: "Cena dle dohody",
      link: "https://ndproduction.art/"
    },
    {
      title: "Kurzy svícení",
      description: "Naučte se techniky osvětlování pod vedením zkušených lektorů.",
      image: kurzySviceni,
      icon: Lightbulb,
      features: [
        "Základy i pokročilé techniky",
        "Praktické workshopy",
        "Malé skupiny",
        "Certifikát o absolvování"
      ],
      price: "Od 4 500 Kč",
      link: "https://www.studioletec.cz/kurz-pro-kameramany--sviceni-postavy-a-sceny/",
      buttonText: "Dozvědět se více"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Flexibilní hodiny",
      description: "Otevřeno 7 dní v týdnu s flexibilními rezervačními časy"
    },
    {
      icon: Users,
      title: "Týmová podpora", 
      description: "Technická asistence a pomoc s nastavením v ceně"
    },
    {
      icon: Star,
      title: "Vysoká kvalita",
      description: "Špičkové vybavení a dokonalý prostor studia"
    },
    {
      icon: MapPin,
      title: "Skvělá lokalita",
      description: "Snadno dostupné studio v srdci města"
    }
  ];

  return (
    <section id="services" className="py-20 bg-studio-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Naše <span className="text-studio-gold">služby</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prostory studia navržené pro fotografy a videografy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-500 border-0 bg-white">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    index === 1 ? 'object-center' : 'object-cover'
                  }`}
                  style={index === 1 ? { objectPosition: 'center 30%' } : {}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-studio-gold rounded-full p-3">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-studio-gold rounded-full"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-xl font-bold text-studio-gold whitespace-nowrap">{service.price}</span>
                  <Button 
                    className="bg-studio-gold hover:bg-studio-gold/90 text-white w-full"
                    onClick={() => {
                      if (service.link.startsWith('#')) {
                        document.querySelector(service.link)?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.open(service.link, '_blank');
                      }
                    }}
                  >
                    {service.buttonText || (service.link.startsWith('#') ? 'Kontaktujte nás' : 'Rezervovat')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-studio-gold transition-colors duration-300 shadow-lg">
                <feature.icon className="h-8 w-8 text-studio-gold group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;