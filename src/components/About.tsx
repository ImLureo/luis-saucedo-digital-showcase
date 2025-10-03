import { Badge } from "@/components/ui/badge";

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
    "JavaScript (básico)",
    "Microsoft Office",
    "Figma / Diseño",
    "Fotografía",
    "Edición de video (básico)",
    "Comunicación (inglés básico-intermedio)"
  ];

  return (
    <section className="glass-card rounded-xl p-6 md:p-8 space-y-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Sobre mí</h2>
        <p className="text-foreground/90 leading-relaxed">
          Soy estudiante en doble turno: en la mañana estudio en la escuela y por la tarde en Súperate. 
          Tengo conocimientos en inglés, programación, diseño, herramientas de Microsoft, fotografía y 
          edición de video básica. He participado en proyectos grupales como <strong>Mood Mend</strong>, 
          <strong> Chance</strong> y <strong>Find Your Pet</strong>. A través de estas experiencias he 
          desarrollado valores y habilidades como liderazgo, resiliencia, trabajo en equipo y resolución 
          de conflictos.
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {badges.map((badge) => (
            <Badge key={badge} variant="secondary" className="px-3 py-1">
              {badge}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Habilidades</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              variant="outline" 
              className="px-3 py-1 border-primary/30 hover:border-primary transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Qué busco</h2>
        <p className="text-foreground/90 leading-relaxed">
          Aprender, participar en más proyectos colaborativos y mejorar mis habilidades en programación 
          y producción audiovisual. Me interesan roles donde pueda aportar creatividad y liderazgo, 
          además de seguir desarrollando trabajo en equipo.
        </p>
      </div>
    </section>
  );
};

export default About;
