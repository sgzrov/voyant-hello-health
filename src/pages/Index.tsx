import { EmailCollector } from "@/components/EmailCollector";
import { FloatingElements } from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-hidden">
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center">
            
            {/* Hero Content */}
            <div className="text-center animate-fade-up max-w-4xl">
              <div className="inline-flex items-center px-4 py-2 bg-accent/80 backdrop-blur border border-primary/20 rounded-full text-sm font-medium text-primary mb-6 animate-fade-in">
                🚀 Coming Soon
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Meet{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Voyant
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                Your health has never been just steps and calories. It's a complex story — and for the first time, you can see it clearly.
              </p>
              
              <div className="mb-8">
                <EmailCollector />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">Contact Support</a>
            </div>
            <div className="text-muted-foreground text-sm">
              © Voyant
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;