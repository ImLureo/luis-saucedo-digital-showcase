import profileImg from "@/assets/profile.jpg";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 glass-card">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src={profileImg} 
                alt="Luis Saucedo" 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-primary glow-border"
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-glow">Luis Saucedo</h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Estudiante • Programación • Diseño • Fotografía
              </p>
            </div>
          </div>
          
          <nav className="flex gap-4 md:gap-6 text-sm md:text-base">
            <button 
              onClick={() => scrollToSection('proyectos')} 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Proyectos
            </button>
            <span className="text-muted-foreground">•</span>
            <button 
              onClick={() => scrollToSection('certificaciones')} 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Certificaciones
            </button>
            <span className="text-muted-foreground">•</span>
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Contacto
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
