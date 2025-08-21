import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

export const MinimalEmailCollector = () => {
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
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    setIsLoading(false);
    setIsSubmitted(true);
    toast({
      title: "Welcome to Voyant!",
      description: "You're on our exclusive launch list. We'll be in touch soon!",
    });
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center space-y-6 animate-fade-in">
        <div className="flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full animate-scale-bounce">
          <CheckCircle2 className="w-10 h-10 text-white" />
        </div>
        <div className="text-center max-w-md">
          <h3 className="text-2xl font-bold text-foreground mb-3">You're in!</h3>
          <p className="text-muted-foreground text-lg">
            We'll notify you the moment Voyant is ready to transform your health conversations.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto animate-fade-up" style={{ animationDelay: '1.5s' }}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-14 px-6 text-lg bg-white border-2 border-muted hover:border-primary/30 focus:border-primary transition-all duration-300 rounded-xl"
          disabled={isLoading}
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-14 text-lg font-semibold bg-gradient-primary hover:shadow-glow transition-all duration-300 rounded-xl transform hover:scale-105"
        >
          {isLoading ? (
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Joining...</span>
            </div>
          ) : (
            "Get Early Access"
          )}
        </Button>
      </form>
      <p className="text-center text-muted-foreground mt-4 text-sm">
        No spam. Just health innovation.
      </p>
    </div>
  );
};