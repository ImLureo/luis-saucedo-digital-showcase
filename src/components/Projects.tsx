import moodmendImg from "@/assets/moodmend.png";
import chanceImg from "@/assets/chance.png";
import findyourpetImg from "@/assets/findyourpet.png";

const Projects = () => {
  const projects = [
    {
      title: "Mood Mend",
      description: "Proyecto grupal enfocado en bienestar emocional — diseño de interfaz y soporte en documentación y pruebas.",
      image: moodmendImg,
      year: "2024"
    },
    {
      title: "Chance",
      description: "App educativa para mejorar pronunciación en inglés — Cofundador, participé en diseño y guionización de lecciones, marketing y videos.",
      image: chanceImg,
      year: "2024"
    },
    {
      title: "Find Your Pet",
      description: "Plataforma para conectar mascotas perdidas con dueños — Cofundador, colaboración en investigación, pruebas y presentaciones.",
      image: findyourpetImg,
      year: "2024"
    }
  ];

  return (
    <section id="proyectos" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-5xl md:text-7xl mb-16 tracking-wide">
          PROYECTOS
        </h2>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-border/30 bg-card">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              
              <div className={`md:col-span-5 space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="text-sm text-muted-foreground font-mono">{`0${index + 1}`}</div>
                <h3 className="font-display text-4xl md:text-5xl tracking-wide">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-4">
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
