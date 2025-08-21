import { AnimatedText } from "@/components/AnimatedText";
import { MinimalEmailCollector } from "@/components/MinimalEmailCollector";
import { Heart, Shield, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Show subtitle after main title animation
    const subtitleTimer = setTimeout(() => {
      setShowSubtitle(true);
    }, 1200);

    // Show features after subtitle
    const featuresTimer = setTimeout(() => {
      setShowFeatures(true);
    }, 2000);

    return () => {
      clearTimeout(subtitleTimer);
      clearTimeout(featuresTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-1/4 right-1/6 w-40 h-40 bg-primary/3 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary/7 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 relative z-10">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          
          {/* Main Title */}
          <h1 className="text-hero-lg font-black text-center mb-8">
            {isLoaded ? (
              <AnimatedText
                text="Voyant"
                className="bg-gradient-text bg-clip-text text-transparent leading-none"
                delay={300}
              />
            ) : (
              <span className="bg-gradient-text bg-clip-text text-transparent leading-none opacity-0">
                Voyant
              </span>
            )}
          </h1>

          {/* Subtitle */}
          {showSubtitle && (
            <div className="animate-fade-up mb-12">
              <p className="text-2xl md:text-3xl font-medium text-muted-foreground mb-2">
                Your AI Health Companion
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-accent border border-primary/20 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse mr-3" />
                <span className="text-primary font-semibold text-lg">Private Beta</span>
              </div>
            </div>
          )}

          {/* Email Collector */}
          {showSubtitle && <MinimalEmailCollector />}
        </div>

        {/* Features Preview */}
        {showFeatures && (
          <div className="w-full max-w-6xl mx-auto animate-fade-up" style={{ animationDelay: '500ms' }}>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Smart Health Chat</h3>
                <p className="text-muted-foreground">AI-powered conversations about your wellness journey</p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '200ms' }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Privacy First</h3>
                <p className="text-muted-foreground">Your health data stays secure and encrypted</p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '400ms' }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Mobile Native</h3>
                <p className="text-muted-foreground">Designed specifically for your phone</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-muted/50 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold bg-gradient-text bg-clip-text text-transparent">
                Voyant
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">Contact Support</a>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-muted-foreground text-sm">
              © 2024 Voyant. Transforming health conversations with AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;