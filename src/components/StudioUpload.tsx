import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const StudioUpload = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast({
        title: "Chyba",
        description: "Vyplňte prosím jméno a email",
        variant: "destructive"
      });
      return;
    }

    if (!files || files.length === 0) {
      toast({
        title: "Chyba",
        description: "Vyberte prosím alespoň jednu fotografii",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      // Upload each file and create DB record
      for (const file of Array.from(files)) {
        const path = `submissions/${crypto.randomUUID()}-${file.name}`;
        const { data: uploadData, error: uploadError } = await supabase
          .storage
          .from("studio-photos")
          .upload(path, file, {
            cacheControl: "3600",
            upsert: false,
            contentType: file.type,
          });

        if (uploadError) {
          console.error(uploadError);
          toast({
            title: "Chyba",
            description: `Nahrávání selhalo: ${file.name}`,
            variant: "destructive"
          });
          continue;
        }

        // Save photo info to database
        const { error: insertError } = await supabase
          .from("studio_photos")
          .insert({
            title: `${name} - ${file.name.replace(/\.[^/.]+$/, "")}`,
            description: `Fotografie od ${name} (${email})`,
            file_path: uploadData?.path || path,
            file_size: file.size,
            content_type: file.type,
            category: "submission",
            // is_approved stays default false - will need admin approval
          });

        if (insertError) {
          console.error(insertError);
          toast({
            title: "Chyba",
            description: `Uložení selhalo: ${file.name}`,
            variant: "destructive"
          });
        }
      }

      toast({
        title: "Úspěch",
        description: "Fotografie byly odeslány! Po schválení se objeví v galerii."
      });
      setName("");
      setEmail("");
      setFiles(null);
      setShowForm(false);
      const inputEl = document.getElementById("photo-upload-input") as HTMLInputElement | null;
      if (inputEl) inputEl.value = "";
    } catch (err) {
      console.error(err);
      toast({
        title: "Chyba",
        description: "Došlo k chybě při odesílání",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="studio-upload" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Máte zajímavé <span className="text-studio-gold">fotky ze studia</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Můžete nám je poslat! Budeme rádi, když se vaše fotografie objeví v naší galerii.
          </p>
          {!showForm && (
            <Button 
              onClick={() => setShowForm(true)}
              className="bg-studio-gold hover:bg-studio-gold/90 text-white px-8 py-3 text-lg"
            >
              Odeslat fotografie
            </Button>
          )}
        </div>

        {showForm && (
        <Card className="max-w-2xl mx-auto p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Jméno</Label>
                <Input
                  id="name"
                  placeholder="Vaše jméno"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="vas@email.cz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="photo-upload-input">Fotografie</Label>
              <Input
                id="photo-upload-input"
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setFiles(e.target.files)}
                required
              />
              <p className="text-xs text-muted-foreground">Můžete vybrat více fotografií najednou.</p>
            </div>

            <div className="flex items-center justify-between">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowForm(false)}
              >
                Zrušit
              </Button>
              <Button type="submit" disabled={loading} className="bg-studio-gold hover:bg-studio-gold/90 text-white">
                {loading ? "Odesílám..." : "Odeslat fotografie"}
              </Button>
            </div>
          </form>
        </Card>
        )}
      </div>
    </section>
  );
};

export default StudioUpload;
