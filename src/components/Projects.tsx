import moodmendImg from "@/assets/moodmend.png";
import chanceImg from "@/assets/chance.png";
import findyourpetImg from "@/assets/findyourpet.png";

const Projects = () => {
  const projects = [
    {
      title: "Mood Mend",
      description: "Proyecto grupal enfocado en bienestar emocional — diseño de interfaz y soporte en documentación y pruebas.",
      image: moodmendImg
    },
    {
      title: "Chance",
      description: "App educativa para mejorar pronunciación en inglés — Cofundador, participé en diseño y guionización de lecciones, marketing y videos.",
      image: chanceImg
    },
    {
      title: "Find Your Pet",
      description: "Plataforma para conectar mascotas perdidas con dueños — Cofundador, colaboración en investigación, pruebas y presentaciones.",
      image: findyourpetImg
    }
  ];

  return (
    <section id="proyectos" className="glass-card rounded-xl p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Proyectos destacados</h2>
      <div className="space-y-6">
        {projects.map((project) => (
          <div 
            key={project.title} 
            className="flex gap-4 items-start hover:bg-secondary/20 p-4 rounded-lg transition-all duration-300 group"
          >
            <div className="flex-shrink-0 w-24 h-18 md:w-28 md:h-20 rounded-lg overflow-hidden border border-primary/20 group-hover:border-primary/50 transition-colors">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
