import { ArrowLeft, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ContactSupport = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Voyant
        </Link>

        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Contact Support</h1>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Have questions about Voyant? We're here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>

          <div className="grid gap-8">
            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-soft transition-shadow">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-semibold text-foreground">Email Support</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Send us an email and we'll respond within 24 hours.
              </p>
              <Button asChild className="bg-gradient-primary">
                <a href="mailto:support@voyant.health">
                  Email us at support@voyant.health
                </a>
              </Button>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 hover:shadow-soft transition-shadow">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-semibold text-foreground">General Inquiries</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                For general questions about Voyant and our mission.
              </p>
              <Button asChild variant="outline">
                <a href="mailto:hello@voyant.health">
                  Say hello at hello@voyant.health
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;