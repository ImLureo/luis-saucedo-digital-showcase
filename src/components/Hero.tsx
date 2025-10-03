import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 md:py-40">
        <div className="max-w-4xl">
          <h1 className="font-display text-7xl md:text-9xl lg:text-[12rem] leading-none mb-6 tracking-wider">
            PORTAFOLIO
          </h1>
          <div className="space-y-2 text-xl md:text-2xl">
            <p className="font-light">Luis Saucedo</p>
            <p className="text-muted-foreground">Estudiante • Programación • Diseño • Fotografía</p>
          </div>
          <div className="mt-8 text-right">
            <p className="text-lg text-muted-foreground">2025 - Panamá</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
