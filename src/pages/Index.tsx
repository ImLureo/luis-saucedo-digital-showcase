import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/30">
        <p>
          © {new Date().getFullYear()} <span className="font-display tracking-wider">LUIS SAUCEDO</span> • Panamá
        </p>
      </footer>
    </div>
  );
};

export default Index;
