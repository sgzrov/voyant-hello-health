import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const EmailCollector = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    toast({
      title: "Success!",
      description: "You've been added to our launch list. We'll notify you when Voyant is ready!",
    });
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center space-y-4 animate-fade-in">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse-glow">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-2">You're on the list!</h3>
          <p className="text-white/80">
            We'll notify you as soon as Voyant launches. Get ready to transform your health conversations!
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto animate-fade-up">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 h-12 px-4 bg-white/10 backdrop-blur border-2 border-white/20 focus:border-white/40 text-white placeholder:text-white/60"
          disabled={isLoading}
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="h-12 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group border-0"
        >
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Joining...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <span>Get Notified</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          )}
        </Button>
      </div>
      <p className="text-sm text-white/60 mt-3 text-center">
        Be among the first to know when we launch. No spam, ever.
      </p>
    </form>
  );
};