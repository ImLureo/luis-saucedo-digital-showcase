const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-display text-2xl tracking-wider">
            LS
          </div>
          
          <nav className="flex gap-8 text-sm uppercase tracking-wider">
            <button 
              onClick={() => scrollToSection('sobre-mi')} 
              className="hover:text-primary/80 transition-colors"
            >
              Sobre mí
            </button>
            <button 
              onClick={() => scrollToSection('proyectos')} 
              className="hover:text-primary/80 transition-colors"
            >
              Proyectos
            </button>
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="hover:text-primary/80 transition-colors"
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
