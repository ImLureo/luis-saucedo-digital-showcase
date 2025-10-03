import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Sidebar from "@/components/Sidebar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-6">
            <About />
            <Projects />
            <Certifications />
          </div>
          
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-6 py-8 text-center text-muted-foreground border-t border-border/30">
        <p>
          © {new Date().getFullYear()} Hecho por <strong className="text-primary">Luis Saucedo</strong> • Panamá
        </p>
      </footer>
    </div>
  );
};

export default Index;
