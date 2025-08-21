import { EmailCollector } from "@/components/EmailCollector";
import { FeatureCard } from "@/components/FeatureCard";
import { FloatingElements } from "@/components/FloatingElements";
import heroImage from "@/assets/hero-image.jpg";
import chatIcon from "@/assets/chat-icon.png";
import privacyIcon from "@/assets/privacy-icon.png";
import mobileIcon from "@/assets/mobile-icon.png";

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

      {/* Features Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-up">
              Why Choose Voyant?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '100ms' }}>
              Experience the future of personal health management with our AI-powered platform designed for your wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={chatIcon}
              title="AI Health Chat"
              description="Have natural conversations about your health. Our AI understands context and provides personalized insights based on your unique health profile."
              delay={200}
            />
            
            <FeatureCard
              icon={privacyIcon}
              title="Privacy First"
              description="Your health data is encrypted and secure. We follow strict medical privacy standards to ensure your information stays private and protected."
              delay={400}
            />
            
            <FeatureCard
              icon={mobileIcon}
              title="Mobile Native"
              description="Designed specifically for mobile use. Access your health companion anywhere, anytime with our intuitive and responsive interface."
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/60 backdrop-blur-xl border border-primary/20 rounded-3xl p-12 shadow-soft animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Health Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our exclusive launch list and be among the first to experience the future of AI-powered health conversations.
            </p>
            
            <div className="max-w-md mx-auto">
              <EmailCollector />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 border-t border-primary/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Voyant
            </h3>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Voyant. Your AI-powered health companion. Coming soon.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;