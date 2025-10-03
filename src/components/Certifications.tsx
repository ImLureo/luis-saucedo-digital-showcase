import { Award } from "lucide-react";

const Certifications = () => {
  const certs = [
    {
      title: "Microsoft Excel 2016",
      issuer: "Certificación MOS — Certiport"
    },
    {
      title: "TOEIC",
      issuer: "Certificación en competencia de inglés"
    },
    {
      title: "Java Foundations",
      issuer: "Certificación en programación Java"
    }
  ];

  return (
    <section id="certificaciones" className="glass-card rounded-xl p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Certificaciones</h2>
      <div className="space-y-4">
        {certs.map((cert) => (
          <div 
            key={cert.title} 
            className="flex gap-4 items-center bg-secondary/20 p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h4 className="text-base md:text-lg font-bold">{cert.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
