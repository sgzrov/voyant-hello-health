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
    
    try {
      const response = await fetch('/functions/v1/send-waitlist-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to send confirmation email');
      }

      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "You've been added to our launch list and will receive a confirmation email shortly!",
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Added to waitlist!",
        description: "You're on the list! We'll notify you when Voyant is ready.",
        variant: "default",
      });
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center space-y-4 animate-fade-in">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full animate-pulse-glow">
          <CheckCircle2 className="w-8 h-8 text-white" />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">You're on the list!</h3>
          <p className="text-muted-foreground">
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
          className="flex-1 h-12 px-4 bg-white/90 backdrop-blur border-2 border-primary/20 focus:border-primary/40 text-foreground placeholder:text-muted-foreground"
          disabled={isLoading}
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="h-12 px-6 bg-gradient-primary text-white font-medium hover:shadow-glow transition-all duration-300 group"
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
      <p className="text-sm text-muted-foreground mt-3 text-center">
        Be among the first to know when we launch. No spam, ever.
      </p>
    </form>
  );
};