import { Badge } from "@/components/ui/badge";
import profileImg from "@/assets/profile.jpg";

const About = () => {
  const badges = [
    "Doble turno",
    "Inglés",
    "Programación",
    "Diseño",
    "Fotografía",
    "Edición de video"
  ];

  const skills = [
    "HTML & CSS",
    "JavaScript",
    "Microsoft Office",
    "Figma / Diseño",
    "Fotografía",
    "Edición de video",
    "Inglés (básico-intermedio)"
  ];

  return (
    <section id="sobre-mi" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-border/30">
              <img 
                src={profileImg} 
                alt="Luis Saucedo" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 font-display text-8xl opacity-5 select-none">
              LS
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-5xl md:text-6xl mb-6 tracking-wide">
                SOBRE MÍ
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Soy estudiante en doble turno: en la mañana estudio en la escuela y por la tarde en Súperate. 
                He participado en proyectos grupales como <strong>Mood Mend</strong>, <strong>Chance</strong> y 
                <strong> Find Your Pet</strong>, desarrollando valores como liderazgo, resiliencia y trabajo en equipo.
              </p>

              <div className="flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <Badge 
                    key={badge} 
                    variant="outline" 
                    className="px-4 py-2 border-foreground/20 hover:bg-foreground/5 transition-colors"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-3xl mb-4 tracking-wide">HABILIDADES</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div 
                    key={skill} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors border-l-2 border-border/50 pl-3"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-3xl mb-4 tracking-wide">QUÉ BUSCO</h3>
              <p className="text-foreground/80 leading-relaxed">
                Aprender, participar en más proyectos colaborativos y mejorar mis habilidades en programación 
                y producción audiovisual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
