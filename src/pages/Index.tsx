import { EmailCollector } from "@/components/EmailCollector";
import { SpaceBackground } from "@/components/SpaceBackground";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      <SpaceBackground />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4 flex-1 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-center justify-center">
            
            {/* Hero Content */}
            <div className="text-center animate-fade-up max-w-4xl">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-sm font-medium text-white mb-6 animate-fade-in">
                🚀 Coming Soon
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Meet{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Voyant
                </span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
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
      <footer className="relative z-10 py-8 px-4 mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <Link 
                to="/privacy-policy" 
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link 
                to="/contact-support" 
                className="hover:text-white transition-colors duration-300"
              >
                Contact Support
              </Link>
            </div>
            <div className="text-white/60 text-sm">
              © Voyant
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;