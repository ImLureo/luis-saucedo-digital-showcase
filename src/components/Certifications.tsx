import { Award } from "lucide-react";

const Certifications = () => {
  const certs = [
    {
      title: "Microsoft Excel 2016",
      issuer: "Certificación MOS — Certiport",
      year: "2024"
    },
    {
      title: "TOEIC",
      issuer: "Certificación en competencia de inglés",
      year: "2024"
    },
    {
      title: "Java Foundations",
      issuer: "Certificación en programación Java",
      year: "2023"
    }
  ];

  return (
    <section id="certificaciones" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-5xl md:text-7xl mb-16 tracking-wide">
          CERTIFICACIONES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((cert) => (
            <div 
              key={cert.title} 
              className="group glass-card p-8 rounded-xl hover:border-foreground/20 transition-all duration-500"
            >
              <div className="flex flex-col h-full">
                <Award className="w-12 h-12 mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                <h4 className="font-display text-2xl mb-3 tracking-wide">{cert.title}</h4>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{cert.issuer}</p>
                <div className="text-xs text-muted-foreground font-mono">{cert.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
