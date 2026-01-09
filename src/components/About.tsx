import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, MapPin, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, number: "8+", label: "Let zkušeností" },
    { icon: Users, number: "100+", label: "Spokojených klientů" },
    { icon: MapPin, number: "1", label: "Lokalita studia" },
    { icon: Clock, number: "24/7", label: "Dostupná podpora" }
  ];

  return (
    <section id="about" className="py-20 bg-studio-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              O <span className="text-studio-gold">Studiu Letec</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Studio Letec je zázemí pro kreativní lidi, kteří k práci potřebují funkční prostor a pohodu. Ať už fotíte portréty, nebo natáčíte video, u nás najdete vybavení a atmosféru, která vám pomůže dotáhnout váš projekt přesně do takové podoby, jakou si představujete.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-studio-gold rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground">
                  <strong>Vše pro vaši tvorbu:</strong> Máme pro vás připravená záblesková i stálá světla, různé barvy pozadí a výběr rekvizit. Vše je vám plně k dispozici, aby výsledek odpovídal vašim představám.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-studio-gold rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground">
                  <strong>100 m² prostoru k tvoření:</strong> Ateliér nabízí sto metrů čtverečních, které si můžete snadno přizpůsobit. Je to dost místa jak pro komorní portréty, tak pro větší produkce.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-studio-gold rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground">
                  <strong>Podpora:</strong> Pokud si nebudete vědět rady s technikou nebo budete potřebovat s čímkoliv pomoct, jsme tu pro vás po celou dobu pronájmu.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <stat.icon className="h-8 w-8 text-studio-gold mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Cards */}
          <div className="space-y-6">
            <Card className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Naše mise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Poskytovat fotografům a videografům přístup k prostoram studia a vybavení, 
                  umožnit jim vytvářet výjimečný obsah bez nákladů na vlastní studio.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-studio-gold to-accent shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Proč si vybrat nás?</h3>
                <p className="text-white/90 leading-relaxed">
                  Protože věříme, že pronájem ateliéru nemá být věda. Nabízíme fajn ceny, termíny, které se vám přizpůsobí, a vybavení, se kterým odvedete skvělou práci. Prostě zázemí pro všechny, co rádi tvoří.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Náš závazek</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Chceme, aby pro vás byl pronájem studia radost, ne starost. Proto dbáme na čistotu a techniku v perfektním stavu. Jednáme na rovinu a děláme maximum pro to, abyste od nás odcházeli spokojení.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;