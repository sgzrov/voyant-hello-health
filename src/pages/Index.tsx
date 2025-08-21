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
              
              <div className="flex items-center justify-center text-sm text-muted-foreground">
                <div className="flex -space-x-2 mr-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-white" />
                  ))}
                </div>
                <span>Be among the first to know when we launch</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;