import { EmailCollector } from "@/components/EmailCollector";
import { FloatingElements } from "@/components/FloatingElements";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-hidden">
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Hero Content */}
            <div className="text-center lg:text-left animate-fade-up">
              <div className="inline-flex items-center px-4 py-2 bg-accent/80 backdrop-blur border border-primary/20 rounded-full text-sm font-medium text-primary mb-6 animate-fade-in">
                🚀 Coming Soon
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Meet{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Voyant
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Your AI-powered health companion. Get personalized insights, track symptoms, and chat about your wellness journey—all in one intelligent mobile app.
              </p>
              
              <div className="mb-8">
                <EmailCollector />
              </div>
              
              <div className="flex items-center justify-center lg:justify-start text-sm text-muted-foreground">
                <div className="flex -space-x-2 mr-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-white" />
                  ))}
                </div>
                <span>500+ people already signed up</span>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Voyant health chat app interface"
                  className="w-full h-auto rounded-2xl shadow-soft animate-float"
                />
                <div className="absolute inset-0 bg-gradient-primary/10 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;