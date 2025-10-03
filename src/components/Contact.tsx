import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Me pondré en contacto contigo pronto.");
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl mb-16 tracking-wide text-center">
            CONTACTO
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl mb-4 tracking-wide">INFORMACIÓN</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="text-sm uppercase tracking-wider mb-1">Ubicación</p>
                    <p className="text-foreground">Panamá</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider mb-1">Disponibilidad</p>
                    <p className="text-foreground">Proyectos estudiantiles / Freelance</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider mb-1">Valores</p>
                    <p className="text-foreground text-sm">Liderazgo • Resiliencia • Trabajo en equipo • Resolución de conflictos</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border/30 space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start h-12 border-foreground/20 hover:bg-foreground/5"
                  asChild
                >
                  <a href="mailto:luis.saucedo2025@provivienda.superate.org.pa">
                    <Mail className="w-4 h-4 mr-3" />
                    Enviar correo
                  </a>
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full justify-start h-12 border-foreground/20 hover:bg-foreground/5"
                  asChild
                >
                  <a 
                    href="https://www.linkedin.com/in/luis-saucedo-002548300" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-3" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            {/* Form */}
            <div className="glass-card p-8 rounded-xl">
              <h3 className="font-display text-2xl mb-6 tracking-wide">ENVIAR MENSAJE</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input 
                  type="text" 
                  placeholder="Tu nombre" 
                  required 
                  className="bg-background/50 border-border/50 h-12"
                />
                <Input 
                  type="email" 
                  placeholder="Tu correo" 
                  required 
                  className="bg-background/50 border-border/50 h-12"
                />
                <Textarea 
                  rows={5} 
                  placeholder="Tu mensaje" 
                  required 
                  className="bg-background/50 border-border/50 resize-none"
                />
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-foreground text-background hover:bg-foreground/90"
                >
                  Enviar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
