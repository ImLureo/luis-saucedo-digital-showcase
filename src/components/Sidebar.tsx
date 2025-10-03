import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Briefcase, Heart } from "lucide-react";

const Sidebar = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Me pondré en contacto contigo pronto.");
  };

  return (
    <aside className="space-y-6">
      <div className="glass-card rounded-xl p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-primary">Información</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3 pb-4 border-b border-border/50">
            <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <strong className="block text-sm">Ubicación</strong>
              <span className="text-sm text-muted-foreground">Panamá</span>
            </div>
          </div>
          
          <div className="flex items-start gap-3 pb-4 border-b border-border/50">
            <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <strong className="block text-sm">Disponibilidad</strong>
              <span className="text-sm text-muted-foreground">Proyectos estudiantiles / freelance</span>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <strong className="block text-sm">Valores</strong>
              <span className="text-sm text-muted-foreground">
                Liderazgo • Resiliencia • Trabajo en equipo • Resolución de conflictos
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/50">
          <h3 className="font-bold mb-3">Descargar CV</h3>
          <Button 
            variant="outline" 
            className="w-full border-primary/50 hover:bg-primary/10"
            asChild
          >
            <a href="mailto:luis.saucedo2025@provivienda.superate.org.pa?subject=Interesado%20en%20tu%20perfil">
              <Mail className="w-4 h-4 mr-2" />
              Enviar correo / pedir CV
            </a>
          </Button>
        </div>
      </div>

      <div id="contacto" className="glass-card rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 text-primary">Contacto rápido</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            type="text" 
            placeholder="Tu nombre" 
            required 
            className="bg-background/50 border-primary/20 focus:border-primary"
          />
          <Input 
            type="email" 
            placeholder="Tu correo" 
            required 
            className="bg-background/50 border-primary/20 focus:border-primary"
          />
          <Textarea 
            rows={4} 
            placeholder="Mensaje (ej: colaboración, oferta, pregunta)" 
            required 
            className="bg-background/50 border-primary/20 focus:border-primary resize-none"
          />
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Enviar mensaje
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-border/50">
          <strong className="block mb-2">Redes</strong>
          <a 
            href="https://www.linkedin.com/in/luis-saucedo-002548300" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline break-all"
          >
            linkedin.com/in/luis-saucedo-002548300
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
