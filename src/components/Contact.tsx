import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "Jméno je povinné"),
  lastName: z.string().min(1, "Příjmení je povinné"),
  email: z.string().email("Neplatný email"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1, "Zpráva je povinná"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.phone || null,
          service: data.service || null,
          message: data.message,
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Zpráva byla odeslána!",
        description: "Děkujeme za váš zájem. Ozveme se vám co nejdříve.",
      });

      form.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Chyba při odesílání",
        description: "Něco se pokazilo. Zkuste to prosím znovu.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Lokace",
      details: ["Sládkova 476/3", "Praha 7", "170 00"]
    },
    {
      icon: Phone,
      title: "Telefon",
      details: ["+420 734 816 896", "Dostupný 8:00 - 21:00"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@studioletec.cz"]
    },
    {
      icon: Clock,
      title: "Otevírací doba",
      details: ["Po-Ne: 0:00-23:59"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kontaktujte <span className="text-studio-gold">nás</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Jste připraveni rezervovat si studio? Máte otázky k našim službám? 
            Jsme tu, abychom vám pomohli realizovat vaši kreativní vizi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
            <Card className="border-0 bg-white shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Napište nám zprávu</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Jméno</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Jan"
                              className="mt-2 border-studio-warm-gray focus:border-studio-gold focus:ring-studio-gold"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Příjmení</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Novák"
                              className="mt-2 border-studio-warm-gray focus:border-studio-gold focus:ring-studio-gold"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="jan@priklad.cz"
                            className="mt-2 border-studio-warm-gray focus:border-studio-gold focus:ring-studio-gold"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Telefonní číslo</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="+420 123 456 789"
                            className="mt-2 border-studio-warm-gray focus:border-studio-gold focus:ring-studio-gold"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Požadovaná služba</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Fotografické studio, Video produkce, atd."
                            className="mt-2 border-studio-warm-gray focus:border-studio-gold focus:ring-studio-gold"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Zpráva</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Řekněte nám o vašem projektu a požadavcích..."
                            rows={5}
                            className="mt-2 border-studio-warm-gray focus:border-studio-gold focus:ring-studio-gold resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-studio-gold hover:bg-studio-gold/90 text-white font-semibold py-3"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Odesílání..." : "Odeslat zprávu"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">Kontaktní informace</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-studio-gold rounded-full p-3 flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="border-0 bg-gradient-to-br from-studio-cream to-studio-warm-gray shadow-lg">
              <CardContent className="p-8 text-center">
                <MapPin className="h-12 w-12 text-studio-gold mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">Najděte naše studio</h4>
                <p className="text-muted-foreground mb-4">
                  Nachází se v srdci kreativní čtvrti se snadným parkováním a přístupem městskou dopravou.
                </p>
                <Button 
                  variant="outline" 
                  className="border-studio-gold text-studio-gold hover:bg-studio-gold hover:text-white"
                  onClick={() => window.open('https://maps.google.com/maps?q=Sládkova+476/3,+Praha+7,+170+00', '_blank')}
                >
                  Zobrazit trasu
                </Button>
              </CardContent>
            </Card>

            {/* Quick Booking */}
            <Card className="border-0 bg-gradient-to-r from-studio-gold to-accent shadow-lg">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-semibold text-white mb-2">Připraveni rezervovat?</h4>
                <p className="text-white/90 mb-4">
                  Přeskočte formulář a zavolejte nám přímo pro okamžitou pomoc s rezervací.
                </p>
                <Button 
                  className="bg-white text-studio-gold hover:bg-white/90 font-semibold"
                  onClick={() => window.open('tel:+420734816896', '_self')}
                >
                  Zavolejte: +420 734 816 896
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;